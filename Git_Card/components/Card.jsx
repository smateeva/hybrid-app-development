import { Text, View, Image } from 'react-native';

export default function Card(props) {
  return (
    <View>
      <Image 
      source={{ uri: props.avatar_url }} style={{ width: 35, height: 35 }} />
      <View>
       <Text>{props.name}</Text>
       <Text>{props.company}</Text>
      </View>
    </View>
  );
}