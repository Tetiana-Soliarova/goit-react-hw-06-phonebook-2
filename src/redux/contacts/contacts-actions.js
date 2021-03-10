import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
/*import types from './contacts-types';*/




const addContact = createAction('contact/Add', data => {
    return {payload: {
        id: uuidv4(),
        name: data.name,
        number: data.number,}
    }
})
/*const addContact = (data) => ({
    type: types.ADD,
    payload: {
        id: uuidv4(),
        name: data.name,
        number: data.number,
    },
});*/

const deleteTodo=createAction('contact/Delete')
/*const deleteTodo = removeId => ({
    type: types.DELETE,
    payload: removeId
});*/


const changeFilter= createAction('contact/changeFilter')
/*const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value 
})*/

export default { addContact, deleteTodo, changeFilter};