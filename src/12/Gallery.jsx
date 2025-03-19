import { useEffect, useRef, useState } from "react";
import TailCard from "../UI/TailCard";

export default function Gallery() {
    const [things, setThings] = useState([]);
    const searchkey = useRef();

    const handleSearch = () => {
        getFetchData();
    };

    const getFetchData = async () => {
        const apiURL = import.meta.env.VITE_APP_OPENAPI_TOURIST_URL;
        let url = `${apiURL}&keyword=${encodeURI(searchkey.current.value)}`;

        console.log(url);

        const resp = await fetch(url);
        const data = await resp.json();

        let thingsList = await data.response.body.items == "" ? [] : data.response.body.items.item;
        setThings(thingsList);
    };

    useEffect(() => {
        searchkey.current.focus();
    }, []);

    const cards = things.map(item => <TailCard key={item.galContentId} title={item.galTitle} subtitle={item.galPhotographyLocation} imgurl={item.galWebImageUrl} keyword={item.galSearchKeyword} />);

    return (
        <>
            <form className="m-3 h-10 flex flex-row justify-center">
                <input type="text" ref={searchkey} onFocus={()=>{searchkey.current.value = '';}} placeholder="검색어를 입력하세요" className="border border-gray-400 focus:shadow-lg shadow-sm rounded-md mr-3 pl-2" />
                <button type="button" onClick={handleSearch} className="border rounded-lg p-2 text-center bg-blue-600 hover:bg-blue-700 text-white" >
                    검색
                </button>
            </form>
            <div className="grid grid-cols-3">
                {cards}
            </div>
        </>
    )
}
