import TailBall from "../UI/TailBall"
import TailButton from "../UI/TailButton"
import { useState } from "react";

export default function Lotto() {
    let set = new Set();
    const [ifShow, setIfShow] = useState(false);
    console.log(ifShow);

    while (set.size < 7) {
        set.add(Math.floor(Math.random()*45+1));
    }
    let tags = Array.from(set).sort((a,b) => a-b).map(num => <TailBall key={num} value={num} colorTag={Math.floor(num/10)} />);
    let bonus = tags.splice(Math.floor(Math.random()*6), 1);
  return (
    <div className="h-100 flex flex-col justify-evenly">
        <div className="flex">
            {tags}<span className="flex items-center text-5xl font-bold">+</span>{bonus}
        </div>
        <div className="flex justify-center">
            <TailButton msg="로또 번호 생성" cn="bg-blue-500" action = {() => setIfShow(!ifShow)}/>
        </div>
    </div>
  )
}
