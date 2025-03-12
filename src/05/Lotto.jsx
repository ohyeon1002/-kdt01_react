import TailBall from "../UI/TailBall"
import TailButton from "../UI/TailButton"
import { useState } from "react";

export default function Lotto() {
    let set = new Set();
    const [ifShow, setIfShow] = useState(false);

    while (set.size < 7) {
        set.add(Math.floor(Math.random()*45+1));
    }
    let tags = ifShow==true?Array.from(set).sort((a,b) => a-b).map(num => <TailBall key={num} value={num} colorTag={Math.floor(num/10)} />):[""];
    let bonus = tags.splice(Math.floor(Math.random()*6), 1);
    
  return (
    <>
        <div className="flex text-4xl font-bold place-items-center text-gray-600">
            {tags}+{bonus}
        </div>
        <div className="flex justify-center">
            <TailButton msg="로또 번호 생성" cn="bg-blue-600 border-none rounded-lg p-3 text-white hover:bg-blue-500" action = {() => setIfShow(!ifShow)}/>
        </div>
    </>
  )
}
