import { useLocation, useSearchParams } from "react-router-dom"

export default function RoutePage2() {
    //useLocation Hook 사용
    const loc = useLocation();
    const re = new RegExp("\\S*=")
    const search = loc.search.split("&").flatMap(item => item.replace(re, ""));
    
    //useSearchParams Hook 사용
    const [sParams] = useSearchParams();
    const item = sParams.get("item");
    const color = sParams.get("color");

  return (
    <div className="text-center mt-10">
        { !search[0]    ?   "page2 메뉴가 선택되었습니다."
                        :   `useLocation: ${decodeURI(search[0])}는 ${decodeURI(search[1])}입니다.`
        }
        <br />
        { item && `useSearchParams: ${item}는 ${color}입니다.` }
    </div>
  )
}
