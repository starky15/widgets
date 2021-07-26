import React, {useState} from 'react';

const Dropdown = ({ label, colors, selected, onSelectChange }) =>{
    const [status, setstatus] = useState('close')

    // console.log(selected.label)
    // console.log(colors[0].label)
    const renderedItems = colors.map((color)=>{
        return(
                    <div className="item" key={color.label} onClick={e => {onSelectChange(color)}} data-value={color.color}>{color.label}</div>

        )
    });
    // console.log(selected);
    // let drp = 'close'
    const trip = () =>{
        // alert(drp)
        if (status === 'close'){
            setstatus('open')
        }
        else{
            setstatus('close')
        }
    }
    return(
        <div className="ui form">
            <div className="field">
            <label className="label">{label}</label>
            <div onClick={e=>{trip()}} className={`ui selection dropdown ${status === 'close' ? "":"visible active" }`}>
            <input type="hidden" name="color"/>
                <i className="dropdown icon"></i>
                <div className="default text">
                    {selected.label}
                </div>
                <div className={`menu ${status === 'close' ? "": " visible transition"}`}>
                        {renderedItems}
                </div>
            </div>
            </div>
        </div>
    );
}

export default Dropdown;