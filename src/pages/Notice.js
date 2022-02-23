import React from "react";
import styled from "styled-components";
import Image from "../elements/Image";
import Text from "../elements/Text";

const Notice = () =>{
    const nickname = "JM"
    return (
        <NoticeBox>
            <NoticeCard>
                <Image shape={"rectangle"} size={`150`}/>
                <div>
                    <Text bold={"bold"} children={nickname}/>
                    <Text children={"님이 게시글에 좋아요를 남겼습니다! :)"}/>
                </div>
            </NoticeCard>
            <NoticeCard>
                <Image shape={"rectangle"} size={`150`}/>
                <div>
                    <Text bold={"bold"} children={nickname}/>
                    <Text children={"님이 게시글에 좋아요를 남겼습니다! :)"}/>
                </div>
            </NoticeCard>
            <NoticeCard>
                <Image shape={"rectangle"} size={`150`}/>
                <div>
                    <Text bold={"bold"} children={nickname}/>
                    <Text children={"님이 게시글에 좋아요를 남겼습니다! :)"}/>
                </div>
            </NoticeCard>
            <NoticeCard>
                <Image shape={"rectangle"} size={`150`}/>
                <div>
                    <Text bold={"bold"} children={nickname}/>
                    <Text children={"님이 게시글에 좋아요를 남겼습니다! :)"}/>
                </div>
            </NoticeCard>
        </NoticeBox>
    )
}

const NoticeBox = styled.section`
    max-width:600px;
    max-height:700px;
    overflow-y:auto;
    margin:20px auto;
    border:1px solid rgba(0,0,0,0.1);
    padding:40px;
    & h2{
    color:#000;
    font-size:40px;
    `

const NoticeCard = styled.div`
    background-color:tomato;
    width:90%;
    height:20vh;
    margin:auto;
    border-radius:20px;
    display:flex;
    justify-content:space-around;
    padding:3vw;
    margin-bottom:15px;
    align-items:center;
`

export default Notice;