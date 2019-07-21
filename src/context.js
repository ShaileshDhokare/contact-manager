import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
   switch(action.type){
      case 'DELETE_CONTACT': 
         return {
            ...state,
            contacts: state.contacts.filter( contact => {
               return contact.id !== action.payload
            })
         };
      case 'ADD_CONTACT': 
         return {
            ...state,
            contacts: [action.payload, ...state.contacts]
         };
      case 'EDIT_CONTACT': 
         return {
            ...state,
            contacts: state.contacts.map(contact => {
               if (contact.id === action.payload.id) {
                  contact.name = action.payload.name;
                  contact.email = action.payload.email;
                  contact.phone = action.payload.phone;
               }
               return contact;
            })
         };
      default: 
         return state;
   }
}

export class Provider extends Component{

   state = {
      contacts: [],
      dispatch: action => this.setState( state => reducer(state, action))
   };
   async componentDidMount(){
      // fetch('https://jsonplaceholder.typicode.com/users')
      // .then(response => response.json())
      // .then(data => {
      //    console.log(data);
      //    this.setState({
      //       contacts: data,
      //    });
      // });

      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      this.setState({
         contacts: res.data,
      });
   }
   render(){
      return(
         <Context.Provider value={this.state}>
            {this.props.children}
         </Context.Provider>
      );
   }
}

export const Consumer = Context.Consumer;