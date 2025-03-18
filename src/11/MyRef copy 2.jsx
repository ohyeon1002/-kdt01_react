import { useState, useEffect, useRef } from "react";
import TailButton from "../UI/TailButton"

export default function MyRef() {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [result, setResult] = useState(0);
    const op = useRef(0);
    const handleOp = (c) => {
      op.current = c;
    };
    
    useEffect(()=>{
      switch(op){
        case "+": setResult(first+second);
        case "-": setResult(first-second);
        case "*": setResult(first*second);
        case "/": setResult(first/second);
      }
    }, [first, second, op]);


  return (
    <div className="w-full flex justify-center items-start mt-10">
      <div className="w-10/12 grid grid-cols-5 gap-4 gap-x-8 p-10 bg-gray-200">
            <input type="number" name="first"
                                className="border rounded-lg p-1
                                        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                onChange={e => setFirst(e.target.value)}                         />
            <select className="border rounded-lg p-1 text-center text-xl" ref={op} defaultValue="+" >
                <option value="+" className="text-center text-xl">+</option>
                <option value="-" className="text-center text-xl">-</option>
                <option value="*" className="text-center text-xl">*</option>
                <option value="/" className="text-center text-xl">/</option>
            </select>
            <input type="number" name="second"
                                className="border rounded-lg p-1
                                        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                onChange={e => setSecond(e.target.value)}        />
            <span className="justify-self-center text-center font-bold text-2xl p-1">=</span>
            <div className="text-center font-bold text-2xl p-1">{result}</div>
      </div>
    </div>
  )
}
