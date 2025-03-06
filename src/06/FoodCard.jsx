import busan from "../assets/busan.png";
import bank from "../assets/bank.png"
import market from "../assets/market.png";
import { useState } from "react";

export default function FoodCard({obj}) {
    const [isShow, setIsShow] = useState(false);
    const imgGubun = {
        "광역지원센터" : busan,
        "기초푸드뱅크" : bank,
        "기초푸드마켓" : market
    }
    const handleShow = () => {
        setIsShow(!isShow);
    };
  return (
    <div className="flex flex-row w-9/10 h-full justify-evenly border-1 border-dotted p-4 justify-self-center">
        <img src={imgGubun[obj['구분']]} alt="image" className="w-1/4"/>
        <div className="w-3/4 h-full flex flex-col pl-4">
            <h1 className="h-1/5 text-2xl font-bold text-justify">{obj['사업장명']}</h1>
            <h2 className="h-1/5 text-xl font-semibold">{obj['운영주체명']}</h2>
            <p className="h-2/5">{obj['사업장 소재지']}</p>
            <p className="h-1/5 bg-gray-300 text-gray-800 text-base cursor-pointer selection:bg-transparent text-center" onClick={handleShow}>{isShow && `${obj['연락처(대표번호)']}, ${obj['팩스번호']}`}</p>
        </div>
    </div>
  )
}
