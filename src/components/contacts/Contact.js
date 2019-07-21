import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';

class Contact extends Component {
   state = {
      showContactInfo: false
   };
   onShowClick = (e) => {
      this.setState({
         showContactInfo: !this.state.showContactInfo
      })
   };
   onDeleteClick = (id, dispatch) => {
      try {
         axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then(res => {
            dispatch({type: 'DELETE_CONTACT', payload: id});
         })
      } catch (error) {
         dispatch({type: 'DELETE_CONTACT', payload: id});
      }
      
   };
   render() {
      const {id, name, email, phone} = this.props.contact;
      const {showContactInfo} = this.state;
      return (
         <Consumer>
            {value => {
               const {dispatch} = value;
               return(
                  <div className="card mb-3 border border-secondary">
                     <div className="card-header" onClick={this.onShowClick}>
                        <h4>{name} <i className="fa fa-chevron-down text-primary" style={{cursor: 'pointer'}}></i>
                        <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fa fa-times-circle text-danger float-right" style={{cursor: 'pointer'}}></i>
                        <Link className="text-warning float-right mx-2 mt-0" to={'/contact/edit/'+id}>
                           <i className="fa fa-pencil-square"></i>
                        </Link>
                        </h4>
                     </div>
                     {showContactInfo ? 
                     <div className="card-body">
                        <ul className="list-group">
                           <li className="list-group-item">Email: {email}</li>
                           <li className="list-group-item">Phone: {phone}</li>
                        </ul>
                     </div> : null}
                  </div>
               )
            }}
         </Consumer>
      )
   }
}
Contact.propTypes = {
   contact: PropTypes.object.isRequired
}

export default Contact;