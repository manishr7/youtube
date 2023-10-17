import React from 'react'
import './comment.css'
import { useState } from 'react'
import DisplayComment from './DisplayComment';

    const list=[{
        id:"1",
        commentBody:"hello",
        userCommented:"xyz"
    },
    {
        id:"2",
        commentBody:"hiii",
        userCommented:"abc"
    }]



function Comment() {
    const [commentText, setcommentText] = useState("");
    const [commentsList, setcommentsList] = useState(list)
    const CurrentUser = 
    {
        result: {
            email: "rawat0809@gmail.com",
            name: "Manish Rawat"
        }
    };
    
    console.log(typeof(commentsList))
    const handleOnSubmit=(e)=>
    {
        e.preventDefault();
        setcommentsList(...commentsList,{
            id:"0",
            commentBody:commentText,
            userCommented:CurrentUser.result.name
        });
        
        console.log(commentText)
        console.log(commentsList)
       
    }
    
  return (
    <>
    <form onSubmit={handleOnSubmit} action="" className="sub_form_Comment">
        <input onChange={e=>setcommentText(e.target.value)} type="text" placeholder='add comment...' className='comment_ibox'/>
        <input type="submit" value="add" className='add_btn_Comment'/>
    </form>
    <div className="display_comment_container">
        {commentsList.map(m=>
            {
             return (
                <DisplayComment
                cID={m.id}
                commentBody={m.commentBody}
                userCommented={m.userCommented}
                />
                
             );
            })
            }
        
    </div>
    </>
  )
}

export default Comment