import React from "react";
import styled from "styled-components";
import Button from "../elements/Button";
import Grid from "../elements/Grid";

const Header = () => {

    const is_login = false

    if(is_login){
        return(
            <HeaderBox>
            <Grid is_flex padding="20px 30px">
                <Title><a href="/">잉스타</a></Title>
            </Grid>
            <Grid>
                <HeaderNav>
                    <Grid>
                        <Button contents="로그아웃"/>
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
                        <Button contents="로그인"/>
                    </Grid>
                    <Grid>
                        <Button contents="회원가입"/>
                    </Grid>
                </HeaderNav>
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