import React from 'react'
import './comment.css'
import { useState } from 'react'
function DisplayComment({ cID,commentBody, userCommented }) {
    const [Edit, setEdit] = useState(false)
    const [Delete, setDelete] = useState({display:"flex"})
    const [commentBdy, setcommentBdy] = useState(commentBody);
    const handleEdit=(ctID,ctBody)=>
    {
        setEdit(true);
        commentBody=ctBody;
    }
    const handleDelete=()=>
    {
       setDelete({display:"none"});
       console.log("inside delete")
    }
    const handleOnSubmit=(e)=>
    {
        e.preventDefault();
        setEdit(false)
    }
    return (
        <>
            {
                Edit ? (<>
                    <form  onSubmit={handleOnSubmit} action="" className="sub_form_Comment">
                        <input onChange={e => setcommentBdy(e.target.value) } type="text" placeholder='Edit comment...' className='comment_ibox' value={commentBdy}/>
                        <input type="submit" value="Change" className='add_btn_Comment' />
                    </form>
                </>) :
                    (
                        <>
                            <p style={Delete} className="comment_body">{commentBdy}</p>
                        </>
                    )
            }

            <p style={Delete} className="user_commented">-{userCommented} commented</p>
            <p style={Delete} className="EditDel_Display_comment">
                <i onClick={()=>handleEdit(cID,commentBdy)}>Edit</i>
                <i onClick={()=>handleDelete()}>Delete</i>
            </p>
        </>
    )
}

export default DisplayComment