import { useState } from "react"
import { useEffect } from "react"
// import "./MyClock.css"
import styles from "./myClockTime.module.css"

export default function MyClockTime ({updater}) {
    const [timenow, setTimenow] = useState(new Date());
    const updateClock = () => {
        setTimenow(new Date());
    };
    useEffect (() => {
        let tm = setInterval(() => {
            setTimenow(new Date);
        }, 1000);
        return () => {
            clearInterval(tm);
        };
    }, [timenow]);
    
return(
    <>
    <p className="pst">현재시각</p>
    <p className={styles.pst} >{timenow.toLocaleTimeString()}</p>
    <button className="bg-blue-300 hover:bg-blue-400 rounded-lg" onClick={updateClock}> 클릭 </button>
    </>
)
}
