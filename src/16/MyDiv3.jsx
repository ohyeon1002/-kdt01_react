import TailButton from "../UI/TailButton";

export default function MyDiv3(props) {
  return (
    <div className="w-8/10 h-8/10
                     bg-lime-500 text-white tex-2xl
                    p-10
                    flex flex-col
                    justify-start items-center">
      <div className="w-full h-full flex flex-row justify-center items-center text-left mb-10">
        <TailButton msg="증가"
                    cn="w-full h-10 m-3 rounded-lg bg-blue-400 hover:bg-blue-500"
                    action={(e) => {props.setter([props.state[0]+1,props.state[1]])}} />
        <TailButton msg="감소"
                    cn="w-full h-10 m-3 rounded-lg bg-blue-600 hover:bg-blue-700"
                    action={(e) => {props.setter([props.state[0]-1,props.state[1]])}} />
      </div>
    </div>
  )
}
