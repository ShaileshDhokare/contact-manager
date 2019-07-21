import React, { Component } from 'react'

class Test extends Component {
   state = {
      title: '',
      body: ''
   }
   componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/posts/43')
      .then(response => response.json())
      .then(data => {
         this.setState({
            title: data.title,
            body: data.body
         });
      })
   }

   // componentWillMount(){
   //    console.log('componentWillMount');
   // }

   // componentDidUpdate(){
   //    console.log('componentDidUpdate');
   // }

   // componentWillUpdate(){
   //    console.log('componentWillUpdate');
   // }

   // componentWillReceiveProps(nextProps, newState){
   //    console.log('componentWillReceiveProps');
      
   // }

   // getSnapshotBeforeUpdate(prevProps, prevState){
   //    console.log('getSnapshotBeforeUpdate');
   //    return null;
   // }
   render() {
      return (
         <div>
            <div className="card mb-3 border border-secondary">
               <div className="card-header" onClick={this.onShowClick}>
                  <h5>{this.state.title}</h5>
               </div>
               <div className="card-body">
                  <p>{this.state.body}</p>
               </div>
            </div>
         </div>
      )
   }
}

export default Test;