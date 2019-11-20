import React, {useContext} from 'react';
import {Text, StyleSheet, View, FlatList, Button, TouchableOpacity,AsyncStorage} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);

  await AsyncStorage.getItem('key').then(val){
    console.log(val);
  };
  // console.log(key);

  const blogPost = state.find((blogpost) => blogpost.id === navigation.getParam('id'));
  console.log(blogPost);

  return <View>
      <Text style={styles.textStyle}> Title: {blogPost.title}</Text>
      <Text style={styles.textStyle}> {blogPost.content} </Text>
    </View>
}

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity onPress = {()=> navigation.navigate('Edit',{id: navigation.getParam('id')})}>
        <Icon style={styles.icon} name='edit'/>
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18
  },
  icon : {
    fontSize : 24,
    paddingRight: 10
  }

});

export default ShowScreen;
