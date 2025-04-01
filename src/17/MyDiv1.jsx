import { useAtom } from "jotai";
import { cntAtom1, cntAtom2 } from "../17/CountAtoms";
import MyDiv2 from "./MyDiv2"

export default function MyDiv1() {
   const [ n1 ] = useAtom(cntAtom1);
   const [ n2 ] = useAtom(cntAtom2)
   
  return (
    <div className="w-8/10 h-8/10
                    bg-lime-900 text-white tex-2xl
                    p-10
                    flex flex-col
                    justify-center items-center">
      <span> (jotai) n1 = {n1} , n2 = {n2} </span>
      <div className="w-full h-full flex justify-center items-center text-left mb-10">
        <MyDiv2 />
      </div>
    </div>
  )
}
