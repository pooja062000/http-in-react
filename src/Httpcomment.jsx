import React from "react";
import axios from 'axios'

class Httpcomment extends React.Component {
state = {
    usercomment: []
}

componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/comments').then((result) => {

    let usercomment = result.data
    console.log('usercomment', usercomment)
    this.setState({usercomment})

    })
}
    render(){
        return(

            <>

<div className='userdata'>
<div className='post'>Posts</div>
<div className='my-profile'></div>
<div className="comment-text">Recent comments</div>
<div className="heading">Latest Comments section by users</div>

{

    this.state.usercomment.map(comment => 
     <div className='userlist' key={comment.id}>
     <div className="user-name">Name : {comment.name}</div>
     <div className="user-email">Email : {comment.email} </div>
    <div className="user-body">body : {comment.body}</div>

    </div>

    )
                        
    }

    </div>
            
    </>

    )

}

}
export default Httpcomment