import { Link, useNavigate } from "react-router-dom";
import TailButton from "../UI/TailButton";

export default function RouteHome() {
    const navigate = useNavigate();
    const btns = [
                    {item:"사과🍎", color:"빨간색"},
                    {item:"바나나🍌", color:"노란색"},
                    {item:"포도🍇", color:"보라색"}
                ]
                .map(obj => <TailButton key={obj.item}
                                        msg={obj.item}
                                        cn="w-full rounded-lg
                                            border bg-blue-900 hover:bg-blue-700
                                            my-3 py-3 px-4
                                            text-white font-semibold"
                                        action={() => navigate(`/p2?item=${obj.item}&color=${obj.color}`)}/>
                    );
  return (
    <div className="flex flex-col justify-center items-center mt-10">
        <ul className="w-40 flex flex-col my-3">
            <Link to="/p1/🍎/빨간색" className="my-3">
                <li className="w-full rounded-lg
                                border border-amber-500 bg-amber-50 hover:bg-amber-100
                                py-3 px-4
                                text-center font-semibold">
                    사과🍎
                </li>
            </Link>
            <Link to="/p1/🍌/노란색" className="my-3">
                <li className="w-full rounded-lg
                                border border-amber-500 bg-amber-50 hover:bg-amber-100
                                py-3 px-4
                                text-center font-semibold">
                    바나나🍌
                </li>
            </Link>
            <Link to="/p1/🍇/보라색" className="my-3">
                <li className="w-full rounded-lg
                                border border-amber-500 bg-amber-50 hover:bg-amber-100
                                py-3 px-4
                                text-center font-semibold">
                    포도🍇
                </li>
            </Link>
        </ul>
        <div className="w-40 flex flex-col my-3">
            {btns}
        </div>
    </div>
  )
}
