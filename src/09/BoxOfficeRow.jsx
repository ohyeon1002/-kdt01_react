export default function BoxOfficeRow({ data, detailDesignator }) {
    const bgc = data["rank"]%2 == 0 ? "bg-gray-200 hover:bg-blue-100" : "hover:bg-blue-100" ;
    return (
        <tr className={bgc} onClick={e => detailDesignator(`[${data["rankOldAndNew"]} : ${data["openDt"]}] ${data["movieNm"]}, 상영 스크린 수: ${data["scrnCnt"]}, 상영 횟수: ${data["showCnt"]}`)}>
            <td>
                {data["rank"]}
            </td>
            <td>
                {data["movieNm"]}
            </td>
            <td>
                {data["salesAmt"]}
            </td>
            <td>
                {data["audiCnt"]}
            </td>
            <td>
                {data["salesAcc"]}
            </td>
            <td>
                {data["audiAcc"]}
            </td>
            <td>
                {data["rankInten"]}
            </td>
        </tr>
    )
}
