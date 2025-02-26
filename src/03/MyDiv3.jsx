export default function MyDiv3({d1, d2, d3}) {
  return (
    <div className="w-8/10 h-8/10
                     bg-lime-500 text-white tex-2xl
                    p-10
                    flex flex-col
                    justify-start items-center">
      <div className="w-full text-left mb-10">
        {d1} > {d2} > {d3}
        </div>
    </div>
  )
}
