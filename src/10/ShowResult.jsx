import ShowDetail from "./ShowDetail"

export default function ShowResult({data}) {
    //겁나 지멋대로 쓴 코드 - 더 깔끔하게 수정하기...
    const details = Object.fromEntries(Object.entries(data).toSpliced(3,3));
    const orderedDetails = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"].map(title => <ShowDetail key={title} title={title} info={details[title]} />);
    //.map(item => <ShowDetail key={item[0]} title={item[0]} info={item[1]} />);
    console.log(details);
    console.log();
  return (
    <div className="w-full flex flex-row justify-evenly">
        {orderedDetails}
    </div>
  )
}

