import React from "react";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Image from "../elements/Image";
import Text from "../elements/Text";


const Post = (props) => {

  const {user_info, image_url, contents, like_cnt, insert_dt, is_me} = props;

  const liked = true;

    return (
      <React.Fragment>
        <Grid is_flex={true} padding="10px">
          <Grid is_flex={true} width="10vw">
            <Image src={user_info.user_profile}></Image>
            <Text children={user_info.user_name}></Text>
          </Grid>
          <Grid textAlign="right">
            <Text children={insert_dt}/>
            <Button contents="수정"></Button>
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Grid padding="10px">
            <Text children={contents}/>
          </Grid>
          <Image shape="rectangle" size="500" src={image_url}/>
        </Grid>
        <Grid is_flex={true}>
          <Text children={`좋아요 ${like_cnt}개`}/>
          {liked
          ?<Button buttonStyle={2} contents="❤"/>
          :<Button  contents="❤"/>}
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