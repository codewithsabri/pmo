import React, { useState, useContext } from 'react'
import './Stories.css';
import { useAuth} from '../context/AuthContext';

function Stories() {
  const { user, Authenticate, Disconnect } = useAuth();

  console.log(Authenticate)

  let img = [
    "https://discuss.flarum.org/assets/avatars/kv0cEfF4E8N5OEy1.png",
    "https://discuss.flarum.org/assets/avatars/kv0cEfF4E8N5OEy1.png",
  ]
  return (
    <>
      <div>ALL Stories
        {user == false &&
          <div className="max-w-sm w-1/2 lg:max-w-full lg:flex justify-center mt-2 m-auto ">
            <div className="h-48 lg:h-auto lg:w-auto flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">My last achievement 30 days Strike !</div>
                <p className="text-gray-700 text-base">Thrilled to share that I've just hit a remarkable 30-day milestone on my NoFap journey, and the sense of accomplishment is beyond words. The discipline, self-control, and newfound focus have propelled me to unprecedented success, and I feel like a stronger, more resilient version of myself. Here's to conquering new challenges and embracing the journey ahead!"</p>
              </div>
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="data:image/png;base64,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" alt="Avatar of Jonathan Reinink" />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>

          </div>
        }
      </div>

      <div> <button className="bg-green-600 rounded-full py-2 px-4 text-white mt-2">Share mine</button>

        <span onClick={() => Authenticate(user)} className="visually-hidden">34 replies</span></div>

    </>
  )
}

export default Stories