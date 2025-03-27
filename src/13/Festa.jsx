import React, { useEffect, useRef, useState } from 'react'
import SearchBox from '../UI/SearchBox';
import Selector from '../UI/Selector';
import TailCard from '../UI/TailCard';

export default function Festa() {

    const [origin,setOrigin] = useState([]);
    const [guGun, setGuGun] = useState([]);
    const selectkey = useRef('');
    const [toShow, setToShow] = useState([]);

    const getFetchData = async () => {
        const apiURL = import.meta.env.VITE_APP_OPENAPI_FESTIVAL;

        const resp = await fetch(apiURL);
        const data = await resp.json();

        setOrigin(data.getFestivalKr.item);
    };
    
    useEffect(() => {
        getFetchData(); //두번
    }, []);

    useEffect(()=>{
        if(!origin) return;
        setGuGun(Array.from(new Set(origin.map(item=>item.GUGUN_NM))).sort());
    },[origin]);

    const handleSelect = () => {
        const cards = origin.filter(item => item.GUGUN_NM == selectkey.current.value)
                            .map(item => <TailCard  key={item.UC_SEQ}
                                                    title={item.MAIN_TITLE.split("(",)[0]}
                                                    subtitle={item.TRFC_INFO}
                                                    imgurl={item.MAIN_IMG_NORMAL}
                                                    keyword={item.USAGE_DAY_WEEK_AND_TIME} />
                                );
        setToShow(cards);
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <span className='mt-5 text-3xl font-bold text-gray-700'>
                부산축제정보
            </span>
            <Selector ref={selectkey} data={guGun} selectFunc={handleSelect} />
            <div className="grid grid-cols-3">
                {toShow}
            </div>
        </div>
    )
}
