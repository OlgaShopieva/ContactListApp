import React, { useState } from "react";

const FormNewItem = (props) => {
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [notes, setNotes] = useState('');

    const submit = () => {
        if(fullName.trim() == '' || phone.trim() == '') return;

        props.appendContact(fullName, phone, notes);
        setFullName('');
        setPhone('');
        setNotes('');
    }
    return (
    <div className="mt-3">
        <form>
            <div className="mb-3">
                <label className='form-label'>Name</label>
                <input 
                className='form-control' 
                type='text'
                value={fullName}
                onChange={(e) => {setFullName(e.target.value);}}
                />
                
            </div>

            <div className="mb-3">
                <label className='form-label'>Phone number</label>
                <input 
                className='form-control' 
                type='text'
                value={phone}
                onChange={(e) => {setPhone(e.target.value);}}
                />
            </div>

            <div className="mb-3">
                <label className='form-label'>Notes</label>
                <textarea 
                className='form-control' 
                rows={4}
                value={notes}
                onChange={(e) => {setNotes(e.target.value);}}
                />
            </div>

            <div>
                <button 
                    type='button'
                    className='btn btn-primary'
                    onClick={submit}
                >
                    New contact
                </button>
            </div>
            </form>
    </div>
);
}
export default FormNewItem;