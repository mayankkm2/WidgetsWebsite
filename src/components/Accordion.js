import React,{useState} from 'react';

const Accordion =({items}) => {

  const [activeIndex, setActiveIndex]= useState(null);//after rerenders activeIndex will have val provided by setActiveIndex,not null 
  const onTitleClick =(index)=>{ //helper fn foronclick descption
    setActiveIndex(index);//fn to call ,update piece of state/OR,setter fn//after state update automaticaly rerender
  };
 //'ll use hooks state sys ,to keep track which of element to be collapsed/expand
    const renderedItems = items.map( (item, index)=> {
const active = index ===activeIndex? 'active': '';

return (
  <React.Fragment key= {item.title}>
 <div className={`title ${active} `} //'active' classnme ctrl, if individual 'll be expanded or not
  onClick={() => onTitleClick(index)}>
 <i className="dropdown icon"></i>
  {item.title}
 </div>
 <div className={`content ${active}`}>
  <p>{item.content}</p>
 </div>
</React.Fragment>
);
});
    
 return <div className="ui styled accordion"> 
 {renderedItems}
 
 </div>;
};
export default Accordion;