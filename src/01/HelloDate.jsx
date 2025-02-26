function HelloDate () {
    const current = new Date();
    const tStyle = {
        color:"red",
        fontWeight:"bold",
        backgroundColor: "yellow"
    };
    return(
        <div style={tStyle}>
            현재시각: <span style={{color:"blue"}}>{current.toLocaleTimeString()}</span>
        </div>
    )
}

export default HelloDate