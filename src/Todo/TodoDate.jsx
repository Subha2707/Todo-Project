import { useEffect,useState } from "react";

export const TodoDate=()=>{

    const[dateTime,setdateTime]=useState("");

    useEffect(()=>{
        const interval=setInterval(() => {
        const now=new Date();
        const formatDate=now.toLocaleDateString();
        const formatTime=now.toLocaleTimeString(); 

        setdateTime(`${formatDate} - ${formatTime}`);
        }, 1000);

        return()=>clearInterval(interval);
    },[])


    return(
         <h2 className="date-time"> {dateTime}</h2>
    );
};