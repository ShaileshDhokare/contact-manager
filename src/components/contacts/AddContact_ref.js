import React, { Component } from 'react'

class AddContact extends Component {
   constructor(props){
      super(props);
      this.nameInput = React.createRef();
      this.emailInput = React.createRef();
      this.phoneInput = React.createRef();
   }
   static defaultProps = {
      name: 'Shailesh Dhokare',
      email: 'sd@gmail.com',
      phone: 8551913351
   }
   onSubmit = (dispatch, e) => {
      e.preventDefault();
      const contact = {
         name: this.nameInput.current.value,
         email: this.emailInput.current.value,
         phone: this.phoneInput.current.value
      }
      console.log(contact);
   }
   render() {
      const {name, email, phone} = this.props;
      return (
         <div className="card mb-4 border border-primary">
            <div className="card-header bg-primary text-light">
               <h4>Add Contact</h4>
            </div>
            <div className="card-body p-2">
               <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                     <label htmlFor="name">Name:</label>
                     <input type="text" className="form-control" name="name" placeholder="Enter Name..." defaultValue={name} ref={this.nameInput}/>
                  </div>
                  <div className="form-group">
                     <label htmlFor="email">Email:</label>
                     <input type="email" className="form-control" name="email" placeholder="Enter Email..." defaultValue={email} ref={this.emailInput} />
                  </div>
                  <div className="form-group">
                     <label htmlFor="phone">Phone:</label>
                     <input type="number" className="form-control" name="phone" placeholder="Enter Phone..." defaultValue={phone} ref={this.phoneInput} />
                  </div>
                  <input type="submit" value="Add Contact" className="btn btn-block btn-primary" />
               </form>
            </div>
            
         </div>
      )      
   }
}
export default AddContact;