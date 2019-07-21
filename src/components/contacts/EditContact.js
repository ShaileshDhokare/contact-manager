import React, { Component } from 'react'
import { Consumer } from '../../context';
import axios from 'axios';
import TextInputGroup from '../layout/TextInputGroup';

class EditContact extends Component {
   state = {
      id: '',
      name: '',
      email: '',
      phone: '',
      errors: {}
   }
   
   async componentDidMount(){
      const {id} = this.props.match.params;
      
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      const contact = res.data;
      console.log(contact);
      
      this.setState({
         id: contact.id,
         name: contact.name,
         email: contact.email,
         phone: contact.phone
      });
      
   }
   onChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value.trim()
      })
   }
   onSubmit = (dispatch, e) => {
      e.preventDefault();
      const {id, name, email, phone} = this.state;
      if (name === '') {
         this.setState({
            errors: {name: 'Please enter valid name.'}
         });
         return;
      }
      if (email === '') {
         this.setState({
            errors: {email: 'Please enter valid email.'}
         });
         return;
      }
      if (phone === '') {
         this.setState({
            errors: {phone: 'Please enter valid phone.'}
         });
         return;
      }
      
      const newContact = {
         id,
         name,
         email,
         phone
      }
      axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, newContact)
      .then(res => {
         dispatch({type: 'EDIT_CONTACT', payload: res.data});
      })

      this.setState({
         id: '',
         name: '',
         email: '',
         phone: '',
         errors: {}
      });
      this.props.history.push('/');
   }
   render() {
      const {name, email, phone, errors} = this.state;
      return(
         <Consumer>
            {value => {
               const {dispatch} = value;
               return (
                  <div className="card mb-4 border border-primary">
                     <div className="card-header bg-primary text-light">
                        <h4>Edit Contact</h4>
                     </div>
                     <div className="card-body p-2">
                        <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                           <TextInputGroup className="form-control" name="name" placeholder="Enter Name..." value={name} onChange={this.onChange} label="Name" error={errors.name}/>

                           <TextInputGroup type="email" className="form-control" name="email" placeholder="Enter Email..." value={email} onChange={this.onChange}
                           label="Email" error={errors.email}/>

                           <TextInputGroup className="form-control" name="phone" placeholder="Enter Phone..." value={phone} onChange={this.onChange} label="Phone" error={errors.phone}/>

                           <input type="submit" value="Update Contact" className="btn btn-outline-primary rounded-pill" />
                        </form>
                     </div>
                     
                  </div>
               )
            }}
         </Consumer>
      )
      
   }
}
export default EditContact;