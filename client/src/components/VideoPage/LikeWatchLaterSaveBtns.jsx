import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import './LikeWatchLaterSaveBtns.css'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine } from 'react-icons/ri'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useState } from 'react'
function LikeWatchLaterSaveBtns() {
    const [SaveVideo, setSaveVideo] = useState(false);
    const [DislikeBtn, setDislikeBtn] = useState(false);
    const [LikeBtn, setLikeBtn] = useState(false);
    const [LikeCounts, setLikeCounts] = useState(1)
    const toggleSaveVideo = () => {
        console.log(SaveVideo)
        if (SaveVideo) {
            setSaveVideo(false)

        }
        else {
            setSaveVideo(true)
        }

    }
    const toggleDislikeBtn = () => {
        console.log(SaveVideo)
        if (DislikeBtn) {
            setDislikeBtn(false)

        }
        else {
            setDislikeBtn(true)
        }

    }
    const toggleLikeBtn = () => {
        console.log(SaveVideo)
        if (LikeBtn) {
            setLikeBtn(false)
            setLikeCounts(LikeCounts-1)
        }
        else {
            setLikeBtn(true)
            setLikeCounts(LikeCounts+1)
        }

    }
    return (
        <div className='btn_cont_videoPage'>
            <div className="btn_videoPage">
                <BsThreeDots />
            </div>
            <div className="btn_videoPage">
                <div className="like_videoPage">
                    {LikeBtn ?
                        <>
                            <AiFillLike size={22} className='btns_videoPage' onClick={toggleLikeBtn} />

                        </>
                        :
                        <>
                            <AiOutlineLike size={22} className='btns_videoPage' onClick={toggleLikeBtn} />

                        </>
                    }
                    <b>{LikeCounts}</b>
                </div>
                <div className="like_videoPage">
                    {DislikeBtn ?
                        <>
                            <AiFillDislike size={22} className='btns_videoPage' onClick={toggleDislikeBtn} />

                        </>
                        :
                        <>
                            <AiOutlineDislike size={22} className='btns_videoPage' onClick={toggleDislikeBtn} />

                        </>
                    }
                    <b>Dislike</b>
                </div>

                <div className="like_videoPage">
                    {SaveVideo ?
                        <>
                            <MdPlaylistAddCheck size={22} className='btns_videoPage' onClick={toggleSaveVideo} />
                            <b onClick={toggleSaveVideo}>Saved</b>
                        </>
                        :
                        <>
                            <RiPlayListAddFill size={22} className='btns_videoPage' onClick={toggleSaveVideo} />
                            <b onClick={toggleSaveVideo}>Save</b>
                        </>
                    }
                </div>
                <div className="like_videoPage">

                    <RiHeartAddFill size={22} className='btns_videoPage' />
                    <b >Thanks</b>
                </div>
                <div className="like_videoPage">

                    <RiShareForwardLine size={22} className='btns_videoPage' />
                    <b >Share</b>
                </div>


            </div>

        </div>
    )
}

export default LikeWatchLaterSaveBtns