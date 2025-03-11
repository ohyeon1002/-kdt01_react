export default function TailButtonLine({msg, change, box}) {
    const bottonStyle =   msg==box // tailwindcss가 백틱이 잘 안먹음 2 - 삼항연산자로 버튼 스타일, 온클릭 이벤트 일일이 지정
                    ?   "p-3 rounded-lg border-1 bg-white hover:bg-gray-100"
                    :   box=="blue"
                       ?   "p-3 rounded-lg border-none bg-blue-200 hover:bg-blue-100"
                       :   "p-3 rounded-lg border-none bg-orange-200 hover:bg-orange-100";
    const hasClicker =  msg==box
                    ?   e => e
                    :   e => change();
  return (
    <>
      <button value={msg} className={bottonStyle} onClick={hasClicker} >{msg}</button>
    </>
  )
}
