import React, {useContext} from 'react';
import {Text, StyleSheet, View, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';


const IndexScreen = ({navigation}) => {
  const {state, addBlogPost, deleteBlogPost} = useContext(BlogContext);

  return (
    <View>
      <FlatList
        data = {state}
        keyExtractor = {(dataitem) => dataitem.title}
        renderItem = {({item})=>{
          return <TouchableOpacity onPress = {() => navigation.navigate('Show',{id: item.id})} >
                  <View style={styles.row}>
                    <Text style={styles.title}> {item.title}  - {item.id}</Text>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                      <Icon style={styles.icon} name='trash'/>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
        }}
      />
    </View>
  )};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity onPress= {()=> navigation.navigate('Create')}>
        <Icon style={styles.icon} name='plus'/>
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  row : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  title : {
    fontSize : 18
  },
  icon : {
    fontSize : 24,
    paddingRight: 10
  }
});

export default IndexScreen;


// <Button title="Add Post" onPress = {addBlogPost}> </Button>
