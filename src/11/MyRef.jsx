import { useState, useEffect, useRef } from "react";
import TailButton from "../UI/TailButton"

export default function MyRef() {
    const refFirst = useRef();
    const refSecond = useRef();
    const [result, setResult] = useState();
    const refOp = useRef();

    const handleInit = () => {
        refFirst.current.value = '';
        refSecond.current.value = '';
        refOp.current.value = "+";
        setResult('');
    };

    const calcResult = (e) =>{
        e.preventDefault();

        //입력 공백 체크
        if(refFirst.current.value == ''){
            alert("첫번째 값을 입력하세요");
            refFirst.current.focus();
            return;
        }

        if(refSecond.current.value == ''){
            alert("두번째 값을 입력하세요")
            refSecond.current.focus();
            return;
        }

        let first = parseInt(refFirst.current.value);
        let second = parseInt(refSecond.current.value);
        switch(refOp.current.value){
            case "+": setResult(first + second); break;
            case "-": setResult(first - second); break;
            case "*": setResult(first * second); break;
            case "/": setResult(first / second); break;
          }
    };

    useEffect(()=>{
        refFirst.current.focus();
    },[]);

  return (
    <div className="w-full flex justify-center items-start mt-10">
      <form className="w-10/12 grid grid-cols-5 gap-4 gap-x-8 p-10 bg-gray-200">
            <input type="number" name="first"
                                className="border rounded-lg p-1 bg-white
                                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                ref={refFirst} onFocus={handleInit}                        />
            <select className="border rounded-lg p-1 text-center text-xl bg-white"
                                ref={refOp} >
                <option value="+" defaultValue className="text-center text-xl">+</option>
                <option value="-" className="text-center text-xl">-</option>
                <option value="*" className="text-center text-xl">*</option>
                <option value="/" className="text-center text-xl">/</option>
            </select>
            <input type="number" name="second"
                                className="border rounded-lg p-1 bg-white
                                    [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                ref={refSecond} />
            <button className="w-[60%] justify-self-center bg-blue-500 rounded-lg text-center font-bold text-2xl p-1" onClick={calcResult}>=</button>
            <div className=" bg-white text-center font-bold text-2xl p-1"
                             >{result}</div>
      </form>
    </div>
  )
}
