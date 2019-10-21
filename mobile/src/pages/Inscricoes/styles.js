import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const Title = styled.Text`
  align-items: center;
  justify-content: center;
  align-self: center;

  font-size: 20px;
  color: #fff;
  font-weight: bold;
  padding: 20px;
`;
