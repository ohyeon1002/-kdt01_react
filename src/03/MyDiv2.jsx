import MyDiv3 from "./MyDiv3"

export default function MyDiv2({md1, md2, md3}) {
  return (
    <div className="w-8/10 h-8/10
                     bg-lime-700 text-white tex-2xl
                    p-10
                    flex flex-col
                    justify-start items-center">
      <div className="w-full text-left mb-10">
        {md1} > {md2}
        </div>
      <MyDiv3 d1={md1} d2={md2} d3={md3}/>
    </div>
  )
}
