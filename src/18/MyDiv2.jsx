import MyDiv3 from "./MyDiv3"

export default function MyDiv2() {
  return (
    <div className="w-8/10 h-8/10
                     bg-lime-700 text-white tex-2xl
                    p-10
                    flex flex-col
                    justify-start items-center">
        <span>MyDiv2</span>
      <div className="w-full h-full flex justify-center items-center text-left mb-10">
        <MyDiv3 />
      </div>
    </div>
  )
}
