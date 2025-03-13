export default function ShowDetail({title, info}) {
  return (
    <div className="flex flex-row mt-3">
        <div className="bg-green-700 text-white mr-5 p-3 font-bold text-xl">{title}</div>
        <div className="ml-5 p-3 text-xl">{info}</div>
    </div>
  )
}
