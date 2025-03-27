export default function FCSTTable({th, unit, data, cate}) {
    const ths = th.map(head =>
                              <th key={head} className="bg-green-100">
                                {head}
                              </th>
                        );
    console.log(data);
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
                                        {datum.fcstValue}{unit}
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
