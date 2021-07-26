import React,{useState} from 'react';
import Dropdown from './Dropdown';
import Convert
 from './Convert';
const choices = [
    {
        label:'Hindi',
        value: 'hi'
    },
    {
        label:'Afrikaans',
        value: 'af'
    },
    {
        label:'Arabic',
        value: 'ar'
    },

];

 const Translate = () =>{
     const [selected, setselected] = useState(choices[0])
     const [term, setterm] = useState('')

     
     return (
        <div>
            <div className="ui segment">
                <div className="ui form container">
                    <div className="field">
                        <label htmlFor="name">Translate Term</label>
                            <input 
                            type="text" 
                            name="name"
                            value={term}
                            onChange={e => {setterm(e.target.value)}}
                            /> 
            </div>
                </div>
                  <br />
            <Dropdown label={"Choose language"} colors={choices} selected={selected} onSelectChange={setselected} />  
            <h4>Translated Output:</h4>
            <Convert term={term} language={selected.value}/>
            </div>  
        </div>
     )
 };

 export default Translate;