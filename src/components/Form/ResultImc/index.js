import { View,Text, } from "react-native";
import styles from './style'

export default function ResultImc({resultImc,messageResultImc}){
  return(
    <View style={styles.resultView}>
      <Text style={styles.resultText} >{messageResultImc} {resultImc}</Text>
    </View>
  )
}