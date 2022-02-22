import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import Button from '../elements/Button';

const Login = () => {

    const history = useHistory();

    return(
        <LoginForm>
            <h2>로그인</h2>
            <Button buttonStyle={1} _onClick={()=>{
                history.push("/");
            }} contents="로그인하기"/>
            <Button buttonStyle={1} _onClick={()=>{
                history.goBack();
            }} contents="뒤로가기"/>
        </LoginForm>
    )
}

const LoginForm = styled.section`
    display:flex;

    & h2{
       color:#000;
       font-size:40px; 
    }
`

export default Login;