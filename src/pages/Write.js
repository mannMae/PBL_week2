import React from "react";
import styled from "styled-components";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Input from "../elements/Input";
import Text from "../elements/Text";

const Write = () =>{
    const preview = null;
    return(
        <WriteForm>
            <Grid padding={"20px"}>
                <h2>게시글 작성</h2>
                <Grid>
                    <WriteBox>
                        <Grid padding={"16px"}>
                            <Input type={"file"} children={"이미지 선택"}/>
                            <Button contents="업로드하기"/>
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
                                <Input type={"textarea"} children={"게시글 내용"} placeholder={"게시글 작성"}/>
                                <Button contents={"게시글 작성"}/>
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