import React from 'react';
import { withRouter } from 'react-router-dom';


class CommentForm extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      title: '',
      user: this.props.user_id,
      errors: {}
    };

  }



  render(){
    return(
      <div>

      </div>
    )
  }
}

export default withRouter(CommentForm);