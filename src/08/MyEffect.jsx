import { useEffect } from "react"
import { useState } from "react";
import TailButtonLine from "../07/TailButtonLine"

export default function MyEffect() {
    const [msg,setMsg] = useState('');
    const [color, setColor] = useState('blue');
    const handleClick = () => {
        if (msg == '') setMsg("useEffect 예제: state 변수 변경시");
        else setMsg('');

    };
    //useEffect 사용법
    //1. 컴포넌트 생성시 한번
    useEffect(() => {
        console.log("의존배열 []: 컴포넌트 생성시 한번 실행");
        console.log("msg = ", msg);
    }, []);

    //2.state 값이 변경될 때마다
    useEffect(() => {
        console.log("state 변수 useEffect msg = ", msg);
        setColor(color === "blue" ? "orange" : "blue");
    }, [msg]);

    //3.어떤 state값이든 변경될 때마다(화면 렌더링 될 때마다)
    useEffect(() => {
        console.log("rendered!");
    });
  return (
    <div className="w-full text-2xl font-bold
                    flex flex-col justify-center items-center">
        <div className="h-30 text-2xl font-bold m-2">{msg}</div>
        <button className={`bg-${color}-300 p-3 text-2xl`} onClick={handleClick} > 버튼! </button>
    </div>
  )
}
