'use client'

import Image from "next/image";
import boxes from "@/components/utils/boxes";
import {useForm} from "react-hook-form";
import {RiErrorWarningFill} from "react-icons/ri";
import {BiCustomize} from "react-icons/bi";

export default function Form() {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('/api/inquiry', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).then();
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
                            boxes.map((box, index) => {
                                return (
                                    <div className="tooltip relative box-border w-28 h-28 m-0.5" key={index}>
                                        <input type="radio" id={box.number} className="hidden peer"
                                               {...register("box")} value={box.name}
                                        />
                                        <label htmlFor={box.number} className="relative w-28 h-28 select-none cursor-pointer flex items-center justify-center border-2 border-gray-100
            transition-colors duration-200 peer-checked:border-cyan-600">
                                            <Image className="p-2" src={box.image} placeholder="blur" alt={box.name}
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
                <button type="submit"
                        className="w-full text-white bg-sky-400 hover:bg-sky-500 focus:ring-2 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    문의 등록
                </button>
            </form>
        </div>
    )
}