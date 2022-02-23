import React, { useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import Button from '../elements/Button';
import Input from '../elements/Input';
import { useDispatch } from 'react-redux';
import { emailCheck } from '../shared/common';

import { actionCreators as userActions } from '../redux/modules/user';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const login = () =>{
        if(id === "" || pwd ===""){
            return;
        }
        if(!emailCheck(id)){
            return;
        }
        dispatch(userActions.loginFB(id, pwd));
    }
    return(
        <LoginForm>
            <h2>로그인</h2>
            <Input type="text" label="아이디" _onChange={(e)=>{
                setId(e.target.value);
            }}/>
            <Input type="password" label="비밀번호" _onChange={(e)=>{
                setPwd(e.target.value);
            }}/>
            <Buttons>
                <Button buttonStyle={1} _onClick={()=>{
                    login();
                    history.push("/");
                }} contents="로그인하기"/>
                <Button buttonStyle={1} _onClick={()=>{
                    history.goBack();
                }} contents="뒤로가기"/>
            </Buttons>
        </LoginForm>
    )
}

const LoginForm = styled.section`
    width:50vw;
    max-width:400px;
    margin:20px auto;
    border:1px solid rgba(0,0,0,0.1);
    padding:40px;
    & h2{
       color:#000;
       font-size:40px; 
    }
`
const Buttons = styled.div`
    background-color:#efefef;
    border:none;
    padding:10px;
    border-radius:15px;
    display:flex;
    justify-content:space-around;
`
export default Login;