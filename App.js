
import { StyleSheet, View,Text} from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
  },
});


export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}
