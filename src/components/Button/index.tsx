import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native'; 

// import { RectButtonProps , GestureHandlerRootView} from 'react-native-gesture-handler';

import { Container, Title, Load , TypeProps } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: TypeProps;
  isLoading?: boolean;
}

export function Button({
  type='primary',
  title,
  isLoading=false,
  ...rest
}: Props){
  return( 
      <Container type={type} enabled={!isLoading} {...rest}>
        {isLoading ? <Load /> : <Title>{title}</Title>}
      </Container>
  )
}