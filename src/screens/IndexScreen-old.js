import React, {useContext} from 'react';
import {Text, StyleSheet, View, FlatList, Button} from 'react-native';
import BlogContext from '../context/BlogContext';
import axios from 'axios';

const IndexScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext);


  const react_get = () => {
    console.log("REACT-GET");
    const params = new URLSearchParams();
    params.append('data', 'value1');
    params.append('success', 'value2');
    console.log(params)
    axios.get('https://whiterivetjeans.localtunnel.me/api/react-get/',{
      params: params
    }).then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  const react_post = () => {
    console.log("REACT-POST");
    const params = new URLSearchParams();
    params.append('data', 'value1');
    params.append('success', 'value2');
    console.log(params)
    axios.post('https://whiterivetjeans.localtunnel.me/api/react-post/',params).then(function (response) {
      console.log(response.request._response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  return (
    <View>
      <Text> Index Screen </Text>
      <Button title="Add Post" onPress = {addBlogPost}> </Button>
      <FlatList
        data = {data}
        keyExtractor = {(dataitem) => dataitem.title}
        renderItem = {({item})=>{
          return <Text> {item.title}</Text>;
        }}
      />
    </View>
  )};

const styles = StyleSheet.create({
  textStyle : {
    fontSize : 30
  },
  textStyle2 : {
    fontSize : 20
  }
});

export default IndexScreen;
//
// <Button title="React GET" onPress = {()=> react_get()}> </Button>
// <Button title="React POST" onPress = {()=> react_post()}> </Button>
