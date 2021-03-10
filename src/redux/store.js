import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactReducer from './contacts/contacts-reducer'
import { persistStore, persistReducer , FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/*import {  combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';*/

const persistConfig = {
    key: 'keyStorage',
    storage,
    blacklist: ["filter"]
};
const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER]
        }
    }), logger
]

/*const rootReducer = combineReducers({
    contacts: persistReducer(persistConfig, contactReducer ),
    
});
*/
/*const persistedReducer = persistReducer(persistConfig, rootReducer )*/

/*const initialState = combineReducers({
    
    contacts: contactReducer,
   
})*/

//const store = createStore(initialState, composeWithDevTools());
const store = configureStore({
    reducer: {
     contacts:   persistReducer(persistConfig, contactReducer)
    },
    middleware,
});

const persistor = persistStore(store)
export default {store, persistor };