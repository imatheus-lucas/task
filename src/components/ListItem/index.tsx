import React,{useState} from 'react';


import { Container, ListText,Check } from './styles';

interface ListItemProps {
  checked?:boolean;
}

const ListItem: React.FC<ListItemProps> = () => {
   const [isCheck, setIsChecked] = useState<boolean>(false);
  
  return (
    <Container>
       <Check onPress={() =>setIsChecked(!isCheck)} checked={isCheck}/>
       <ListText checked={isCheck}>Build a todo app with team menbres</ListText>
    </Container>
  );
}

export default ListItem;