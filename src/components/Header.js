import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from "../shared/firebase";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../elements/Button";
import Grid from "../elements/Grid";

const Header = (props) => {
    const dispatch = useDispatch();
    const history=useHistory();
    const is_login = useSelector((state) => state.user.is_login)

    if(is_login){
        return(
            <HeaderBox>
                <Grid is_flex padding="20px 30px">
                    <Title><a href="/">잉스타</a></Title>
                </Grid>
                <Grid>
                    <HeaderNav>
                    <Grid>
                            <Button _onClick={()=>{
                                dispatch(userActions.logOut({}))
                            }} contents="로그아웃"/>
                        </Grid>
                        <Grid>
                            <Button _onClick={()=>{
                                history.push("/notice");
                            }} contents="알림"/>
                        </Grid>
                    </HeaderNav>
                </Grid>
            </HeaderBox>
        )
    }

    return(
        <HeaderBox>
            <Grid is_flex padding="20px 30px">
                <Title><a href="/">잉스타</a></Title>
            </Grid>
            <Grid>
                <HeaderNav>
                    <Grid>
                        <Button _onClick={()=>{
                            history.push("/login");
                        }} contents="로그인"/>
                    </Grid>
                    <Grid>
                        <Button  _onClick={()=>{
                            history.push("/signup");
                        }} contents="회원가입"/>
                    </Grid>
                </HeaderNav>
                <button onClick={()=>{
                }}/>
            </Grid>
        </HeaderBox>
    )
}

const HeaderBox = styled.header`
    background-color:tomato;
    width:100%;
    padding:5px;
    overflow:hidden;
    display:flex;
`

const Title = styled.h1`
    & a{
        font-size:40px;
        color:#fff;
        text-decoration:none;
    }
`

const HeaderNav = styled.nav`
    display:flex;
    justify-content:center;
    margin-top:40px;
    margin-left:20vw;
`

export default Header;