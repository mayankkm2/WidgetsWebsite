import axios from 'axios';
import React,{useState,useEffect} from 'react';

const Convert =({language, text})=>{
    const [translated, setTranslated] = useState('');
    const [debouncedtext, setDebouncedtext] =useState(text);

    useEffect( () => {  //happens when text changes

        const timerId =setTimeout( ()=> {
            setDebouncedtext(text);
        },500 );

    return ()=> {
        clearTimeout(timerId);
    };
       
  },[text]);

    useEffect( ()=> {  //happens when debouncedtext changes
    //  console.log("clicked");
   const doTranslation =  async () => {

   const {data} = await axios.post( 'https://translation.googleapis.com/language/translate/v2',
   {},
   {
    params: {
            q: debouncedtext,
            target: language.value,
            key:  'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
      },
      });
      setTranslated(data.data.translations[0].translatedText);
   };
   
   doTranslation();
   /* const settimeoutid =setTimeout( () =>{//downside-we dont do any initial search,until after 1sec lapses when app starts up
     if(language && text) {
        doTranslation();
       } 
},1000); 
/* console.log('hello');*/ 
/* return () => {  //cleanup fn
 //console.log('hello2');
 clearInterval(settimeoutid);
};  */ 
   
    }, [language,debouncedtext]);


return(
    <div> {translated}</div>
);
};
export default Convert;