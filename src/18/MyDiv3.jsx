import TailButton from "../UI/TailButton";
import { useCnt } from "./useCnt"; // 자작 Hook 임포트

export default function MyDiv3() {
  const increase = useCnt((state) => state.increase);
  const decrease = useCnt((state) => state.decrease);
  const n1 = useCnt((state) => state.cnt);
  const handleSave = () => {
    localStorage.setItem("n1", n1);
  };
  return (
    <div className="w-8/10 h-8/10
                     bg-lime-500 text-white tex-2xl
                    p-10
                    flex flex-col
                    justify-start items-center">
      <div className="w-full h-full flex flex-row justify-center items-center text-left mb-10">
        <TailButton msg="증가"
                    cn="w-full h-10 m-3 rounded-lg bg-blue-400 hover:bg-blue-500"
                    action={ increase } />
        <TailButton msg="감소"
                    cn="w-full h-10 m-3 rounded-lg bg-blue-600 hover:bg-blue-700"
                    action={ decrease } />
        <TailButton msg="저장"
                    cn="w-full h-10 m-3 rounded-lg bg-orange-400 hover:bg-orange-600"
                    action={ handleSave } />
      </div>
    </div>
  )
}
