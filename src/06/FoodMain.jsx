import FoodCard from "./FoodCard"
import Fooddata from "./fooddata.json"
import TypeChecker from "./TypeChecker";
import { useState } from "react";

export default function FoodMain() {
    const [show, setShow] = useState("All");
    const re = new RegExp("\\d{1}\\.\\s*");
    const a = new Set(["All", ... Fooddata.flatMap(item => item['운영주체 분류'].replace(re, ""))]); console.log(a);

    const tags = (show == "All")
    ? Fooddata.map(item => <FoodCard key={item['사업장명']} obj={item} />)
    : Fooddata.filter(item => item['운영주체 분류'].endsWith(show)).map(item => <FoodCard key={item['사업장명']} obj={item} />);
    
    const ck = Array.from(a).map(item => <TypeChecker key={item} value={item} chk={(c) => setShow(c)} />)
  return (
    <>
    <div className="inline-flex border-1 border-dashed m-3 justify-self-start">
        {ck}
    </div>
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tags}
    </div>
    </>

  )
}
