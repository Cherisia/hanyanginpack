'use client'

import Image from "next/image";
import Boxes from "@/components/utils/Boxes";
import { useForm } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";
import { BiCustomize } from "react-icons/bi";
import { useState, useRef, useCallback } from "react";
import { toast } from "sonner";

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

                            {/* 섹션 4: 기타 문의사항 */}
                            <div className="p-8 border-b border-gray-100">
                                <SectionHeader num="4" title="기타 문의사항" />
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

                            {/* 섹션 5: 개인정보 동의 */}
                            <div className="p-8">
                                <SectionHeader num="5" title="개인정보 수집 및 이용 동의" />
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
