const TableRowItem = (props) => {

    return (
        <tr onClick={() => {props.deleteContact(props.contact.id)}}>
            <th scope='row'>{props.contact.id}</th>
            <th>{props.contact.fullName}</th>
            <th>{props.contact.phone}</th>
            <th>{props.contact.notes}</th>
        </tr>
    );
}
export default TableRowItem;