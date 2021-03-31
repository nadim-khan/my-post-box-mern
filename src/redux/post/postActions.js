
import myAxios from '../../myAxios';
import * as actions from './postTypes';
 

export const fetchAllRequests = () => (dispatch) =>{
    dispatch({type:actions.FETCH_ALL_POSTS});
    myAxios.get('/').then(response=>{
        dispatch({
            type: actions.FETCH_ALL_POSTS_SUCCESS,
            payload: response.data.response
        })
    }).catch(error=>{
        dispatch({
            type: actions.FETCH_ALL_POSTS_FAILURE,
            payload: 'Something went wrong in fetching all posts'
        })
    })
}

export const updateThisPost = (dispatch)=>{
    dispatch({type:actions.UPDATE_THIS_POST});
}
