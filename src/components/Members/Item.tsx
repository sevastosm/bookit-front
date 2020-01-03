import * as React from 'react';

interface IAppProps {
    data:any
}

const Item: React.FunctionComponent<IAppProps> = (props) => {
    const data={...props.data}
  return <li>
      
     <input type="text" value={data.SurName}/> 
     <input type="text" value={data.Name}/> 

     <input type="text" value={data.Phone1}/> 
     <input type="text" value={data.Emai}/>
     <input type="text" value={data.Status}/> 



      
      </li>
};

export default Item;
