import React, {useReducer} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import createDataContext from './createDataContext';


  const blogReducer = (state,action) => {
    if(action.type==='add_blogpost'){
      return [...state,{
        id: Math.floor(Math.random()*99999),
        title: action.payload.title,
        content: action.payload.content
      }];
    }
    else if(action.type==='delete_blogpost'){
      return state.filter((blogpost) => blogpost.id !== action.payload);
    }
    else if(action.type==='edit_blogpost'){
      return state.map((blogpost) => {
        if(blogpost.id === action.payload.id){
          return action.payload;
        }
        else {
          return blogpost;
        }
      })
    }
    else{
      return state;
    }
  }


  const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
      dispatch({type:'add_blogpost', payload:{title, content}});
      callback();
    }
  }

  const deleteBlogPost = (dispatch) => {
    return (id) => {
      dispatch({type:'delete_blogpost', payload:id});
    }
  }

  const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
      dispatch({type:'edit_blogpost', payload:{id, title, content}});
      callback();
    }
  }


export const {Context, Provider} = createDataContext(blogReducer,
  { addBlogPost, deleteBlogPost,editBlogPost},
  [{title:"TEST POST", content:"TEST CONTENT", id:21987913}]);
