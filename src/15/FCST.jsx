import { useNavigate } from "react-router-dom";
import TailButton from "../UI/TailButton";
import Selector from "../UI/Selector";
import { useEffect, useRef } from "react";
import opsData from "./getxy.json";

export default function FCST() {
    const navigate = useNavigate();
    const dateRef = useRef();
    const locRef = useRef();
    const ops = ["===지역 선택===", ...opsData.map(item => item["1단계"])];

    const handleSelect = () => {
        
    };
    
    const handleClick = (todo) => {
        if(locRef.current.value=="===지역 선택==="){
            alert("지역 선택하세요");
            locRef.current.focus();
            return;
        }
        const datum = opsData.filter(item => item["1단계"] == locRef.current.value)[0];
        console.log(datum)
        const x=datum["격자 X"], y=datum["격자 Y"];
        navigate(`/FCSTList?dt=${dateRef.current.value}&loc=${locRef.current.value}&todo=${todo}&x=${x}&y=${y}`);
    };

    useEffect(() => {
        const yesterday = new Date().toISOString().split("T", 1);
        dateRef.current.value = yesterday;
        locRef.current.value = "===지역 선택===";
      }, []);

  return (
    <>
        <h1 className="text-center text-3xl font-bold m-5">일기예보 선택</h1>
        <div className="flex flex-row justify-around m-3">
            <input  type="date"
                    ref={dateRef}
                    onChange={ e => e.preventDefault() }
                    className="w-70 border p-1 rounded-sm border-gray-700 "/>
            <Selector   ref={locRef}
                        data={ops}
                        selectFunc={handleSelect} />
        </div>
        <div className="flex flex-row">
            <TailButton msg = "초단기예보"
                        cn = "w-full rounded-lg border bg-blue-900 hover:bg-blue-700 m-3 py-3 px-4 text-white font-semibold"
                        action = {() => handleClick("초단기예보")} />
            <TailButton msg = "단기예보"
                        cn = "w-full rounded-lg border bg-blue-900 hover:bg-blue-700 m-3 py-3 px-4 text-white font-semibold"
                        action = {() => handleClick("단기예보")} />
        </div>
    </>
  )
}
