import React, { useState, useContext } from "react";
import { Button, Table } from 'react-bootstrap';
import './table.css';
import { UserLoginContext } from '../login/Log';

function Tables() {
    const  userlogin = useContext(UserLoginContext);

    const [updated, setUpdated] = useState([]);
    const [value, setValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    console.log(userlogin);

    const addItem = () => {
        if (value.trim() !== '' && userlogin) {
            if (editIndex !== null) {
                const newItems = [...updated];
                newItems[editIndex] = value;
                setUpdated(newItems);
                setValue('');
                setEditIndex(null);
            } else {
                setUpdated([...updated, value]);
                setValue('');
            }
        }
    };

    const delete1 = (index) => {
        const newItems = [...updated];
        newItems.splice(index, 1);
        setUpdated(newItems);
    };

    const edit = (item, index) => {
        setValue(item);
        setEditIndex(index);
    };

    return (
        <> 
            <form onSubmit={(e) => { e.preventDefault(); addItem(); }}>
                <label className="input_label">
                    enter the item
                    <input className="input_box"
                        type="text"
                        placeholder="Enter the item"
                        value={value}
                        onChange={(e) => setValue(e.target.value)} // Update input value
                    /> 
                    <Button type="submit">{editIndex !== null ? 'Update' : 'Add'}</Button>
                </label>
            </form> 
        
            <Table bordered>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {updated.map((item, index) => (
                        <tr key={index}>
                            <td>
                                {editIndex === index ? (
                                    <input
                                        type="text"
                                        value={value} // Input box value set to the item being edited
                                        onChange={(e) => setValue(e.target.value)}
                                    />
                                ) : (
                                    <span className="item">{item}</span>
                                )}
                            </td>
                            <td>
                                {editIndex === index ? (
                                    <Button onClick={() => addItem()}>Save</Button>
                                ) : (
                                    <>
                                        <Button  className="button" onClick={() => delete1(index)}>Remove</Button>
                                        <Button  className="button" onClick={() => edit(item, index)}>Edit</Button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default Tables;
