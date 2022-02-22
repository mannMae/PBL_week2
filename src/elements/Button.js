import React from "react";
import styled from 'styled-components';

const Button = (props) => {
    const {contents} = props;
    return(
        <>
            <ButtonBox>{contents}</ButtonBox>
        </>
    )
}

Button.defaultProps ={
    contents:null,
}

const ButtonBox = styled.button`
    color:#fff;
    font-size:20px;
    background-color:tomato;
    border:2px solid #fff;
    border-radius:10px;
    text-align:center;
    padding:5px;
`

export default Button;