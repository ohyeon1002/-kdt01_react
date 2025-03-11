import TailButtonLine from "./TailButtonLine";
import { useState } from "react";

export default function MyToggleBox({boxColor}) {
    const [num, setNum] = useState(0); //useState 설정
    const swch = () => { //호출할 때마다 state 변경을 반복
        if (num == 0) boxColor == "blue"? setNum(1): setNum(2); //부모 컴포넌트에서 받아온 박스 색에 따라 블루 = 1, 오렌지 = 2로 스테이트 설정
        else if (num == 1 || num == 2) setNum(0); //0으로 설정
    };
    console.log(num);
    const bgcl = ["bg-none", "bg-blue-300", "bg-orange-300" ]; //tailwindcss가 백틱이 잘 안먹음 - 색깔 정보 따로 저장
    const names = {"blue":["blue", "blueToggle"], "orange":["orange", "orangeToggle"]}; //버튼 이름 각각 저장 - 키값을 부모한테 받아온 박스색으로 설정
    const tags = names[boxColor].map(something => <TailButtonLine key={something} msg={something} change={swch} box={boxColor} />) //박스색별로 버튼 두개씩 뿌리기 - 총 네개 버튼 생성
  return (
    <div className={`h-100 w-100 flex flex-col items-center justify-evenly ${bgcl[num]}`}>
      {tags}
    </div>
  )
}
