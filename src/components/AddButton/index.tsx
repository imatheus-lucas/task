import React from 'react';

import Feather from 'react-native-vector-icons/Feather'
import { Container } from './styles';

interface AddButtonProps{
  focused? : boolean;
  onPress: () => void;
}
const AddButton: React.FC<AddButtonProps> = ({focused, onPress}) => {
 
  return (
    
    <Container onPress={onPress}  focused={focused}>
       <Feather name="plus" size={27} color={focused ? '#ddd' : '#f5f5f5'}/>
    </Container>

  );
}

export default AddButton;