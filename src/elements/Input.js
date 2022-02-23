import React from "react";
import styled from "styled-components";

const Input = (props) => {

    const {placeholder, label, type, _onChange} = props;

    const styles={
        placeholder:placeholder,
        type:type,
    }

    return(
        <>
            <InputLabel>{label}</InputLabel>
            <InputBox type={`${type}`} {...styles} onChange={_onChange}></InputBox>
        </>
    )
}

Input.defaultProps={
    placeholder:null,
    label:null,
    type:0,
    _onChange:()=>{},
}

const InputLabel = styled.label`
    font-size:20px;
    color:#000;
`

const InputBox = styled.input`
    width:100%;
    height:40px;
    margin-top:5px;
    margin-bottom:30px;
    border: 2px solid tomato;
`


export default Input;