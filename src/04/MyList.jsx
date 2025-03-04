import MyListItem from "./MyListItem";
import Data from "./MyListData.json"

export default function MyList() {
    let tags = Data.map(item => <MyListItem key={item.title} title={item.title} imgUrl={item.imgUrl} content={item.content} show={false} />); //배열로 전달하게 바꿔보기
    return (
        <div className="w-9/10 grid grid-cols-1 lg:grid-cols-2 p-10 lg:p-2 justify-evenly justify-self-center">
            {/* <MyListItem data={data[0]}/>
            <MyListItem data={data[1]}/>
            <MyListItem data={data[2]}/>
            <MyListItem data={data[3]}/> */}
            {tags}
        </div>
    )
}
// let data={item.title, item.imgUrl, item.content};
// return <MyListItem key={item.title} data={data} /> ;