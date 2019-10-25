import styled from 'styled-components/native';
import { Image } from 'react-native';

import Button from '~/components/Button';

export const Container = styled.View`
  margin-bottom: 15px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: column;
`;

export const Imagem = styled(Image)`
  width: 100%;
  height: 160px;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Info = styled.View`
  padding: 20px;
`;

export const Date = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 10px;
`;

export const Place = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 10px;
`;

export const Organizator = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 10px;
`;

export const RegisterButton = styled(Button)`
  margin-top: 15px;
`;

export const Texto = styled.Text`
  color: #888;
  margin-left: 5px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;
