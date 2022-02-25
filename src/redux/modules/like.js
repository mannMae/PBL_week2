import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";
import "moment";
import moment from "moment";
import { actionCreators as postActions } from "./post";

import firebase from "firebase/compat/app";


const PLUS_LIKE_CNT = "PLUS_LIKE_CNT";
const MINUS_LIKE_CNT = "MINUS_LIKE_CNT";
const LOADING = "LOADING";


const plusLikeCnt = createAction(PLUS_LIKE_CNT, (post_id, like) => ({post_id, like}));
const minusLikeCnt = createAction(MINUS_LIKE_CNT, (post_id, like) => ({post_id, like}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: {},
  is_loading: false,
};

const plusLikeCntFB = (post_id, contents) =>{
  return function(dispatch, getState, {history}){
    const likeDB = firestore.collection("like")
    const user_info = getState().user.user;

    let like = {
      post_id:post_id,
      user_id : user_info.uid,
      user_name:user_info.user_name,
      user_profile :user_info.user_profile,
      insert_dt : moment().format("YYYY-MM-DD hh:mm:ss")
    }

    likeDB.add(like).then((doc) =>{
     const postDB = firestore.collection("post");
     
     const post = getState().post.list.find(l => l.id === post_id)
    
     const increment = firebase.firestore.FieldValue.increment(1);

     like = {...like, id:doc.id};
     postDB
     .doc(post_id)
     .update({like_cnt:increment})
     .then((_post) =>{
       dispatch(plusLikeCnt(post_id, like))
     })

     if(post){
      dispatch(postActions.editPOST(post_id, {like_cnt:parseInt(post.like_cnt)+1}));
     }
    })
  }
}


const minusLikeCntFB = (post_id, contents) =>{
  return function(dispatch, getState, {history}){
    const likeDB = firestore.collection("like")
    const user_info = getState().user.user;

    let like = {
      post_id:post_id,
      user_id : user_info.uid,
      user_name:user_info.user_name,
      user_profile :user_info.user_profile,
      insert_dt : moment().format("YYYY-MM-DD hh:mm:ss")
    }

    likeDB.add(like).then((doc) =>{
     const postDB = firestore.collection("post");
     
     const post = getState().post.list.find(l => l.id === post_id)
    
     const increment = firebase.firestore.FieldValue.increment(-1);

     like = {...like, id:doc.id};
     postDB
     .doc(post_id)
     .update({like_cnt:increment})
     .then((_post) =>{
       dispatch(minusLikeCnt(post_id, like))
     })

     if(post){
      dispatch(postActions.editPOST(post_id, {like_cnt:parseInt(post.like_cnt)-1}));
     }
    })
  }
}

export default handleActions(
  {
      [PLUS_LIKE_CNT]: (state, action) => produce(state, (draft)=> {
        draft.list[action.payload.post_id].unshift(action.payload.like);
      }),
      [MINUS_LIKE_CNT]: (state, action) => produce(state, (draft)=> {
        draft.list[action.payload.post_id].unshift(action.payload.like);
      }),
    [LOADING]: (state, action) => 
      produce(state, (draft) => {
        console.log(draft)
        draft.is_loading = action.payload.is_loading;
      })
  },
  initialState
);

const actionCreators = {
  plusLikeCnt,
  plusLikeCntFB,
  minusLikeCnt,
  minusLikeCntFB,
};

export { actionCreators };