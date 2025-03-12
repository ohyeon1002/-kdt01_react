import { useState, useEffect } from "react"
import BoxOfficeRow from "./BoxOfficeRow";


export default function BoxOffice() {

  //포스터 저장 배열
  // let posterArr = [];

  // //포스터 가져오기
  // const getPoster = async (movieNm) => {
  //   const mvKey = import.meta.env.VITE_APP_MV_KEY;
  //   let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?api_key=${mvKey}&query=${movieNm}`;

  //   const resp = await fetch(url);
  //   const data = await resp.json();

  //   if (data == undefined) posterArr.push('');
  //   else posterArr.push(data.results[0].poster_path);
  // }

  //화면에 렌더링될 상태 변수
  const [detail, setDetail] = useState('');
  const [movieData, setMovieData] = useState([]);

  //일일박스오피스 정보 가져오기
  const getFetchData = async () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY;

    const dt = getYesterday().replaceAll("-", ""); console.log(dt);
    let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
    url = `${url}?key=${apiKey}&targetDt=${dt}`;
    console.log(url);

    const resp = await fetch(url);
    const data = await resp.json();

    let boxList = data.boxOfficeResult.dailyBoxOfficeList;
    setMovieData(boxList);
  };

  //컴포넌트 실행시 한번 fetch
  useEffect(() => {
    getFetchData();
  }, []);

  const getYesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const maxDate = `${yesterday.getFullYear()}-${"0" + (yesterday.getMonth() + 1)}-${yesterday.getDate()}`;
    return maxDate;
  }

  const contents = movieData.map(item => <BoxOfficeRow key={item["rank"]} data={item} detailDesignator={c => setDetail(c)} /> );

  return (
    <div className="w-full h-full">
      <table className="w-full h-full text-center">
        <thead className="w-full" >
          <tr className="w-full bg-green-100 border border-black" >
            <td>
              순위
            </td>
            <td>
              영화명
            </td>
            <th>
              매출
            </th>
            <th>
              관객
            </th>
            <th>
              누적 매출
            </th>
            <th>
              누적 관객
            </th>
            <th>
              증감율
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {contents}
          <tr className="bg-gray-300" onClick={e => setDetail('')}>
            <td colSpan={7} className="selection:bg-transparent" >{detail}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
