import React, {useState} from 'react';

const Accordion = ({items}) =>{
    const [activeindex, setActiveindex] = useState(null)

    const updateItem = (item_index) =>{
            setActiveindex(item_index)
            console.log(item_index)
    }

    const accordion = items.map((data,index) =>{
        const state_val = activeindex === index ? 'active' : ''
        return <React.Fragment key={index}>
            <div onClick = {e => updateItem(index)} className = {`title ${state_val}`}>
                <i className="dropdown icon"></i>
                {data.title}
            </div>
            <div className = {`${state_val} content`} >
                <p>{data.content}</p>
            </div>

            </React.Fragment>
    });
    // console.log(accordion)
    return(
        <div 
        className="ui styled accordion">{accordion}
         {/* <p>{activeindex}</p> */}
        </div>
       
    )
}

export default Accordion;