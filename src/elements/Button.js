import React from "react";
import styled from 'styled-components';

const Button = (props) => {

    const {contents, _onClick, buttonStyle} = props;

    return(
        <>
            <ButtonBox buttonStyle={buttonStyle} onClick={_onClick} >{contents}</ButtonBox>
        </>
    )
}

Button.defaultProps ={
    contents:null,
    _onClick:() =>{},
    buttonStyle:0,
}

const ButtonBox = styled.button`
    color:#fff;
    font-size:20px;
    background-color:tomato;
    border:2px solid #fff;
    border-radius:10px;
    text-align:center;
    cursor:pointer;
    ${(props) => props.buttonStyle===0?`"";`:props.buttonStyle===1?'height:50px;':`padding:2px;`}
`

export default Button;