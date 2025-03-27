import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import opsData from "./getcode.json";
import Selector from "../UI/Selector";
import FCSTTable from "./FCSTTable";

export default function FCSTList() {
    
    const [sParams] = useSearchParams();
    const dt = sParams.get("dt"), loc = sParams.get("loc"), todo = sParams.get("todo"), x = sParams.get("x"), y = sParams.get("y");

    const ops = opsData.filter(item => item.예보구분 == todo).map(item => item.항목명).sort();
    const toShowRef = useRef();

    const [saved, setSaved] = useState();
    const [table, setTable] = useState();

    const getFetchData = async () => {
        const key = import.meta.env.VITE_APP_OPENAPI_WEATER_KEY;
        const toget = todo == "단기예보" ? "getVilageFcst" : "getUltraSrtFcst" ;
        
        let apiURL = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/"
        apiURL = `${apiURL}${toget}?serviceKey=${key}&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt.replaceAll("-","")}&base_time=0500&nx=${x}&ny=${y}`
        
        const resp = await fetch(apiURL);
        const data = await resp.json();
        
        setSaved(data.response.body.items.item);
    };

    useEffect(() => {
        getFetchData();
    }, []);

    // useEffect(() => {
    //     if(!saved) return;
    //     console.log(saved);
    // }, [saved]);

    const handleSelect = () => {
        const legends = opsData.filter(item => item.예보구분 == todo && item.항목명 == toShowRef.current.value)[0];
        const rel = saved.filter(item => item.category == legends.항목값);
        setTable(<FCSTTable th={["항목명", "예측일자", "예측시간", "예측값"]} cate={legends.항목명} unit={legends.단위} data={rel} />);
    };

  return (
    <>
        <div className="flex flex-row justify-around items-center">
            <h1 className="text-center text-3xl font-bold m-5">{loc} {todo} ({dt})</h1>
            <Selector   ref={toShowRef}
                        data={ops}
                        selectFunc={ handleSelect } />
        </div>
        {table}
    </>
  )
}
