import styled from 'styled-components/native';
import { RectButton} from 'react-native-gesture-handler'

interface ContainerProps {
  focused? :boolean;
}
export const Container = styled(RectButton)<ContainerProps>`
   justify-content:center;
   align-items:center;
   width:50px;
   height:50px;
   border-radius:25px;
   margin-bottom:25px;
   background-color: ${({focused}) => focused ? '#2253cc' : '#3763ce'}
`;
