// In order to avoid full page reload we are creating a file\
// This file will act as anchor tag passed to the headers

import React from 'react';

const Link = ({href, className, children}) => {
     
        /* applying onchange so that we can prevent the default loading which is loading the inedx.html again and again*/

    const stopIt = (e) =>{
        e.preventDefault()

        // this is updating the history as well as the url in the bar
        window.history.pushState({state:href},'',href)
        //  console.log(window.history.state)

         const navEvent = new PopStateEvent('popstate')
         window.dispatchEvent(navEvent)
    }

    return(
    <a href={href} onClick={(e) => stopIt(e)} className={className}>{children}</a>
    );
}

export default Link;