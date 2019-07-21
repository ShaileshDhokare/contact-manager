import React, { Component } from 'react'
import { Consumer } from '../../context';
import axios from 'axios';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
   state = {
      name: '',
      email: '',
      phone: '',
      errors: {}
   }
   
   onChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value.trim()
      })
   }
   onSubmit = (dispatch, e) => {
      e.preventDefault();
      const {name, email, phone} = this.state;
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
         name,
         email,
         phone
      }
      axios.post('https://jsonplaceholder.typicode.com/users', newContact)
      .then(res => {
         dispatch({type: 'ADD_CONTACT', payload: res.data});
      })

      this.setState({
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
                        <h4>Add Contact</h4>
                     </div>
                     <div className="card-body p-2">
                        <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                           <TextInputGroup className="form-control" name="name" placeholder="Enter Name..." value={name} onChange={this.onChange} label="Name" error={errors.name}/>

                           <TextInputGroup type="email" className="form-control" name="email" placeholder="Enter Email..." value={email} onChange={this.onChange}
                           label="Email" error={errors.email}/>

                           <TextInputGroup className="form-control" name="phone" placeholder="Enter Phone..." value={phone} onChange={this.onChange} label="Phone" error={errors.phone}/>

                           <input type="submit" value="Add Contact" className="btn btn-block btn-primary" />
                        </form>
                     </div>
                     
                  </div>
               )
            }}
         </Consumer>
      )
      
   }
}
export default AddContact;