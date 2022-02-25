import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";
import { actionCreators as postActions} from "../redux/modules/post";
import { actionCreators as likeActions } from "../redux/modules/like";


const Post = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
  const [isMine, setIsMine] =useState(false);
  const [liked, setLiked] = useState();
  const is_login = useSelector((state) => state.user.is_login)

  const likeobj = {
    "pqvs3z6WgFqAGe2iuN4k":["a@a.com", "b@b.com", "c@c.com", "d@d.com"],
    "R2lvW8rfJGYmibkll15t":["a@a.com", "b@b.com", "c@c.com", "d@d.com"],
    "pqvs3z6WgFqAGe2iuN4k":["a@a.com", "b@b.com", "c@c.com", "d@d.com"],
    "R2lvW8rfJGYmibkll15t":["a@a.com", "b@b.com", "c@c.com", "d@d.com"],
  }
  console.log(props.like_cnt)  
  useEffect(()=>{
    setIsMine(props.user_info.user_name===user?.user?.id?true : false)
  },[user])

  useEffect(()=>{
    if(props.id in likeobj){
      if(likeobj[props.id].includes(user?.user?.id)){
        setLiked(true)  
      }
    } else{
      setLiked(false)
    }  
  },[])
  
  const plusLikeCnt =() =>{
    dispatch(likeActions.plusLikeCntFB(props.id))
  }

  const minusLikeCnt =() =>{
    dispatch(likeActions.minusLikeCntFB(props.id))
  }
    return (
      <React.Fragment>
        <Grid is_flex={true} padding="10px">
          <Grid is_flex={true} width="10vw">
            <Image src={props.user_info.user_profile}></Image>
            <Text children={props.user_info.user_name}></Text>
          </Grid>
          <Grid textAlign="right">
            <Text children={props.insert_dt}/>
            {isMine ? <Button contents="수정"></Button> : null}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Grid padding="10px">
            <Text children={props.contents}/>
          </Grid>
          <Image shape="rectangle" size="500" src={props.image_url}/>
        </Grid>
        <Grid is_flex={true}>
          <Text children={`좋아요 ${props.like_cnt}개`}/>
          <Grid width="90%" textAlign="right">
            {is_login?<>{liked
            ?<Button buttonStyle={2} contents="❤" _onClick={()=>{
              setLiked(false)
              minusLikeCnt()
            }}/>
            :<Button  contents="❤" _onClick={()=>{
              setLiked(true)              
              plusLikeCnt()
            }}/>}</>
            :<Button  contents="❤"/>}
            
          </Grid>
        </Grid>
      </React.Fragment>
    );
}

Post.defaultProps = {
  user_info: {
    user_name: "JM",
    user_profile: "https://a.cdn-hotels.com/gdcs/production69/d1911/913619a9-f618-47db-b2a2-3ca277ad2226.jpg?impolicy=fcrop&w=800&h=533&q=medium",
  },
  image_url: "https://a.cdn-hotels.com/gdcs/production69/d1911/913619a9-f618-47db-b2a2-3ca277ad2226.jpg?impolicy=fcrop&w=800&h=533&q=medium",
  contents: "제주도 멋지다",
  like_cnt: 0,
  insert_dt: "2022-02-20 10:00:00",
  is_me:true,
};

export default Post;