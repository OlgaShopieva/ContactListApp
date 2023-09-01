import './App.css';
import TableView from './layouts/tableView/TableView';
import React, {useState, useEffect} from 'react';
import FormNewItem from './layouts/tableView/formNewItem/FormNewItem';

const App = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/contacts')
  .then(res => {
    const data = [];
  
    res.data._embedded.contacts.forEach(item => {
      data.push(
        {
        fullName: item.fullName,
        phone: item.phone,
        notes: item.notes
        }
      )
    })
    setItems(data);
  })
  
  }, []);

const appendContact = (fullName, phone, notes) => {

 const length = items.length;
 let currentId = 0;

 if(length==0) {
  currentId=1;
 } else {
  currentId = items[length - 1].id + 1;
 }


  const temp = {
    id:currentId, 
    fullName: fullName, 
    phone: phone, 
    notes: notes
  };
  setItems([...items, temp]);

}

const deleteContact = (id) => {
  setItems(items.filter(item => item.id != id));
}

  return (
    <div className='container mt-5'>
        <div className='card'> 
          <div className='card-header'>
            <h1>Contact List</h1>
          </div>
          <div className='card-body'>
            <TableView data = {items} deleteContact={deleteContact}/>
            <FormNewItem appendContact={appendContact}/>

          </div>
        </div>
       </div>

  );
}

export default App;
