import { useParams } from "react-router-dom"

export default function RoutePage1() {
    const {item, color} = useParams();
    const things = useParams();
  return (
    <div className="text-center mt-10">
        { things.item == "menu"    ?   "page1 메뉴가 선택되었습니다."
                            :   `그냥받기: ${things.item}는 ${things.color}입니다.`
        }
        <br />
        { item == "menu"    ?   ""
                            :   `구조분해: ${item}는 ${color}입니다.`
        }
    </div>
  )
}
