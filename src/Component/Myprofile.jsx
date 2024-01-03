import React, { useState } from 'react'

function Myprofile() {
    const [progress, setProgress] = useState(70); // You can replace this with your actual progress value
    const [goal, setGoal] = useState(90); // You can replace this with your actual goal value
    return (
        <div className="profile-container">


            {/* Introdcution title */}



            <div className="profile-header">
                <h1>My Addiction Profile</h1>
                <span>Choose avatar</span>
                <span>Choose username</span>
            </div>

            <div><span>Tabacco</span>

                <a href="#" class="m-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tabacco</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <p>Current goal 10 days</p>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>

                </a>


            </div>
            <div><span>Alcohol</span>

                <a href="#" class="m-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Alcohol</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <p>Current goal 25 days</p>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-pink-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                </a>
            </div>

            <div><span>Social Media</span>

                <a href="#" class="m-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Social Media</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <p>Current goal 3 days</p>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-teal-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                </a>
            </div>
            
            <div><span>Sex</span>

                <a href="#" class="m-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sex</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <p>Current goal 3 days</p>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-orange-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                </a>
            </div>

            <div className="progress-container">
                <h2>Progress</h2>
                <div className="progress-bar" style={{ width: `${(progress / goal) * 100}%`, backgroundColor: 'red' }}>
                    {/* <span className="progress-label">{`${progress}/${goal}`}</span> */}
                </div>
            </div>
            <div className="goal-container">
                <h2>Goal</h2>
                <p>{`My goal is to reach ${goal + ' ' + 'days'} in my addiction recovery.`}</p>
            </div>


            {/* Card elements  */}




        </div>
    )
}

export default Myprofile