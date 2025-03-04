import { useState } from "react"; //useState Hook imported

export default function MyListItem({ title, imgUrl, content}) {
    const [stCnt, setStCnt] = useState(0); //[변수명, 변수를 바꿀 함수명]
    const handleClick = (n) =>{
        setStCnt(stCnt + 1);
    };
    return (
        <div className="w-full h-full p-10">
            <div className="flex flex-row">
                <img src={imgUrl} className="size-[150px] flex items-start rounded-3xl mr-2" />
                <div className="flex flex-col ml-2 justify-evenly"><span className="text-center text-4xl font-bold text-gray-600">{title}</span><span>{content}</span></div>
            </div><div className="h-[24px] flex justify-end">
            <span onClick={()=>handleClick()} className="hover:cursor-pointer hover:font-semibold hover:text-lg selection:bg-transparent hover:animate-pulse active:animate-ping" >❤ 좋아요 {stCnt}</span></div>
        </div>
    )
}
