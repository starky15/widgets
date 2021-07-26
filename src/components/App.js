import React, {useState} from 'react';
import Accordion from './Accordion'
import Search from './Search';
import Dropdown from './Dropdown'
import Translate from './Translate';
// import Convert from './Convert';
import Route from './Route';
import Header from './header';

const App = () => {
    const colors = [
        {
            label: 'Raging red rays',
            color: 'red'
        },
        {
            label: 'Groot grassy green',
            color: 'green'
        },
        {
            label: 'oceanic clear blue',
            color: 'blue'
        }
    ];

    const [selected, setSelected] = useState(colors[0])
    console.log(selected)
    const datas = [
        {
            title: 'What is this language',
            content: 'This is a react language'
        },
        {
            title: 'Why is this language used?',
            content: 'This is used for frontend development'
        },
        {
            title: 'What are the alternatives ?',
            content: 'Alternatives are vue, angular etc'
        }
    ];

   

    const onSelectChange =(e) =>{
        setSelected(e)
    };

    // const path = window.location.pathname

    // console.log(path)



    return(
        <div className="ui container">
            <Header />
            <br />
            <br />
            <Route path='/'>
                <Accordion items={datas}/>
            </Route>
            <Route path='/search'>
                <Search items={datas}/>
            </Route> 
            <Route path='/translate'>
                <Translate  />
            </Route> 
            <Route path='/dropdown'>
                <Dropdown label="Choose color" colors={colors} selected={selected} onSelectChange={onSelectChange} />
            </Route> 
            {/* <br /> */}
        {/* <Accordion items={datas}/>
        <Search />
        <Dropdown label="Choose color" colors={colors} selected={selected} onSelectChange={onSelectChange} />
        <Translate  /> */}


        </div>
    )
}
export default App;