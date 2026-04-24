'use client'

import Image from "next/image";
import Boxes from "@/components/utils/Boxes";
import { useForm } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";
import { BiCustomize } from "react-icons/bi";
import { useState, useRef, useCallback } from "react";
import { toast } from "sonner";

const MAX_FILES = 5;
const MAX_SIZE_MB = 5;
// image/* 전체 허용 + PDF
const isAllowedType = (f) => f.type.startsWith('image/') || f.type === 'application/pdf';

const INDUSTRIES = [
    '식품·음료',
    '화장품·뷰티',
    '의약·헬스케어',
    '의류·패션·잡화',
    '전자·IT기기',
    '농수산물·식재료',
    '생활용품·홈케어',
    '선물·기념품',
    '교육·문구·완구',
    '기타',
];

// 공통 토스트 카드 스타일
const TOAST_CARD = {
    background: '#fff',
    borderRadius: '14px',
    padding: '20px',
    width: '360px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
    fontFamily: 'NanumSquareR, sans-serif',
};

// 섹션 헤더
function SectionHeader({ num, title }) {
    return (
        <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-6 rounded-full bg-sky-500 text-white text-xs font-black flex items-center justify-center shrink-0">
                {num}
            </span>
            <h3 className="text-sm font-black text-gray-800">{title}</h3>
        </div>
    );
}

// 입력 필드 래퍼
function FieldError({ error }) {
    if (!error) return <div className="h-5 mt-1" />;
    return (
        <div className="flex items-center gap-1 mt-1 h-5 text-red-500 text-xs">
            <RiErrorWarningFill className="shrink-0" />
            <span>{error.message}</span>
        </div>
    );
}

const inputClass = (hasError) =>
    `w-full px-4 py-3 text-sm text-gray-900 bg-white border rounded-xl outline-none transition-all duration-150 placeholder:text-gray-300 ${
        hasError
            ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100'
            : 'border-gray-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100'
    }`;

export default function Form() {
    const [disabled, setDisabled] = useState(false);
    const [isConfirming, setIsConfirming] = useState(false);
    const confirmToastId = useRef(null);
    const { register, handleSubmit, formState: { errors } } = useForm();

    // 이미지 업로드 상태
    // items: [{ file, previewUrl, status: 'pending'|'uploading'|'done'|'error', cloudUrl }]
    const [imageItems, setImageItems] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const dragCounterRef = useRef(0); // 자식 요소 진입/이탈 오작동 방지

    // 공통 업로드 처리 함수 (파일 선택 & 드래그앤드랍 공용)
    const uploadFiles = useCallback(async (files) => {
        const remaining = MAX_FILES - imageItems.length;
        if (remaining <= 0) return;
        const toAdd = Array.from(files).slice(0, remaining);

        // 유효성 검사
        const valid = toAdd.filter(f => {
            if (!isAllowedType(f)) {
                toast.custom(() => (
                    <div style={{ ...TOAST_CARD, border: '2px solid #f87171' }}>
                        <p style={{ fontWeight: '800', fontSize: '14px', color: '#111', margin: 0 }}>지원하지 않는 파일 형식입니다</p>
                        <p style={{ color: '#6b7280', fontSize: '12px', margin: '6px 0 0' }}>이미지 파일(JPG·PNG·BMP 등) 또는 PDF만 첨부 가능합니다</p>
                    </div>
                ), { duration: 3000 });
                return false;
            }
            if (f.size > MAX_SIZE_MB * 1024 * 1024) {
                toast.custom(() => (
                    <div style={{ ...TOAST_CARD, border: '2px solid #f87171' }}>
                        <p style={{ fontWeight: '800', fontSize: '14px', color: '#111', margin: 0 }}>파일 크기가 초과되었습니다</p>
                        <p style={{ color: '#6b7280', fontSize: '12px', margin: '6px 0 0' }}>파일당 최대 {MAX_SIZE_MB}MB까지 첨부 가능합니다</p>
                    </div>
                ), { duration: 3000 });
                return false;
            }
            return true;
        });
        if (!valid.length) return;

        const newItems = valid.map(file => ({
            file,
            previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
            status: 'pending',
            cloudUrl: null,
        }));
        setImageItems(prev => [...prev, ...newItems]);

        // Cloudinary 서명 요청
        let sigData;
        try {
            const sigRes = await fetch('/api/upload-signature', { method: 'POST' });
            sigData = await sigRes.json();
            if (sigData.error) {
                console.error('[upload] 서명 발급 실패:', sigData.error);
                setImageItems(prev => prev.map((item, idx) =>
                    idx >= prev.length - newItems.length ? { ...item, status: 'error' } : item
                ));
                return;
            }
        } catch (e) {
            console.error('[upload] 서명 요청 오류:', e);
            setImageItems(prev => prev.map((item, idx) =>
                idx >= prev.length - newItems.length ? { ...item, status: 'error' } : item
            ));
            return;
        }

        setImageItems(prev => prev.map((item, idx) =>
            idx >= prev.length - newItems.length ? { ...item, status: 'uploading' } : item
        ));

        const startIdx = imageItems.length;
        await Promise.all(newItems.map(async (item, i) => {
            const formData = new FormData();
            formData.append('file', item.file);
            formData.append('api_key', sigData.apiKey);
            formData.append('timestamp', sigData.timestamp);
            formData.append('signature', sigData.signature);
            formData.append('folder', sigData.folder);
            try {
                const res = await fetch(
                    `https://api.cloudinary.com/v1_1/${sigData.cloudName}/auto/upload`,
                    { method: 'POST', body: formData }
                );
                const data = await res.json();
                if (!data.secure_url) {
                    console.error(`[upload] Cloudinary 업로드 실패 (${item.file.name}):`, data);
                }
                setImageItems(prev => prev.map((it, idx) =>
                    idx === startIdx + i
                        ? { ...it, status: data.secure_url ? 'done' : 'error', cloudUrl: data.secure_url || null }
                        : it
                ));
            } catch {
                setImageItems(prev => prev.map((it, idx) =>
                    idx === startIdx + i ? { ...it, status: 'error' } : it
                ));
            }
        }));

        if (fileInputRef.current) fileInputRef.current.value = '';
    }, [imageItems]);

    const handleFileChange = useCallback((e) => {
        uploadFiles(e.target.files);
    }, [uploadFiles]);

    // 드래그앤드랍 핸들러
    const handleDragEnter = useCallback((e) => {
        e.preventDefault();
        dragCounterRef.current += 1;
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e) => {
        e.preventDefault();
        dragCounterRef.current -= 1;
        if (dragCounterRef.current === 0) setIsDragging(false);
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        dragCounterRef.current = 0;
        setIsDragging(false);
        uploadFiles(e.dataTransfer.files);
    }, [uploadFiles]);

    const removeImage = useCallback((idx) => {
        setImageItems(prev => {
            const item = prev[idx];
            if (item?.previewUrl) URL.revokeObjectURL(item.previewUrl);
            return prev.filter((_, i) => i !== idx);
        });
    }, []);

    const closeConfirm = useCallback(() => {
        if (confirmToastId.current !== null) {
            toast.dismiss(confirmToastId.current);
            confirmToastId.current = null;
        }
        setIsConfirming(false);
        setDisabled(false);
    }, []);

    const showSuccessToast = () => {
        toast.custom(() => (
            <div style={{ ...TOAST_CARD, border: '2px solid #16a34a' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '20px' }}>✅</span>
                    <span style={{ fontWeight: '800', fontSize: '15px', color: '#111' }}>등록이 완료되었습니다!</span>
                </div>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                    최대한 빠르게 연락드리겠습니다 😊
                </p>
            </div>
        ), { duration: 2000 });
        setTimeout(() => window.location.reload(), 2000);
    };

    const showErrorToast = (text) => {
        toast.custom(() => (
            <div style={{ ...TOAST_CARD, border: '2px solid #f87171' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <RiErrorWarningFill style={{ color: '#f87171', fontSize: '20px', flexShrink: 0 }} />
                    <span style={{ fontWeight: '800', fontSize: '15px', color: '#111' }}>등록에 실패했습니다</span>
                </div>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{text}</p>
            </div>
        ), { duration: 4000 });
    };

    const submitInquiry = (data) => {
        fetch('/api/inquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(r => r.json())
            .then(res => {
                if (res?.message === 'OK') {
                    showSuccessToast();
                } else {
                    showErrorToast('서버 오류가 발생했습니다. 고객센터로 전화 또는 메일 부탁드립니다.');
                    setDisabled(false);
                }
            })
            .catch((e) => {
                console.error('inquiry fetch error:', e);
                showErrorToast('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
                setDisabled(false);
            });
    };

    const onSubmit = (data) => {
        // 업로드 중인 파일이 있으면 잠시 대기 안내
        if (imageItems.some(item => item.status === 'uploading')) {
            toast.custom(() => (
                <div style={{ ...TOAST_CARD, border: '2px solid #0ea5e9' }}>
                    <p style={{ fontWeight: '800', fontSize: '14px', color: '#111', margin: 0 }}>이미지 업로드 중입니다</p>
                    <p style={{ color: '#6b7280', fontSize: '12px', margin: '6px 0 0' }}>잠시 후 다시 시도해주세요.</p>
                </div>
            ), { duration: 2500 });
            return;
        }
        // 업로드 완료된 URL만 포함
        const imageUrls = imageItems
            .filter(item => item.status === 'done' && item.cloudUrl)
            .map(item => item.cloudUrl);
        data.imageUrls = imageUrls;
        setDisabled(true);
        setIsConfirming(true);
        const id = toast.custom((t) => (
            <div style={{ ...TOAST_CARD, border: '2px solid #0ea5e9' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <RiErrorWarningFill style={{ color: '#0ea5e9', fontSize: '20px', flexShrink: 0 }} />
                        <span style={{ fontWeight: '800', fontSize: '15px', color: '#111' }}>문의를 등록하시겠어요?</span>
                    </div>
                    <button onClick={closeConfirm} style={{ color: '#9ca3af', fontSize: '16px', background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 0 8px', lineHeight: 1, flexShrink: 0 }}>✕</button>
                </div>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6', marginBottom: '18px' }}>
                    입력하신 내용으로 접수됩니다.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                    <button onClick={closeConfirm} style={{ padding: '8px 18px', fontSize: '13px', fontWeight: '700', border: '1.5px solid #d1d5db', borderRadius: '8px', background: '#fff', color: '#374151', cursor: 'pointer' }}>취소</button>
                    <button
                        onClick={() => {
                            toast.dismiss(t);
                            confirmToastId.current = null;
                            setIsConfirming(false);
                            submitInquiry(data);
                        }}
                        style={{ padding: '8px 18px', fontSize: '13px', fontWeight: '700', borderRadius: '8px', background: '#0ea5e9', color: '#fff', border: 'none', cursor: 'pointer' }}
                    >등록하기</button>
                </div>
            </div>
        ), { duration: Infinity });
        confirmToastId.current = id;
    };

    const onError = () => {};

    return (
        <>
            {isConfirming && (
                <div onClick={closeConfirm} style={{ position: 'fixed', inset: 0, zIndex: 999999998, cursor: 'default' }} />
            )}

            <section className="bg-gray-50 py-10 pb-20">
                <div className="max-w-3xl mx-auto px-6">
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

                            {/* 섹션 1: 신청자 정보 */}
                            <div className="p-8 border-b border-gray-100">
                                <SectionHeader num="1" title="신청자 정보" />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                                    <div>
                                        <label htmlFor="company" className="block text-xs font-bold text-gray-600 mb-1.5">
                                            회사명 <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="company" type="text" autoComplete="organization"
                                            placeholder="회사명을 입력해주세요"
                                            {...register("company", {
                                                required: '회사명을 입력해주세요',
                                                maxLength: { value: 30, message: '30자 이내로 입력해주세요' },
                                                validate: v => v.trim().length > 0 || '공백만 입력할 수 없습니다',
                                            })}
                                            className={inputClass(errors.company)}
                                        />
                                        <FieldError error={errors.company} />
                                    </div>
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-bold text-gray-600 mb-1.5">
                                            담당자명 <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="name" type="text" autoComplete="name"
                                            placeholder="담당자 성함을 입력해주세요"
                                            {...register("name", {
                                                required: '담당자명을 입력해주세요',
                                                maxLength: { value: 30, message: '30자 이내로 입력해주세요' },
                                                validate: v => v.trim().length > 0 || '공백만 입력할 수 없습니다',
                                            })}
                                            className={inputClass(errors.name)}
                                        />
                                        <FieldError error={errors.name} />
                                    </div>
                                    <div>
                                        <label htmlFor="contact" className="block text-xs font-bold text-gray-600 mb-1.5">
                                            연락처 <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="contact" type="text" autoComplete="tel-national"
                                            placeholder="010-0000-0000"
                                            {...register("contact", {
                                                required: '연락처를 입력해주세요',
                                                pattern: {
                                                    value: /^([0-9]{3,4})-?([0-9]{3,4})-?([0-9]{3,4})$/,
                                                    message: '올바른 연락처 형식이 아닙니다',
                                                },
                                            })}
                                            className={inputClass(errors.contact)}
                                        />
                                        <FieldError error={errors.contact} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-bold text-gray-600 mb-1.5">
                                            이메일 <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="email" type="text" autoComplete="email"
                                            placeholder="abc@naver.com"
                                            {...register("email", {
                                                required: '이메일을 입력해주세요',
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                                                    message: '올바른 이메일 형식이 아닙니다',
                                                },
                                            })}
                                            className={inputClass(errors.email)}
                                        />
                                        <FieldError error={errors.email} />
                                    </div>
                                </div>
                            </div>

                            {/* 섹션 2: 제품 업종 */}
                            <div className="p-8 border-b border-gray-100">
                                <SectionHeader num="2" title="제품 업종" />
                                <div>
                                    <label htmlFor="industry" className="block text-xs font-bold text-gray-600 mb-1.5">
                                        업종 <span className="text-gray-400 font-medium">(선택)</span>
                                    </label>
                                    <select
                                        id="industry"
                                        {...register("industry")}
                                        className={`${inputClass(false)} text-gray-500 cursor-pointer`}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>업종을 선택해주세요</option>
                                        {INDUSTRIES.map((ind) => (
                                            <option key={ind} value={ind}>{ind}</option>
                                        ))}
                                    </select>
                                    <p className="text-xs text-gray-400 mt-1.5">업종을 알려주시면 더 적합한 패키지를 제안해 드릴 수 있습니다.</p>
                                </div>
                            </div>

                            {/* 섹션 3: 박스 사양 */}
                            <div className="p-8 border-b border-gray-100">
                                <SectionHeader num="3" title="박스 사양" />

                                {/* 박스 형태 */}
                                <div className="mb-6">
                                    <label className="block text-xs font-bold text-gray-600 mb-3">
                                        박스 형태 <span className="text-gray-400 font-medium">(선택)</span>
                                    </label>
                                    <div className="flex flex-wrap gap-1.5">
                                        {Boxes.map((box) => (
                                            <div key={box.number} className="relative w-[88px] h-[88px]">
                                                <input
                                                    type="radio" id={`box-${box.number}`}
                                                    className="hidden peer"
                                                    {...register("box")}
                                                    value={box.name}
                                                />
                                                <label
                                                    htmlFor={`box-${box.number}`}
                                                    className="group relative w-[88px] h-[88px] flex flex-col items-center justify-end pb-1 border-2 border-gray-100 rounded-xl cursor-pointer transition-all duration-150 hover:border-sky-300 peer-checked:border-sky-500 peer-checked:bg-sky-50 overflow-hidden"
                                                    title={box.name}
                                                >
                                                    <Image src={box.image} placeholder="blur" alt={box.name} fill sizes="88px" className="object-contain p-2" />
                                                    <span className="relative z-10 text-[9px] font-bold text-gray-500 peer-checked:text-sky-600 text-center leading-tight px-0.5 truncate w-full text-center">
                                                        {box.name}
                                                    </span>
                                                </label>
                                            </div>
                                        ))}
                                        <div className="relative w-[88px] h-[88px]">
                                            <input
                                                type="radio" id="box-custom"
                                                className="hidden peer"
                                                {...register("box")}
                                                value="커스텀 박스"
                                            />
                                            <label
                                                htmlFor="box-custom"
                                                className="w-[88px] h-[88px] flex flex-col items-center justify-center gap-1 border-2 border-gray-100 rounded-xl cursor-pointer transition-all duration-150 hover:border-sky-300 peer-checked:border-sky-500 peer-checked:bg-sky-50"
                                            >
                                                <BiCustomize className="text-3xl text-gray-400" />
                                                <span className="text-[9px] font-bold text-gray-500">커스텀 박스</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* 수량 + 주문지역 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                                    <div>
                                        <label htmlFor="quantity" className="block text-xs font-bold text-gray-600 mb-1.5">
                                            수량 <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="quantity" type="text" autoComplete="off"
                                            placeholder="예) 500개, 1,000개 이상"
                                            {...register("quantity", {
                                                required: '수량을 입력해주세요',
                                                maxLength: { value: 30, message: '30자 이내로 입력해주세요' },
                                                validate: v => v.trim().length > 0 || '공백만 입력할 수 없습니다',
                                            })}
                                            className={inputClass(errors.quantity)}
                                        />
                                        <FieldError error={errors.quantity} />
                                    </div>
                                    <div>
                                        <label htmlFor="region" className="block text-xs font-bold text-gray-600 mb-1.5">
                                            납품 지역 <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            id="region" type="text" autoComplete="address-level2"
                                            placeholder="예) 서울시 강남구"
                                            {...register("region", {
                                                required: '납품 지역을 입력해주세요',
                                                maxLength: { value: 30, message: '30자 이내로 입력해주세요' },
                                                validate: v => v.trim().length > 0 || '공백만 입력할 수 없습니다',
                                            })}
                                            className={inputClass(errors.region)}
                                        />
                                        <FieldError error={errors.region} />
                                    </div>
                                </div>
                            </div>

                            {/* 섹션 4: 참고 이미지 */}
                            <div className="p-8 border-b border-gray-100">
                                <SectionHeader num="4" title="참고 이미지" />
                                <p className="text-xs text-gray-400 mb-4 break-keep">
                                    브랜드 로고, 디자인 시안, 참고 이미지 등을 첨부해 주시면 더 정확한 견적을 드릴 수 있습니다.
                                    <span className="ml-1 text-gray-400">(선택 · 최대 {MAX_FILES}개 · 파일당 {MAX_SIZE_MB}MB · 이미지·PDF)</span>
                                </p>

                                {/* 업로드 영역 (드래그앤드랍 + 클릭) */}
                                {imageItems.length < MAX_FILES && (
                                    <div
                                        onDragEnter={handleDragEnter}
                                        onDragLeave={handleDragLeave}
                                        onDragOver={handleDragOver}
                                        onDrop={handleDrop}
                                        onClick={() => fileInputRef.current?.click()}
                                        className={`flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200 mb-4 select-none
                                            ${isDragging
                                                ? 'border-sky-400 bg-sky-50 scale-[1.01]'
                                                : 'border-gray-200 hover:border-sky-300 hover:bg-sky-50'
                                            }`}
                                    >
                                        <svg
                                            className={`w-8 h-8 mb-2 transition-colors duration-200 ${isDragging ? 'text-sky-400' : 'text-gray-300'}`}
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {isDragging ? (
                                            <p className="text-sm font-bold text-sky-500">여기에 놓으세요</p>
                                        ) : (
                                            <>
                                                <p className="text-xs text-gray-400">
                                                    클릭하거나 파일을 끌어다 놓으세요
                                                </p>
                                                <p className="text-xs text-gray-300 mt-1">
                                                    {imageItems.length}/{MAX_FILES} · 이미지·PDF · 파일당 최대 {MAX_SIZE_MB}MB
                                                </p>
                                            </>
                                        )}
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*,.pdf"
                                            multiple
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                )}

                                {/* 첨부 파일 목록 */}
                                {imageItems.length > 0 && (
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                                        {imageItems.map((item, idx) => (
                                            <div key={idx} className="relative group rounded-xl overflow-hidden border border-gray-100 bg-gray-50 aspect-square flex items-center justify-center">
                                                {/* 미리보기 */}
                                                {item.previewUrl ? (
                                                    <img src={item.previewUrl} alt={`첨부 ${idx + 1}`} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="flex flex-col items-center justify-center gap-1">
                                                        <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                        <span className="text-[10px] text-gray-400 px-1 truncate w-full text-center">{item.file.name}</span>
                                                    </div>
                                                )}

                                                {/* 상태 오버레이 */}
                                                {item.status === 'uploading' && (
                                                    <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                                                        <svg className="w-6 h-6 text-sky-500 animate-spin" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                                        </svg>
                                                    </div>
                                                )}
                                                {item.status === 'done' && (
                                                    <div className="absolute top-1.5 left-1.5 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                )}
                                                {item.status === 'error' && (
                                                    <div className="absolute inset-0 bg-red-50/80 flex items-center justify-center">
                                                        <span className="text-[10px] text-red-400 font-bold">업로드 실패</span>
                                                    </div>
                                                )}

                                                {/* 삭제 버튼 */}
                                                {item.status !== 'uploading' && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeImage(idx)}
                                                        className="absolute top-1 right-1 w-5 h-5 bg-gray-800/60 hover:bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                                                    >
                                                        ✕
                                                    </button>
                                                )}
                                            </div>
                                        ))}

                                        {/* 추가 버튼 (파일 목록 옆) */}
                                        {imageItems.length < MAX_FILES && (
                                            <label
                                                htmlFor="image-upload-more"
                                                className="border-2 border-dashed border-gray-200 rounded-xl aspect-square flex flex-col items-center justify-center cursor-pointer hover:border-sky-300 hover:bg-sky-50 transition-all duration-200"
                                            >
                                                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                                <span className="text-[10px] text-gray-300 mt-1">{imageItems.length}/{MAX_FILES}</span>
                                                <input
                                                    id="image-upload-more"
                                                    type="file"
                                                    accept="image/*,.pdf"
                                                    multiple
                                                    className="hidden"
                                                    onChange={handleFileChange}
                                                />
                                            </label>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* 섹션 5: 기타 문의사항 */}
                            <div className="p-8 border-b border-gray-100">
                                <SectionHeader num="5" title="기타 문의사항" />
                                <div>
                                    <label htmlFor="description" className="block text-xs font-bold text-gray-600 mb-1.5">
                                        문의 내용 <span className="text-gray-400 font-medium">(선택)</span>
                                    </label>
                                    <textarea
                                        id="description" rows="4"
                                        maxLength="300"
                                        placeholder="사이즈, 소재, 인쇄 방식, 후가공 등 원하시는 사항을 자유롭게 적어주세요."
                                        {...register("description", {
                                            maxLength: { value: 300, message: '300자 이내로 입력해주세요' },
                                        })}
                                        className={`${inputClass(errors.description)} resize-none`}
                                        autoComplete="off"
                                    />
                                    <FieldError error={errors.description} />
                                </div>
                            </div>

                            {/* 섹션 6: 개인정보 동의 */}
                            <div className="p-8">
                                <SectionHeader num="6" title="개인정보 수집 및 이용 동의" />
                                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 h-32 overflow-y-auto text-xs text-gray-500 leading-relaxed mb-4">
                                    한양인팩은 개인정보 보호법 등 관련 법령상의 규정을 준수하며 귀하의 개인정보 보호에 최선을 다하고 있습니다.<br />
                                    개인정보 보호법 제 15조 및 같은 법 제 22조에 근거하여, 다음과 같이 견적문의 고객 확인을 위하여 개인정보를 수집, 이용하는데 동의를 받고자 합니다.<br /><br />
                                    <strong className="text-gray-700">1. 개인정보 수집 목적</strong><br />
                                    한양인팩은 견적문의 고객 확인을 위한 목적으로 귀하의 개인정보를 수집, 이용하고 있습니다.<br /><br />
                                    <strong className="text-gray-700">2. 수집하는 개인정보의 항목</strong><br />
                                    회사명, 담당자명, 연락처, 이메일, 납품 지역<br /><br />
                                    <strong className="text-gray-700">3. 개인정보 보유 및 이용 기간</strong><br />
                                    한양인팩은 의뢰자의 개인정보 삭제 요청이 아닌 경우 개인정보 보유 기간 10년 후 보유 정보를 파기합니다.
                                </div>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 accent-sky-500 cursor-pointer"
                                        {...register("privacy", {
                                            required: '개인정보 수집 및 이용에 동의해주세요',
                                        })}
                                    />
                                    <span className="text-sm font-bold text-gray-700">
                                        개인정보 수집 및 이용에 동의합니다 <span className="text-red-400">*</span>
                                    </span>
                                </label>
                                <FieldError error={errors.privacy} />
                            </div>
                        </div>

                        {/* 제출 버튼 */}
                        <button
                            type="submit"
                            disabled={disabled}
                            className="w-full mt-5 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 disabled:bg-sky-300 text-white font-black text-base px-5 py-4 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30"
                        >
                            {disabled ? (
                                <>
                                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                    </svg>
                                    잠시만 기다려주세요...
                                </>
                            ) : (
                                <>
                                    견적 문의 등록
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </>
                            )}
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-3">
                            접수 후 평일 기준 당일 내 담당자가 연락드립니다
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
}
