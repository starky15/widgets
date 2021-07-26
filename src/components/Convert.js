import React, {useEffect, useState} from 'react';
import axios from 'axios';
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM



const Convert = ({term, language}) => {
    const [translatedtext, settranslatedtext] = useState('')
    // console.log(language))

    useEffect(() => {
        const getData = async () =>{
        const response = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params:{
                q: term,
                target: language,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })
        console.log(response.data.data.translations[0].translatedText);
        settranslatedtext(response.data.data.translations[0].translatedText)
    }

    // using this so that it does not run on every key press.
    const Stout = setTimeout(() => {
        getData()
    },1000)
 
    
    return () => {
        clearTimeout(Stout)
        // console.log('Cleanup in progress')
     }
     }, [term,language])
   

    
    return (
        <div>
            <br />
          {translatedtext}
        </div>
    )
}
export default Convert;