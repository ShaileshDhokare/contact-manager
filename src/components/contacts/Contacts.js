import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

class Contacts extends Component {
   render() {
      return (
         <Consumer>
            {value => {
               const {contacts} = value;
               return(
                  <React.Fragment>
                     <header className="bg-info text-light p-1 rounded-pill mb-3">
                        <h1 className="text-center">Contact List</h1>
                     </header>
                     {contacts.map((contact) => 
                        <Contact key={contact.id} contact={contact} /> 
                     )}
                  </React.Fragment>
               )
            }}
         </Consumer>
      )
   }
}

export default Contacts;