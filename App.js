import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider as BlogProvider } from './src/context/BlogContext'
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';


const AppNavigator = createStackNavigator(
  {
    Index: {
      screen: IndexScreen,
      navigationOptions: null
    },
    Show: {
      screen: ShowScreen,
      navigationOptions: null
    },
    Create: CreateScreen,
    Edit: EditScreen

  },
  {
    initialRouteName : 'Index',
    defaultNavigationOptions : {
      title : 'Blog'
    }
  });


const App = createAppContainer(AppNavigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )};
