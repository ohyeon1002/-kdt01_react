export default function FCSTTable({th, unit, data, cate}) {
    const ths = th.map(head =>
                              <th key={head} className="bg-green-100">
                                {head}
                              </th>
                        );
    const sky = {'1':"맑음 🌞", '3':"구름많음 ⛅", '4':"흐림 ☁"};
    const ame = {'0':"없음", '1':"비", '2':"비/눈", '3':"눈", '4':"소나기", '5':"빗방울", '6':"빗방울/눈날림", '7':"눈날림"}
    const trtds = data.map(datum => 
                                    <tr key={datum.fcstDate+datum.fcstTime} className={datum.fcstTime % 200 == 100 ? " bg-gray-300 text-center" : " bg-gray-100 text-center"}>
                                      <td>
                                        {cate}
                                      </td>
                                      <td>
                                        {datum.fcstDate}
                                      </td>
                                      <td>
                                        {datum.fcstTime}
                                      </td>
                                      <td>
                                        {unit == '코드값'? (cate == '하늘상태'? sky : ame)[datum.fcstValue] : datum.fcstValue+unit}
                                      </td>
                                    </tr>
                            );
  return (
    <table className="w-full h-full mt-3">
        <thead>
          <tr>
            {ths}
          </tr>
        </thead>
        <tbody>
          {trtds}
        </tbody>
    </table>
  )
}
