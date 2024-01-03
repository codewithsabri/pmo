import React,{useContext} from 'react'
import styles from "./index.css"
import { Link } from "react-router-dom";
import { userContext } from './App'

function Navigation() {
    const [authenticated, setAuthenticated] = useContext(userContext);
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <Link to="/" ><span className="font-semibold text-xl tracking-tight">PMO TRACKING APP</span></Link>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow gap-2px">
                        <Link to="Stories" className=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Stories
                        </Link>
                        <Link to="SucessStories" className=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Success stories
                        </Link>
                        <Link to="Ressources" className=" block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Ressources
                        </Link>
                        <Link to="ChartProgress" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Chart
                        </Link>
                        <Link to="Myprofile" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            My profil
                        </Link>
                        <Link to="Account" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Account
                        </Link>
                    </div>
                    {authenticated == false ?
                        <div>
                            <Link to="/Login" className="inline-block text-white text-sm px-4 py-2 leading-none border rounded text-white border-white  hover:text-white  mt-4 lg:mt-0">Login</Link>
                            <Link to="/Register" className="inline-block text-white text-sm px-4 py-2 leading-none border rounded text-white border-white  hover:text-white  ml-4 lg:mt-0">Register</Link>
                        </div>
                        :
                        <div> <Link onClick={() => setAuthenticated(false)} to="/" className="inline-block text-white text-sm px-4 py-2 leading-none border rounded text-white border-white  hover:text-white  ml-4 lg:mt-0">Disconnect</Link></div>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navigation