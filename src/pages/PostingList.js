import React from "react";
import { useHistory } from "react-router-dom";
import Post from "../components/Post";
import Grid from "../elements/Grid";

const PostingList = () => {
    const user_info = {uid:"JM"}
    const history = useHistory();
    return(
        <>
            <Grid bg={"#EFF6FF"} padding={"20px 0px"}>
                <Grid bg="#fff">
                    <Post/>
                    <Post/>
                    <Post/>
                </Grid>
            </Grid>
        </>
    )
}

export default PostingList;