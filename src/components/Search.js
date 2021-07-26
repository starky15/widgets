import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [val, setVal] = useState('Panther')
    const [result, setResult] = useState([])

    //useEffect 
    //using this api :http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=apple
    useEffect(() => {
        const searchIt = async () =>{
            const Response = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    format:'json',
                    list: "search",
                    origin:'*',
                    srsearch: val
                }
            });
            setResult(Response.data.query.search)
        };

        // applying time out to reduce the number of searches on every type in keyboard
        const Tout = setTimeout(()=>{
            if (val){
                searchIt();
            }
        }, 500)

        // use effect can return a  function that we are using as cleanup mechanism 
        return () => {
            clearTimeout(Tout)
        }
    }, [val]);
    


    const onValueChange = (term) =>{
        setVal(term)
    }

    const renderedItems = result.map(res => {
        return (

                <div key={res.pageid} className="item">
                    <div className="content">
                        <div className="header">
                            {res.title}
                        </div>
                        {// if in case we wish to load html, we can use the below syntax
                        }
                        {// but this is prone to XSS attack, so don't use it..(this is for info)
                        }
                        <span dangerouslySetInnerHTML={{__html:res.snippet}}></span> <a href={`https://en.wikipedia.org?curid=${res.pageid}`}><button href="www.google.com" className="ui right floated">Go</button></a>
                    </div>
                </div>

        )
    })
   
    return(
        <div className="ui segment">
            <form className="ui form container">
                <div className="field">
                    <label htmlFor="name">Search Term</label>
                    <input 
                    onChange={e => {onValueChange(e.target.value)}} 
                    type="text" 
                    name="name"
                    value={val}
                    />
                </div>
            </form>
            <div className="ui relaxed divided list">
                {renderedItems}
            </div>
        </div>
    );
};

export default Search;