import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react';
import Convert from './Convert';
import Dropdown from './Dropdown';

const options =[
{
 label: "Afrikans",
 value: "af"
},
{
 label : "Arabic",
 value :"ar"
},
{
    label: "Hindi",
    value : "hi"
}
];
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM


const Translate =() =>{
 const [language, setLanguage] =useState(options[0]);
 const [text, setText]= useState('');
    return (
        <div>
            <div className="ui form"> 
            <div className="field">
                <label>Enter text</label>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            </div>
            <Dropdown 
            label ="Select a language"
            selected={language}
            options={options}
            onSelectedChange={setLanguage}

            />
            <h3 className='ui header'> Output</h3>
            <Convert
            language={language}
            text={text}
            />
        </div>
    );
};
export default Translate;