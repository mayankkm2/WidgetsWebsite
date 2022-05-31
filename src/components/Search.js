import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Search =() =>{
    const [term, setTerm ]=useState('programming');
    const [results, setResults] =useState([]);//results is array of objects
//console.log(results);
   
useEffect( () =>{  //we ll run arrow fn immediately, wen comp. 1st rendered as well
  const search = async () => { //helper func. or,u can use .then() promise,or self callng fn
    const { data }  = await axios.get('https://en.wikipedia.org/w/api.php',{
        params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch : term
        }
    });//'ll take that data out from response and assign/update some new piece of state(which ll cause rerendr&can build a list)
    setResults(data.query.search);
};

if(term && !results.length) { //u have to detect, comp is rendering 1st time/ !results.length-->means no result
 search(); 
}else{        //throttling
    const settimeoutid =setTimeout( () =>{//downside-we dont do any initial search,until after 1sec lapses when app starts up
        if(term) {
            search();
           } 
    },1000); 
    /* console.log('hello');*/ 
    return () => {  //cleanup fn
     //console.log('hello2');
     clearInterval(settimeoutid);
    }; 
}

}, [term]); //using that 2nd arg.'term' to make request to wiki api //immediately after user presses a key,we want to do a search

//if u re taking string frm 3rd party/api,&the rendering it(html), attack comes XSS  
const renderedResults = results.map( (result)=>{
return(                   //remember to put key, while buliding list
<div key={result.pageid}  className="item">
  <div className="content">
     <div className="right floated content">
        <a 
        className="ui button"
        href={`https://en.wikipedia.org?curid=${result.pageid}`}>
            Go
            </a>
         </div> 
      <div className="header">
          {result.title}</div>
 <span dangerouslySetInnerHTML={{__html : result.snippet }}></span>
  </div>
    </div>
);
});
//show rendered list in  jsx  
return (
<div> 
   <div className="ui form">
   <div className="field">
    <label>Enter search term</label>
    <input value={term} onChange={(e)=> setTerm(e.target.value) } className="input"/>
   </div>
   </div>
   <div className="ui celled list"> {renderedResults}</div>
  </div>
);
};

export default Search;