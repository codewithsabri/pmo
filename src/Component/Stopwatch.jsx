
import { useState, useEffect } from 'react';
import Clock from "./Clock";
import MyProgress from './MyProgress';


const Stopwatch = () => {

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  const [start, setStart] = useState(false);
  const [date, setDate]= useState(0)

  let interval;
  const handleStart = () => {
    setStart(!start)
   
 
   
  }

  const now = new Date().getTime();


  const startTimer = () => {

    const countDownDate = new Date().getTime() 
    setDate( countDownDate)
    const distance =   now - countDownDate;
  
    if(start ==true)  {
        
      const interval = setInterval(() => {
       
        console.log('interval lancé' +  distance)
  
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);
  
        if ( distance > 0 && start == false ) {
          // Stop Timer
          setDate(0)
          clearInterval(interval);
          console.log('timer detruit')
     
        } else {
          console.log("time display")
          // Update Timer
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      });
        startTimer(0)
        // console.log(interval)
      } else {
      console.log('error')
      clearInterval(interval);
      };
    // Date where user choose to start challenge
    // const countDownDate = new Date("April 13,2023 09:19:00 ").getTime();

  };

  useEffect(() => {
   if (start == true)  startTimer(0)
   else {
    
   }

  });

  return (
    <div className="App">

      <MyProgress timerDays={timerDays} 
      timerHours={timerHours} 
      timerMinutes={timerMinutes} 
      timerSeconds={timerSeconds}
      handleStart={handleStart}
      start={start}/>

    </div>
 );






};

export default Stopwatch