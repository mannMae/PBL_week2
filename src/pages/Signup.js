import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { actionCreators as userActions } from '../redux/modules/user';
import Button from '../elements/Button';
import Input from '../elements/Input';
import { emailCheck } from '../shared/common';

const Signup = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch();

    const [userId, setUserId] = useState("");
    const [userNick, setUserNick] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [userPwdCheck, setUserPwdCheck] = useState("");

    const signup =() =>{
        if (userId === "" || userPwd === "" || userNick === ""){
            window.alert("아이디, 닉네임, 비밀번호를 모두 입력해주세요")
            return;
        }
        if(!emailCheck(userId)){
            window.alert("이메일 형식이 맞지 않습니다.")
            return;
        }
        if(userPwd !== userPwdCheck){
            window.alert("비밀번호를 다시 확인해주세요.")
        }
        dispatch(userActions.signupFB(userId, userNick, userPwd))
    }

    return(
        <SigninForm>
            <h2>회원가입</h2>
            <Input type={"text"} label={"아이디"} _onChange={(e)=>{
                setUserId(e.target.value)
            }}/>
            <Input type={"text"} label={"닉네임"} _onChange={(e)=>{
                setUserNick(e.target.value)
            }}/>
            <Input type={"password"} label={"비밀번호"} _onChange={(e)=>{
                setUserPwd(e.target.value)
            }}/>
            <Input type={"password"} label={"비밀번호확인"} _onChange={(e)=>{
                setUserPwdCheck(e.target.value)
            }}/>
            <Buttons>
                <Button buttonStyle={1} _onClick={()=>{
                    signup()
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

export default Signup;