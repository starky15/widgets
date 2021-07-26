import {useEffect, useState} from 'react';
// import Link from "./Link";

const Route = ({path, children}) => {

    const [currentpath, setcurrentpath] = useState(window.location.pathname)

useEffect(() => {
    const onLocationChange = () =>{
        // updating the current path name
        setcurrentpath(window.location.pathname)
        }
    window.addEventListener('popstate', onLocationChange)
    return () => {
        window.removeEventListener('popstate',onLocationChange)
    }
}, [])

    return currentpath === path ? children : null ;

    

};


export default Route;