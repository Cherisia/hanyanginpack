'use client'

import Image from "next/image";
import Boxes from "@/components/utils/Boxes";
import {useForm} from "react-hook-form";
import {RiErrorWarningFill} from "react-icons/ri";
import {BiCustomize} from "react-icons/bi";
import {useState} from "react";
import Sweetalert2 from "sweetalert2";
import {useRouter} from "next/navigation";

export default function Form() {
    const router = useRouter();
    const [disabled, setDisabled] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        setDisabled(true);
        Sweetalert2.fire({
            text: "문의내용을 등록하시겠어요?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "rgb(129 140 248)",
            cancelButtonColor: "rgb(251 113 133)",
            confirmButtonText: "등록",
            cancelButtonText: "닫기"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('/api/inquiry', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then(r => {
                    return r.json();
                }).then(data => {
                    if (data === "OK") {
                        // success
                        Sweetalert2.fire({
                            html: `<div>등록이 완료되었습니다.</div><div>최대한 빠르게 연락드리겠습니다! 😊😊</div>`,
                            icon: "success",
                            confirmButtonColor: "rgb(251 113 133)",
                            confirmButtonText: "닫기",
                        }).then(() => {
                            setDisabled(false);
                            router.refresh();
                        });
                    } else {
                        // fail
                        let text;
                        if (data.indexOf("is null") > -1) {
                            text = `<div>입력하지 않은 내용이 있습니다.</div><div>다시 입력해주세요.</div>`
                        } else if (data.indexOf("is too long") > -1) {
                            text = `<div>입력하신 내용이 너무 깁니다.</div><div>다시 입력해주세요.</div>`
                        } else if (data.indexOf("is invalid") > -1) {
                            text = `<div>유효하지않은 ${data.substring(0, data.indexOf("is invalid"))} 형식입니다.</div><div>다시 입력해주세요.</div>`
                        } else {
                            text = `<div>죄송합니다.</div><div>서버 이슈로 등록에 실패했습니다.</div><div>고객센터로 전화 혹은 메일 부탁드립니다.</div>`
                        }
                        Sweetalert2.fire({
                            html: `${text}`,
                            icon: "error",
                            confirmButtonColor: "rgb(251 113 133)",
                            confirmButtonText: "닫기",
                        }).then(() => {
                            setDisabled(false);
                        });
                    }
                }).catch(e => {
                    // fetch error
                    Sweetalert2.fire({
                        html: `<div>죄송합니다.</div><div>서버 이슈로 등록에 실패했습니다.</div><div>고객센터로 전화 혹은 메일 부탁드립니다.</div>`,
                        icon: "error",
                        confirmButtonColor: "rgb(251 113 133)",
                        confirmButtonText: "닫기",
                    }).then(() => {
                        setDisabled(false);
                    });
                });
            } else {
                setDisabled(false);
            }
        });
    }
    const onError = error => console.log('error : ' + error);

    return (
        <div className="container xl:w-7/12 md:w-8/12 max-md:w-11/12 mx-auto">
            <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-2">
                <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">
                        회사명 <span className="text-red-700">*</span></label>
                    <input type="text" id="company"
                           {...register("company", {
                               required: '회사명은 필수 입력 항목입니다!',
                               maxLength: {value: 30, message: '회사명을 30자 이내로 간략하게 적어주세요!'},
                               validate: value => {
                                   return value.trim().length === 0 ? '공백이에요!' : null;
                               }
                           })}
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                           placeholder="회사명" autoComplete="organization"/>
                    <div className="flex items-center mt-1 h-6 w-full text-red-600 text-xs">
                        {errors.company && <><RiErrorWarningFill style={{
                            display: 'inline',
                            marginRight: '0.15rem'
                        }}/><span>{errors.company.message}</span></>}
                    </div>
                </div>
                <div>
                    <label htmlFor="name"
                           className="block mb-2 text-sm font-medium text-gray-900">담당자명 <span
                        className="text-red-700">*</span></label>
                    <input type="text" id="name"
                           {...register("name", {
                               required: '담당자명은 필수 입력 항목입니다!',
                               maxLength: {value: 30, message: '담당자명을 30자 이내로 간략하게 적어주세요!'},
                               validate: value => {
                                   return value.trim().length === 0 ? '공백이에요!' : null;
                               }
                           })}
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                           placeholder="담당자명" autoComplete="name"/>
                    <div className="flex items-center mt-1 h-6 w-full text-red-600 text-xs">
                        {errors.name && <><RiErrorWarningFill
                            style={{display: 'inline', marginRight: '0.15rem'}}/><span>{errors.name.message}</span></>}
                    </div>
                </div>
                <div>
                    <label htmlFor="contact"
                           className="block mb-2 text-sm font-medium text-gray-900">연락처 <span
                        className="text-red-700">*</span></label>
                    <input type="text" id="contact"
                           {...register("contact", {
                               required: '연락처는 필수 입력 항목입니다!',
                               pattern: {
                                   value: /^([0-9]{3,4})-?([0-9]{3,4})-?([0-9]{3,4})$/,
                                   message: '연락처 형식이 유효하지 않아요!'
                               },
                           })}
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                           placeholder="ex) 010-0000-0000" autoComplete="tel-national"/>
                    <div className="flex items-center mt-1 h-6 w-full text-red-600 text-xs">
                        {errors.contact && <><RiErrorWarningFill style={{
                            display: 'inline',
                            marginRight: '0.15rem'
                        }}/><span>{errors.contact.message}</span></>}
                    </div>
                </div>
                <div>
                    <label htmlFor="email"
                           className="block mb-2 text-sm font-medium text-gray-900">이메일 <span
                        className="text-red-700">*</span></label>
                    <input type="text" id="email"
                           {...register("email", {
                               required: '이메일은 필수 입력 항목입니다!',
                               pattern: {
                                   value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                                   message: '이메일 형식이 유효하지 않아요!'
                               },
                           })}
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                           placeholder="ex) abc@naver.com" autoComplete="email"/>
                    <div className="flex items-center mt-1 h-6 w-full text-red-600 text-xs">
                        {errors.email && <><RiErrorWarningFill
                            style={{display: 'inline', marginRight: '0.15rem'}}/><span>{errors.email.message}</span></>}
                    </div>
                </div>
                <div>
                    <div className="block mb-2 text-sm font-medium text-gray-900">박스형태</div>
                    <div className="flex flex-wrap">
                        {
                            Boxes.map((box, index) => {
                                return (
                                    <div className="tooltip relative box-border w-28 h-28 m-0.5" key={index}>
                                        <input type="radio" id={box.number} className="hidden peer"
                                               {...register("box")} value={box.name}
                                        />
                                        <label htmlFor={box.number} className="relative w-28 h-28 select-none cursor-pointer flex items-center justify-center border-2 border-gray-100
            transition-colors duration-200 peer-checked:border-cyan-600">
                                            <Image className="p-2" src={box.image} placeholder="blur" alt={box.name} sizes={100}
                                                   fill/>
                                            <span className="tooltip-text text-[0.6rem]">{box.name}</span>
                                        </label>
                                    </div>
                                )
                            })
                        }
                        <div className="tooltip relative box-border w-28 h-28 m-0.5">
                            <input type="radio" id="custom" className="hidden peer"
                                   {...register("box")} value="커스텀 박스"
                            />
                            <label htmlFor="custom" className="relative w-28 h-28 select-none cursor-pointer flex flex-col items-center justify-center border-2 border-gray-100
            transition-colors duration-200 peer-checked:border-cyan-600">
                                <BiCustomize style={{fontSize: '3rem', color: 'gray'}}/>
                                <span className="text-gray-500 text-sm mt-2">커스텀 박스</span>
                                <span className="tooltip-text text-[0.6rem]">커스텀 박스</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex items-center mt-1 h-6 w-full text-red-600 text-xs">
                        {errors.box && <><RiErrorWarningFill
                            style={{display: 'inline', marginRight: '0.15rem'}}/><span>{errors.box.message}</span></>}
                    </div>
                </div>
                <div>
                    <label htmlFor="quantity"
                           className="block mb-2 text-sm font-medium text-gray-900">수량 <span
                        className="text-red-700">*</span></label>
                    <input type="text" id="quantity"
                           {...register("quantity", {
                               required: '수량은 필수 입력 항목입니다!',
                               maxLength: {value: 30, message: '수량을 30자 이내로 간략하게 적어주세요!'},
                               validate: value => {
                                   return value.trim().length === 0 ? '공백이에요!' : null;
                               }
                           })}
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                           placeholder="ex) 1000개 이상" autoComplete="off"/>
                    <div className="flex items-center mt-1 h-6 w-full text-red-600 text-xs">
                        {errors.quantity && <><RiErrorWarningFill style={{
                            display: 'inline',
                            marginRight: '0.15rem'
                        }}/><span>{errors.quantity.message}</span></>}
                    </div>
                </div>
                <div>
                    <label htmlFor="region"
                           className="block mb-2 text-sm font-medium text-gray-900">주문지역 <span
                        className="text-red-700">*</span></label>
                    <input type="text" id="region"
                           {...register("region", {
                               required: '주문지역은 필수 입력 항목입니다!',
                               maxLength: {value: 30, message: '주문지역을 30자 이내로 간략하게 적어주세요!'},
                               validate: value => {
                                   return value.trim().length === 0 ? '공백이에요!' : null;
                               }
                           })}
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                           placeholder="ex) 서울시 강남구 역삼동" autoComplete="address"/>
                    <div className="flex items-center mt-1 h-6 w-full text-red-600 text-xs">
                        {errors.region && <><RiErrorWarningFill style={{
                            display: 'inline',
                            marginRight: '0.15rem'
                        }}/><span>{errors.region.message}</span></>}
                    </div>
                </div>
                <div>
                    <label htmlFor="description"
                           className="block mb-2 text-sm font-medium text-gray-900">기타 문의사항</label>
                    <textarea id="description" rows="3"
                              {...register("description", {
                                  maxLength: {value: 300, message: '기타 문의사항은 300자 이내로 적어주세요!'},
                              })}
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                              maxLength="200" placeholder="기타 문의사항이 있으시면 작성해주세요." autoComplete="off"/>
                    <div className="flex items-center mt-1 h-6 w-full text-red-600 text-xs">
                        {errors.description && <><RiErrorWarningFill style={{
                            display: 'inline',
                            marginRight: '0.15rem'
                        }}/><span>{errors.description.message}</span></>}
                    </div>
                </div>
                <div>
                    <span className="mb-2 text-sm font-medium text-gray-900">개인정보 수집 및 이용 동의<span
                        className="text-red-700 ml-1">*</span></span>
                    <div className="scrollbar mt-1 h-28 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5 overflow-auto">
                        한양인팩은 개인정보 보호법 등 관련 법령상의 규정을 준수하며 귀하의 개인정보 보호에 최선을 다하고 있습니다.<br/>
                        개인정보 보호법 제 15조 및 같은 법 제 22조에 근거하여, 다음과 같이 견적문의 고객 확인을 위하여 개인정보를 수집, 이용하는데 동의를 받고자 합니다.<br/>
                        <br/>
                        <strong>1. 개인정보 수집 목적</strong><br/>
                        한양인팩은 견적문의 고객 확인을 위한 목적으로 귀하의 개인정보를 수집, 이용하고 있습니다.<br/>
                        <br/>
                        <strong>2. 수집하는 개인정보의 항목</strong><br/>
                        한양인팩 견적문의 서비스 제공을 위하여 필요한 최소한의 범위 내에서 아래와 같은 개인정보를 수집하고 있습니다.<br/>
                        - 회사명, 담당자명, 연락처, 이메일, 주문지역<br/>
                        <br/>
                        <strong>3. 개인정보 보유 및 이용 기간</strong><br/>
                        한양인팩은 의뢰자의 개인정보 삭제 요청이 아닌 경우 개인정보 보유 기간 10년 후 보유 정보를 파기합니다.<br/>
                    </div>
                    <div className="mt-3">
                        <label className="inline-flex items-center text-base font-medium text-gray-900 cursor-pointer">
                            <input className="mr-2 w-4 h-4 accent-blue-500" type="checkbox"
                                {...register("privacy", {
                                    required: '개인정보 수집 및 이용에 동의해주세요!'
                                })}/> 개인정보 수집 및 이용에 동의합니다.
                        </label>
                    </div>
                    <div className="flex items-center mt-1 mb-4 h-6 w-full text-red-600 text-xs">
                        {errors.privacy && <><RiErrorWarningFill style={{
                            display: 'inline',
                            marginRight: '0.15rem'
                        }}/><span>{errors.privacy.message}</span></>}
                    </div>
                </div>
                <button type="submit"
                        className="w-full text-white bg-sky-400 hover:bg-sky-500 disabled:bg-sky-700 font-medium rounded-lg text-base px-5 py-3.5 text-center" disabled={disabled}>
                    <svg width="20" height="20" fill="currentColor" className={"mr-4 animate-spin " + ( disabled ? "inline" : "hidden" )}
                         viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                        </path>
                    </svg>
                    {disabled ? '잠시만 기다려주세요...' : '문의 등록'}
                </button>
            </form>
        </div>
    )
}