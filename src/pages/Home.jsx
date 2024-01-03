import logo from '../pmo-logo.png';
import { useState, useCallback, useEffect } from 'react';
import horloge from '../horloge.png'
import { NavLink } from "react-router-dom";

function Home() {
    const [newName, setnewName] = useState("Stop faping is the best thing you can do !");
    let names = ['Stop faping is the best thing you can do !', 'Enjoy your new life !', 'Build real connection with women !', 'Build Self Confidence'];
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 3000);
        return () => clearInterval(intervalID);
    }, [shuffle])
    console.log(horloge)


    return (
        <div>
            <span>Users online :</span>
            <div>
                <button>Rejoinds et begin !</button>
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className='mt-12'>{newName}</p>
            </header>
        </div>
    )
}

export default Home