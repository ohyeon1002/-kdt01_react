import TailButton from "../UI/TailButton";
import { useAtom } from "jotai";
import { cntAtom1 } from "../17/CountAtoms";

export default function MyDiv3() {
  const [n1, setN1] = useAtom(cntAtom1);
  return (
    <div className="w-8/10 h-8/10
                     bg-lime-500 text-white tex-2xl
                    p-10
                    flex flex-col
                    justify-start items-center">
      <div className="w-full h-full flex flex-row justify-center items-center text-left mb-10">
        <TailButton msg="증가"
                    cn="w-full h-10 m-3 rounded-lg bg-blue-400 hover:bg-blue-500"
                    action={() => setN1(n1+1)} />
        <TailButton msg="감소"
                    cn="w-full h-10 m-3 rounded-lg bg-blue-600 hover:bg-blue-700"
                    action={() => setN1(n1-1) } />
      </div>
    </div>
  )
}
