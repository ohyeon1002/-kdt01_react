// import './App.css'
// import Hello from './01/Hello'
// import HelloDate from './01/HelloDate'
// import FoodMain2 from "./06/FoodMain2"
// import MyEffect from "./08/MyEffect";
// import MyDiv1 from "./03/MyDiv1";
// import MyList from "./04/MyList";
// import MyToggle from "./07/MyToggle";
// import Traffic from "./10/Traffic";
// import MyRef from "./11/MyRef";
// import MyRef2 from "./11/MyRef copy 2";
// import "./02/MyClock.css" //전역 css
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { AiFillCopyrightCircle } from "react-icons/ai";
import MyClock from "./02/MyClock";
import Lotto from "./05/Lotto";
import FoodMain from "./06/FoodMain";
import BoxOffice from "./09/BoxOffice";
import Gallery from "./12/Gallery";
import Festa from "./13/Festa";
import RouteMain from "./14/RouteMain";
import Menu from "./UI/Menu";
import FCST from "./15/FCST";
import FCSTList from "./15/FCSTList";

export default function App() {

  return ( //App()은 무적권 리턴이 있어야함!!!
    <div className="w-full xl:w-8/10 h-screen flex flex-col mx-auto">
      <BrowserRouter>
      <header className='w-full h-20 bg-amber-200
                        px-15
                        flex justify-between items-center'>
        <h1 className='text-4xl font-bold text-blue-400'>KDT01</h1>
        <Menu />
        <Link to="/"><SlHome className='text-3xl font-bold text-blue-800'/></Link>
      </header>
      <main className='w-full flex flex-col flex-grow
                      overflow-y-auto'>
                        {/* items-center justify-center */}

        {/* <MyDiv1 /> */}
        {/* <Hello />
        <HelloDate /> */}
        {/* <span className='font-[Noto_Color_Emoji] text-7xl'>🇰🇷🇺🇸🇯🇵🇬🇧🇨🇳</span> */}
        {/* <FoodMain2 /> */}
        {/* <MyToggle /> */}
        {/* <MyEffect /> */}
        {/* <Traffic /> */}
        {/* <MyRef /> */}
        {/* <MyRef2 /> */}
        <Routes>
          <Route path="/" element={<MyClock />} />
          <Route path="/lotto" element={<Lotto />} />
          <Route path="/food" element={<FoodMain />} />
          <Route path="/movie" element={<BoxOffice />} />
          <Route path="/tour" element={<Gallery />} />
          <Route path="/festa" element={<Festa />} />
          {/* <RouteMain /> */}
          <Route path="/FCST" element={<FCST />} />
          <Route path="/FCSTList" element={<FCSTList />} />
        </Routes>
      </main>
      </BrowserRouter>
      <footer className='w-full  h-20 bg-amber-400
                        px-15
                        flex justify-between items-center'>
        <span className='font-extrabold text-green-700'>K-Digital Training 25-1회차 교육과정</span><span className='flex items-center font-bold text-green-600 italic'><AiFillCopyrightCircle />권오현 Kwon Ohyeon. All rights not reserved yet :) </span>
      </footer>
    </div>
  )
}