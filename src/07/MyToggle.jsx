import MyToggleBox from "./MyToggleBox";

export default function MyToggle() {
    const colors = ["blue", "orange"]; //색 두개 지정
    const boxes = colors.map(item => <MyToggleBox key={item} boxColor={item} />) //색깔로 매핑하여 박스 하나씩 뿌림
  return (
    <div className="flex flex-row items-center justify-between">
      {boxes}
    </div>
  )
}
