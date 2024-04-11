import { View } from 'react-native';
import Card from './Card';

function CardList(props){
  return(
    <View>
    {props.profiles.map(
      (profile) => (
        <Card key={profile.id} {...profile}  />
      ))}
  </View>);
}
export default CardList;