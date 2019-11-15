import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { BlogProvider } from './src/context/BlogContext'
import IndexScreen from './src/screens/IndexScreen';

const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    initialRouteName : 'Index',
    defaultNavigationOptions : {
      title : 'Simple app'
    }
  });


const App = createAppContainer(AppNavigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )};
