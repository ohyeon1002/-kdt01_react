function Hello() {
    let name = undefined;
    return (
        <h1 className="text-4xl font-bold italic">
            {name && `${name}님 반갑습니다.`}
            {/* {name == undefined? "이름없음" : name+"님 안녕하세요."} */}
        </h1>
    )
}

export default Hello