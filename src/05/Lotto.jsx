import TailBall from "../UI/TailBall"
import TailButton from "../UI/TailButton"

export default function Lotto() {
    let set = new Set();
    while (set.size < 7) {
        set.add(Math.floor(Math.random()*45+1));
    }
    let tags = Array.from(set).sort((a,b) => a-b).map(num => <TailBall key={num} value={num} colorTag={Math.floor(num/10)} />);
  return (
    <div className="h-100 flex flex-col justify-evenly">
        <div className="flex">
            {tags}
        </div>
        <div className="flex justify-center">
            <TailButton msg="로또 번호 생성" cn="bg-blue-500" />
        </div>
    </div>
  )
}
