import * as React from 'react';
import Item from "./Item"
import {fetchMembers} from "../../helpers/apicalls"

interface IAppProps {
}

const List: React.FC<IAppProps> = (props) => {

  const [members, setMembers] = React.useState([]);
 // Similar to componentDidMount and componentDidUpdate:
 React.useEffect(() => {
    console.log("IN")
    fetchData()
    // Update the document title using the browser API
  },[])

  const fetchData=()=>
    fetchMembers().then(response=>{
        setMembers(response.data)
     })
  
  return members?
  <ul>
      <li>
          <span>SurName</span>
          <span>Name</span>
          <span>Phone</span>
          <span>Email</span>
          <span>Status</span>
      </li>
    {members.map((member:any)=>{
        console.log("member",member)
          return <Item key={member.MembersID}  data={member}/>
      })}</ul>
  :'loading'

};

export default List;
