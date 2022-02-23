import React, {useEffect} from "react";
import _ from "lodash";
import Spinnr from "../elements/Spinner";

const Scroll = () =>{

    const {children, callNext, is_next, loading} = props;

    const _handleScroll = _.throttle(() =>{
        
        if(loading){
            return;
        }
        const {innerHeight} = window;
        const {scrollHeight} = document.body;
        const scrollTop = (document.document && document.documentElement.scrollTop)
    })
    return (
        <></>
    )
}

Scroll.defaultProps = {
    children:null,
    callNext:() =>{},
    is_next:false,
    loading:false,
}

export default Scroll;