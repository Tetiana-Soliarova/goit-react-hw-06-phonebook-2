import { Component } from 'react';
import ContactForm from './component/ContactForm/Form';
import ContactList from './component/ContactList/ContactList';
import Header from './component/Header/Header'

class App extends Component {
 
  render() {
  
    return (
      <div >
        <Header />

        <div>
          <ContactForm/>
          <ContactList/> 
        </div>
      </div>
    )
  }
}

export default App;