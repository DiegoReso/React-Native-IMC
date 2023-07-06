
import { StyleSheet, View,Text} from 'react-native';
import Title from './src/components/Title';


export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
