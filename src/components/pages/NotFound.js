import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
   return (
      <div>
         <h1 className="heading-4 text-danger">404 Page Not Found</h1>
         <p>Your Requested Page is not found.</p>
         <Link className="btn btn-outline-secondary rounded-pill" role="button" to="/">
            <i className="fa fa-home mr-1"></i>
               Go To Home
         </Link>
      </div>
   )
}
