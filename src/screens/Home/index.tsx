import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';
import ListItem from '../../components/ListItem'
const Home: React.FC = () => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <ListItem/>
    </View>
  );
}

export default Home;