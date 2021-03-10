import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
//import types from './contacts-types'
import actions from './contacts-actions'

const items = createReducer([], {
 [actions.addContact]: (state, { payload }) => [...state, payload],
   [actions.deleteTodo]: (state, { payload }) =>state.filter(({ id }) => id !== payload)
})
/*const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload]
    case types.DELETE:
      return state.filter(({ id }) => id !== payload)

    default:
      return state
  }
}*/


const filter = createReducer('', { [actions.changeFilter]: (_ , { payload }) => payload
  
})
/*const filter = (state = '', { type, payload }) => {
  switch (type) {
    case 'contact/changeFilter':
      return payload

    default:
      return state
  }
}*/

export default combineReducers({
    items,
    filter,
});