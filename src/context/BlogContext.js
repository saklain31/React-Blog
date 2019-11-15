import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const BlogContext = React.createContext(null);

export const BlogProvider = ({children}) => {
  const [blogPosts, setBlogPosts] = useState([{title:'Blog Post #1'}]);
  const addBlogPost = () => {
    setBlogPosts([...blogPosts,{title: `Blog Post #${blogPosts.length+1}`}]);
  }
  return (
    <BlogContext.Provider value={{data: blogPosts, addBlogPost:addBlogPost}}>
      {children}
    </BlogContext.Provider>
  )};

export default BlogContext;
