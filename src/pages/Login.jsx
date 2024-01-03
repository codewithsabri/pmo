import { useState, useRef, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { userContext } from '../App'
import { useNavigate } from "react-router-dom";
import { useAuth} from '../context/AuthContext';


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gwykwsvwuqburndfcyyq.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)




// const [loading, setLoading] = useState(false)
// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')

// const emailRef = useRef()
// const passwordRef = useRef()

// async function handleSubmit(e) {
//     e.preventDefault()

//     // @TODO: add login logic
// }

// const handleLogin = async (event) => {
//     event.preventDefault()

//     setLoading(true)
//     const { error } = await supabase.auth.signInWithOtp({ email })

//     if (error) {
//         alert(error.error_description || error.message)
//     } else {
//         alert('Check your email for the login link!')
//     }
//     setLoading(false)
// }


export default function App() {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const { user, Authenticate, Disconnect } = useAuth();

    const navigate = useNavigate();

    async function signUpNewUser() {
        const { data, error } = await supabase.auth.signUp({
            email: 'example@email.com',
            password: 'example-password',
            options: {
                emailRedirectTo: 'https//example.com/welcome'
            }
        })
    }

    const handleLoginChange = (event) => {
        setLogin(event.target.value);
      };


      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };


    const signInWithEmail = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase.auth.signInWithPassword({
            email: login,
            password: password
        })


        if (error) {
            setError(error.message);
            console.error('Erreur de connexion:', error.message);
        } else {
            setError(null);
            Authenticate(true)
            console.log('Connexion réussie:', data);
            console.log(user);
            navigate("/");
            // Ajoutez ici la logique pour rediriger l'utilisateur ou effectuer d'autres actions après la connexion
        }

    }






    //   if (!session) {
    //     return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
    //   }
    //   else {
    //     return (<div>Logged in!</div>)
    //   }


    return (
        <div className="h-screen md:flex">
            <div
                className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-orange-200 to-red-500 justify-around items-center hidden">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">Welcome for Healing journey</h1>
                    <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form className="bg-white">
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                        <input  onChange={handleLoginChange} class="pl-2 outline-none border-none" type="text" name="" id="" placeholder=" Email" />
                    </div>

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clip-rule="evenodd" />
                        </svg>
                        <input    onChange={handlePasswordChange} className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
                    </div>
                    <button onClick={signInWithEmail} className="block w-full bg-red-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                    <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
                </form>
            </div>
        </div>

    );
}








