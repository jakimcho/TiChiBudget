import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Button } from 'react-blur-admin'

class UserRegistrationForm extends React.Component{
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div>
        <form className="form-horizontal" action="/action_page.php">
          
          <div className="form-group">
            <label className="control-label col-sm-2" for="email">Email:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>
          </div>
          
          <div className="form-group">
            <label className="control-label col-sm-2" for="pwd">Password:</label>
            <div className="col-sm-10"> 
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" />
            </div>
          </div>
          
          <div className="form-group"> 
            <div className="col-sm-offset-2 col-sm-10">

            </div>
          </div>
        </form>
        
       
      </div>
    )
  }
}

export default UserRegistrationForm;