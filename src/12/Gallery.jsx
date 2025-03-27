import { useEffect, useRef, useState } from "react";
import TailCard from "../UI/TailCard";
import SearchBox from "../UI/SearchBox";

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

    const cards = things.map(item => <TailCard key={item.galContentId} title={item.galTitle.replace("http", "https")} subtitle={item.galPhotographyLocation} imgurl={item.galWebImageUrl} keyword={item.galSearchKeyword} />);

    return (
        <>
            <form className="m-3 h-10 flex flex-row justify-center">
                <SearchBox ref={searchkey} type="text" placeholder="검색어를 입력하세요"
                                        function={handleSearch}
                                        cn="border border-gray-400 focus:shadow-lg shadow-sm rounded-md mr-3 pl-2" />
            </form>
            <div className="grid grid-cols-3 justify-items-center">
                {cards}
            </div>
        </>
    )
}
