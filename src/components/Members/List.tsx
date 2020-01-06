import * as React from "react";
import Item from "./Item";
import { fetchMembers } from "../../helpers/apicalls";
import ItemDetails from "./Itemdetails";

interface IAppProps {}

const List: React.FC<IAppProps> = props => {
  const [members, setMembers] = React.useState([]);
  const [itemForm, setItemForm] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState('add');
  const [selectedMember, setselectedMember] = React.useState({});

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    fetchData();
    // Update the document title using the browser API
  }, []);

  const fetchData = () =>
    fetchMembers().then(response => {
      setMembers(response.data);
    });

  const handleAdditem = e => {
    e.preventDefault();
    setItemForm(true);
    setFormStatus('add')
  };

  const handleSelectedItem = (id: string) => {
    let selectedItem = members.filter(member => {
      return member.MembersID === id;
    });
    console.log("SelectedItem", selectedItem);
    setFormStatus('edit')
    setselectedMember(selectedItem[0]);
    setItemForm(true);

  };

  return (
    <div>
      {members ? (
        <table style={{ width: "100%", textAlign: "center" }}>
          <thead>
          <tr>
            <th>Actions</th>
            <th>SurName</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
          </tr></thead>
          <tbody>
          {members.map((member: any) => {
            return (
              <Item
                key={member.MembersID}
                editItem={handleSelectedItem}
                data={member}
              />
            );
          })}
          <tr>
            <td>
              <button onClick={handleAdditem}>+</button>
            </td>
          </tr></tbody>
        </table>
      ) : (
        <div>Loading Data..</div>
      )}

      {itemForm ? (
     <ItemDetails members={members[0]} member={selectedMember} status={formStatus} />
      ) : null}
      </div>
  );
};

export default List;
