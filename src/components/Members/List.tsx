import * as React from "react";
import Item from "./Item";
import { fetchMembers, AddMember } from "../../helpers/apicalls";
import ItemDetails from "./Itemdetails";
import MaterialTableComponent from "../UI/MaterialTable";

interface IAppProps {}

const List: React.FC<IAppProps> = props => {
  const [members, setMembers] = React.useState([]);
  const [itemForm, setItemForm] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState("add");
  const [selectedMember, setselectedMember] = React.useState({});

  // Similar to componentDidMount and componentDidUpdate:
  React.useEffect(() => {
    fetchData();
    // Update the document title using the browser API
  }, []);

  const fetchData = () =>
    fetchMembers().then(response => {
      let columns = [];
      let data = [];
      Object.keys(response.data[0]).map((key, i) => {
        columns.push({ title: key.toUpperCase(), field: key });
      });
      response.data.map((d, i) => {
       data.push(d);
      });
      let setData = {
        columns: columns,
        data: data
      };
      setMembers(setData);
    });

  const handleAdditem = e => {
    e.preventDefault();
    setItemForm(true);
    setFormStatus("add");
    AddMember();
  };

  const handleSelectedItem = (id: string) => {
    let selectedItem = members.filter(member => {
      return member.MembersID === id;
    });
    console.log("SelectedItem", selectedItem);
    setFormStatus("edit");
    setselectedMember(selectedItem[0]);
    setItemForm(true);
  };

  return (
    <div>
      {members ? (
        <MaterialTableComponent members={members} />
      ) : (
        <div>Loading Data..</div>
      )}

      {/* {itemForm ? (
     <ItemDetails members={members[0]} member={selectedMember} status={formStatus} />
      ) : null} */}
    </div>
  );
};

export default List;
