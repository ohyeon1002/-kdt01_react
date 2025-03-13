import { useState,useEffect } from "react";

export default function CategoryChecker({msg, sel, select}) {
  const [clicked, setClicked] = useState(false);
  useEffect(()=>{
    if(msg!=sel){
      setClicked(false);
    }
  }, [sel])
  const switchWhenClicked = clicked ? "bg-blue-800 outline-2 outline-offset-2 outline-blue-800" : "bg-blue-600" ;
  
  return (
    <div>
      <button onClick={()=>
                        {
                          select(msg);
                          setClicked(true);
                        }
                      }
              className={`m-5 p-3 rounded-lg ${switchWhenClicked} text-white`} >
        {msg}
      </button>
    </div>
  )
}
