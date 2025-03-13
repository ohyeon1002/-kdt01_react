import { useState, useEffect } from "react";
import CategoryChecker from "./CategoryChecker";
import ShowResult from "./ShowResult";

export default function Traffic() {
    const [data, setData] = useState([]);
    const [major, setMajor] = useState('');
    const [type, setType] = useState('');

    const url = import.meta.env.VITE_APP_OPENAPI_ACCIDENT_URL;

    const getFetch = async () => {
        const resp = await fetch(url);
        const jdata = await resp.json();
        setData(jdata.data);
    };

    useEffect(() => {
        getFetch();
    }, []);

    const mjSet = new Set(data.map(item => item['사고유형대분류']));
    const majorChecker = Array.from(mjSet).map(item => <CategoryChecker key={item} msg={item} sel={major} select={setMajor} />);
    const tpSet = major == '' ? [] : data.filter(item => item['사고유형대분류'].includes(major));
    const typeChecker = tpSet == [] ? [] : tpSet.map(item => <CategoryChecker key={item['사고유형']} msg={item['사고유형']} sel={type} select={setType} />);
    const result = type == '' ? [] : tpSet.filter(item => item['사고유형']==type).map(item => <ShowResult key={item['사고유형']} data={item} />);
    console.log(tpSet);

    return (
        <div className="w-full flex flex-col">
            <div className="flex flex-row justify-between items-center px-10 py-5">
                <span className="text-3xl font-bold">교통사고 대분류</span>
                <div className="flex flex-row">
                    {majorChecker}
                </div>
            </div>
            <div className="flex flex-row justify-between items-center px-10 py-5">
                {major&&<span className="text-3xl font-bold">교통사고 유형</span>}
                <div className="flex flex-row">{typeChecker}</div>
            </div>
            {result}
        </div>
    )
}
