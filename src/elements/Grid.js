import React from "react";
import styled from "styled-components";

const Grid = (props) =>{

    const { children, is_flex, width, padding, margin, bg, center, _onClick } = props;

    const styles = {
        is_flex:is_flex,
        width:width,
        padding:padding,
        margin:margin,
        bg:bg,
        center:center,
    }

    return(
        <>
            <GridBox _onClick={_onClick} {...styles}>{children}</GridBox>
        </>
    )
}

Grid.defaultProps ={
  children: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center:false,
  _onClick:()=>{},
}

const GridBox = styled.div`
    width : ${(props) => props.width};
    height : 100%;
    ${(props) => (props.padding ? `padding: ${props.padding};`: "")}
    ${(props) => (props.margin ? `margin:${props.margin};`:"")}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
    ${(props) =>
        props.is_flex
        ? `display:flex; align-items:center; justify-content: space-between; `
        : ""}
    ${(props) => props.center ? 'text-align:center' : ""}
`


export default Grid;