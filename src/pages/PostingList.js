import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Post from "../components/Post";
import Grid from "../elements/Grid";

import { actionCreators as postActions } from "../redux/modules/post";

const PostingList = () => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list)
    const user_info = useSelector((state) => state.user.user)

    useEffect(() =>{
        if(post_list.length < 2){
            dispatch(postActions.getPostFB());
        }
    })

    return(
        <>
            <Grid bg={"#EFF6FF"} padding={"20px 0px"}>
                {post_list.map((p) =>{
                    if(p.user_info.user_id === user_info?.uid){
                        return(
                            <Grid bg="#fff" key={p.id} _onClick={() =>{
                            }}>
                                <Post key={p.id} {...p} is_me/>
                            </Grid>
                        )
                    }else{
                        return(
                            <Grid bg="#fff" key={p.id} _onClick={console.log("hi")}>
                                <Post key={p.id} {...p} is_me/>
                            </Grid>
                        )
                    }
                })}
            </Grid>
        </>
    )
}

export default PostingList;