import Image from "next/image";
import BoxType1 from "/public/img/inquiry/box/1.png"
import BoxType2 from "/public/img/inquiry/box/2.png"
import BoxType3 from "/public/img/inquiry/box/3.png"
import BoxType4 from "/public/img/inquiry/box/4.png"
import BoxType5 from "/public/img/inquiry/box/5.png"
import BoxType6 from "/public/img/inquiry/box/6.png"
import BoxType7 from "/public/img/inquiry/box/7.png"
import BoxType8 from "/public/img/inquiry/box/8.png"
import BoxType9 from "/public/img/inquiry/box/9.png"
import BoxType10 from "/public/img/inquiry/box/10.png"
import BoxType11 from "/public/img/inquiry/box/11.png"
import BoxType12 from "/public/img/inquiry/box/12.png"
import BoxType13 from "/public/img/inquiry/box/13.png"
import BoxType14 from "/public/img/inquiry/box/14.png"
import BoxType15 from "/public/img/inquiry/box/15.png"
import BoxType16 from "/public/img/inquiry/box/16.png"
import BoxType17 from "/public/img/inquiry/box/17.png"
import BoxType18 from "/public/img/inquiry/box/18.png"

export default function BoxTypes() {
    let boxes = [
        {number: 1, name: 'A형', image: BoxType1, detail: ''},
        {number: 2, name: 'B형', image: BoxType2, detail: ''},
        {number: 3, name: 'B형(창문형)', image: BoxType3, detail: ''},
        {number: 4, name: '완전조립형', image: BoxType4, detail: ''},
        {number: 5, name: '끈손잡이 조립형', image: BoxType5, detail: ''},
        {number: 6, name: '끈손잡이 지붕형', image: BoxType6, detail: ''},
        {number: 7, name: '손잡이형', image: BoxType7, detail: ''},
        {number: 8, name: '싸바리형(완성형)', image: BoxType8, detail: ''},
        {number: 9, name: '상하분리형(조립식)', image: BoxType9, detail: ''},
        {number: 10, name: '상하분리형(조립식_창문형)', image: BoxType10, detail: ''},
        {number: 11, name: '맞뚜껑형', image: BoxType11, detail: ''},
        {number: 12, name: '책싸개형', image: BoxType12, detail: ''},
        {number: 13, name: '슬리브형A', image: BoxType13, detail: ''},
        {number: 14, name: '슬리브형B', image: BoxType14, detail: ''},
        {number: 15, name: '케잌상자', image: BoxType15, detail: ''},
        {number: 16, name: '손잡이 레이스형', image: BoxType16, detail: ''},
        {number: 17, name: '레이스형', image: BoxType17, detail: ''},
        {number: 18, name: '오목형', image: BoxType18, detail: ''},
    ];
    return (
        <div className="flex flex-wrap">
            {
                boxes.map((box, index) => {
                    return (
                        <div className="tooltip relative box-border w-20 h-20 m-0.5" key={index}>
                            <input type="checkbox" id={box.number} className="hidden peer"/>
                            <label htmlFor={box.number} className="relative w-20 h-20 select-none cursor-pointer flex items-center justify-center border-2 border-gray-100
            transition-colors duration-200 peer-checked:border-cyan-600">
                                <Image className="p-2" src={box.image} placeholder="blur" alt={box.name} fill/>
                                <span className="tooltip-text text-[0.6rem]">{box.name}</span>
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}