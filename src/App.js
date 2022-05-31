import React,{useState} from 'react';
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from './components/Translate';




const items = [ //static -accordion
{
  title:'What is React?',
  content: 'React is JS framework'
},
{
  title:'Why use React?',
  content: 'React is a favourite JS library'
},
{
  title:'How do u use react?',
  content:'U use reactby creting components'
}
];

const options = [
{ label: 'The color red',
  value: 'red'
},
{
 label :'the color green',
 value: 'green'
},
{ label :'the shade of blue',
value: 'blue'

}
];
export default () => {
 //const [selected, setSelected]= useState(options[0]);//using state
 //const [ showdropdown, setshowdropdown] = useState(true);
  return (
  <div>
   {/*  <button onClick={()=> setshowdropdown(!showdropdown) }>Toggle dropdown</button>
   {/* <Accordion items={items}/> */}
   {/* <Search/> */}
 {/*   { showdropdown ? 
     <Dropdown
      selected={selected}
      onSelectedChange ={setSelected}
      options={options}
      
      /> : null
    }  */} 

    <Translate/>

    </div>
    );
};
