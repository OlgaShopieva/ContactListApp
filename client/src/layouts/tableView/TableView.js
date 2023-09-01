import React from 'react'
import TableRowItem from './components/TableRowItem';

const TableView = (props) => {


    return (            
    <table className='table table table-bordered table-hover'>
    <thead>
      <tr>
        <th scope='col'>№</th>
        <th scope='col'>Name</th>
        <th scope='col'>Phone number</th>
        <th scope='col'>Notes</th>
      </tr>
    </thead>
    <tbody className='table-group-divider'>
    {
        props.data.map((item, index) => (
            <TableRowItem
            key={item.id}
            deleteContact={props.deleteContact}
            contact={item}
            index = {index + 1}

            />
        ))
    }
    </tbody>
  </table>
  );
}

export default TableView;