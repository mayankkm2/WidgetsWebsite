import React,{ useState,useEffect, useRef } from 'react';

const Dropdown = ({label, options,selected, onSelectedChange}) =>{
 
const [open ,setOpen] = useState(false); //'open' state to know whether dropdown open or closed
const ref = useRef(); 
 //body me kahi par click kar,bubble up to doucumrnt.body to perfrm
useEffect( ()=> { //order of invoke:all d event listeners wired up using addevent listeners,gets calld 1st
 document.body.addEventListener( 'click', (event)=> {//..only after then react listeners gets calld(A-B-C)
    if(ref.current.contains(event.target)){
      return ;

    }
    
    // console.log('clicked');
    //console.log('A');
   // console.log(event.target);//to know specific element clicked on
    setOpen(false);
 //}); 
 },{capture: true} );
},[]);

const renderedOptions = options.map((option)=>{
   if(option.value === selected.value) {
       return null;//null mean dont render anything in react
   }
  
  return(
  <div key={option.value} 
  onClick ={ ()=>{
   // console.log('B');  
    onSelectedChange(option);
      //when onclick gets calld,seleted color changs,&event bubbling happens which move up to onclik(ln:49)&invke that
    }}
  className="item"> 
   {option.label}
  </div>
  
  );
 });
 //when inside dropdwn ,dont want body envtlistener to be used,When out of dropdwn,bodyevnt listener to be used-to close dropdown

//useref: direct reference to a DOM element(here, 'ui form'/we look at tis elemnt or elemnt clickd on&decide elemnt clikd on, inside dis form )
// console.log(ref.current); 
return(
     <div ref={ref} className='ui form'>
     <div className='field'>
         <label className='label'>{label}</label>
      <div onClick={ ()=> {
         //  console.log('C');here,setopen val set by body(ie false),flips to opp.,ie true,so dropdwn remains open
          setOpen(!open);
          
        }} 
      className={`ui selection dropdown ${open? 'visible active' : ''}`}>
       <i className='dropdown icon'></i>
       <div className='text'>{selected.label}</div>  
       <div 
       className={`menu ${open ? 'visible transition' : ''}`}>
           {renderedOptions}
       </div>
         </div> 
     </div>
     </div>
 );
    
};

export default Dropdown;