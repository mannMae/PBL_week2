import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Input from "../elements/Input";
import Text from "../elements/Text";
import Upload from "../shared/Upload";

import { actionCreators as postActions } from "../redux/modules/post";

const Write = (props) =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const is_login = useSelector((state) => state.user.is_login);
    const preview = useSelector((state) => state.image.preview);

    const [contents, setContents] = useState("");

    const addPost = () =>{
        dispatch(postActions.addPostFB(contents))
    }

    const changeContents = (e) => {
        setContents(e.target.value);
    }

    if(!is_login){
        return(
            <Grid>
                <Text>로그인이 필요합니다</Text>
                <Button _onClick={()=>{
                    history.replace("/login");
                }} contents={"로그인하러 가기"}></Button>
            </Grid>
        )
    }
    return(
        <WriteForm>
            <Grid padding={"20px"}>
                <h2>게시글 작성</h2>
                <Grid>
                    <WriteBox>
                        <Grid padding={"16px"}>
                            <Upload/>
                            <Grid>
                            
                                <Grid padding={"16px"}>
                                    <Text margin="0px" size="24px" bold>
                                    미리보기
                                    </Text>
                                </Grid>

                                <Image
                                    size={400}
                                    shape="rectangle"
                                    src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZF2lMsPvHTMS3QXlEkcseZp4K5V2VbigxXqPqIHTckG421zvSxMxbzTUoCKYH41BVw-E&usqp=CAU"} />
                            </Grid>
                                <Input type={"textarea"} children={"게시글 내용"} placeholder={"게시글 작성"} _onChange={changeContents}/>
                                <Button contents={"게시글 작성"} _onClick={() =>{
                                    addPost()
                                }}/>
                            </Grid>
                        </WriteBox>
                    </Grid>
                </Grid>
            </WriteForm>
    )
}

const WriteForm = styled.section`
    max-width:600px;
    margin:20px auto;
    border:1px solid rgba(0,0,0,0.1);
    padding:40px;
    & h2{
    color:#000;
    font-size:40px; 
`

const WriteBox = styled.div`

`

export default Write;