import React from "react";
import styled from "styled-components";

const Header = () => {
    return(
        <HeaderBox>
            <h1><a href="/">잉스타</a></h1>
            
        </HeaderBox>
    )
}

const HeaderBox = styled.header`
    background-color:tomato;
    width:100%;
    height:10vh;
`

export default Header;