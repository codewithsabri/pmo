import React from 'react'
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';


function MyProgress({ timerDays, timerHours, timerMinutes, timerSeconds,handleStart , start}) {

console.log('t')
  return (
    <div className="grid h-[60vh] place-items-center">
      {/* <div style={{ width: 300, height: 300 }}>
        <p className="mb-6">Next Milestone : 2 days and 6 hours</p>
        <CircularProgressbarWithChildren value={80}     text={` ${start == true ? timerDays : ''}  ${timerDays > 1 ? 'days' : 'day'} `}>
          <div className="absolute inset-x-0 bottom-12 h-16">
            {start ==true && 
            <div ><span>{timerHours}h</span>  <span>{timerMinutes}m</span>  <span>{timerSeconds}s</span></div>
          }
          </div>
        </CircularProgressbarWithChildren>

        <button onClick={ handleStart}>{start == true ? 'Relapse' : 'Start'}</button>
      </div> */}
    </div>
  )
}

export default MyProgress