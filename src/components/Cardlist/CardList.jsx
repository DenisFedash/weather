import { CardItem } from 'components/CardItem/CardItem';
import { Item, List } from './CardList.styled';

export const CardList = ({ cities }) => {
  return (
    <List>
      {cities.map(city => (
        <Item key={city.id}>
          <CardItem city={city} />
        </Item>
      ))}
    </List>
  );
};
