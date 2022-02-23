import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../elements/Button';
import Input from '../elements/Input';

const Signin = () =>{
    const history = useHistory();
    return(
        <SigninForm>
            <h2>회원가입</h2>
            <Input type={"text"} label={"아이디"}/>
            <Input type={"text"} label={"닉네임"}/>
            <Input type={"password"} label={"비밀번호"}/>
            <Input type={"password"} label={"비밀번호확인"}/>
            <Buttons>
                <Button buttonStyle={1} _onClick={()=>{
                    history.push("/");
                }} contents={"가입하기"}/>
                <Button buttonStyle={1} _onClick={()=>{
                    history.goback();
                }} contents={"취소하기"}/>
            </Buttons>
        </SigninForm>
    )
}

const SigninForm = styled.section`
    max-width:600px;
    margin:20px auto;
    border:1px solid rgba(0,0,0,0.1);
    padding:40px;
    & h2{
    color:#000;
    font-size:40px; 
`

const Buttons = styled.div`
    background-color:#efefef;
    border:none;
    padding:10px;
    border-radius:15px;
    display:flex;
    justify-content:space-around;
`

export default Signin;