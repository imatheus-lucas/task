import styled from 'styled-components/native';

interface ListItemProps {
  checked?:boolean;

}

export const Container = styled.View`
  width: 90%;
  height:47px;
  justify-content:space-between;
  align-items:center;
  background-color:#2a2a2a;
  flex-direction:row;
  padding:0 35px;
  border-radius:10px;
`;

export const ListText = styled.Text<ListItemProps>`
   color:${props => props.checked ? '#828282' : '#f5f5f5'}; ;
   text-decoration: ${props => props.checked ? 'line-through' : 'none'};
`;

export const Check  = styled.TouchableOpacity<ListItemProps>`
   border: 1px solid ${props => props.checked ? '#3763ce' : '#f5f5f5'};
  
   width:20px;
   height:20px;
   border-radius:25px;
`;
