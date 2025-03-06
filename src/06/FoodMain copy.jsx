import FoodCard from "./FoodCard"
import Fooddata from "./fooddata.json"
import TypeChecker from "./TypeChecker";
import { useState } from "react";

export default function FoodMain() {
    const [show, setShow] = useState();
    // const tags = Fooddata.map(item => <FoodCard key={item['사업장명']} obj={item} />); //초기버전
    const tags = show == 0
    ? Fooddata.map(item => <FoodCard key={item['사업장명']} obj={item} />)
    : Fooddata.filter(item => item['운영주체 분류'].startsWith(show)).map(item => <FoodCard key={item['사업장명']} obj={item} />);
    
    //해야 할 것 : ok useState훅 설정하기, ok 체커 컴포넌트로 state 변경하기, ok state에 따라 tags값 변경하기, 전체보기 옵션

    
    const a = new Set([0, ... Fooddata.flatMap(item => item['운영주체 분류'].split('.',1))])
    // console.log(a);
    // console.log(Fooddata.find('운영주체 분류', "1. 사회복지법인"));
    const ck = Array.from(a).map(item => <TypeChecker key={item} value={item} chk={(c) => setShow(c)} />)
    console.log(show);
  return (
    <>
    <div className="inline-flex">{ck}</div>
    
    {/* <TypeChecker /> */}
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tags}
    </div>
    </>

  )
}
