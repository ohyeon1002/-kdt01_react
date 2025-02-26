// import './App.css'
// import Hello from './01/Hello'
// import HelloDate from './01/HelloDate'
import { SlHome } from "react-icons/sl";
import { AiFillCopyrightCircle } from "react-icons/ai";
import MyClock from "./02/MyClock";
import MyDiv1 from "./03/MyDiv1";

export default function App() {

  return ( //App()은 무적권 리턴이 있어야함!!!
    <div className="w-full xl:w-8/10 h-screen flex flex-col mx-auto">
      <header className='w-full  h-20 bg-amber-200
                        px-15
                        flex justify-between items-center'>
        
        <h1 className='text-4xl font-bold text-blue-400'>KDT01</h1><SlHome className='text-3xl font-bold text-blue-800'/>
      </header>
      <main className='w-full flex flex-col flex-grow
                      items-center justify-evenly
                      overflow-y-auto'>
        <MyDiv1 />
        {/* <MyClock /> */}
        {/* <Hello />
        <HelloDate /> */}
        {/* <span className='font-[Noto_Color_Emoji] text-7xl'>🇰🇷🇺🇸🇯🇵🇬🇧🇨🇳</span> */}
      </main>
      <footer className='w-full  h-20 bg-amber-400
                        px-15
                        flex justify-between items-center'>
        <span className='font-extrabold text-green-700'>K-Digital Training 25-1회차 교육과정</span><span className='flex items-center font-bold text-green-600 italic'><AiFillCopyrightCircle />권오현 Kwon Ohyeon. All rights not reserved yet :) </span>
      </footer>
    </div>
  )
}