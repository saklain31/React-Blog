import React,{useContext, useState} from 'react';
import {Text, StyleSheet, TextInput, View, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const {state, editBlogPost} = useContext(Context);
  const blogPost = state.find((blogpost) => blogpost.id === id);
  console.log(blogPost.title, blogPost.content);

  return <BlogPostForm
    initialValues = {{title: blogPost.title, content: blogPost.content}}
    onSubmit = {(title, content)=> {
        editBlogPost(id,title,content,()=> navigation.pop());
      }
    }
   />
}


const styles = StyleSheet.create({});

export default EditScreen;
