import { View,Text,TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import { useState } from "react";
import styles from './style'

export default function Form(){


  const [height,setHeight] = useState(null)
  const [weight,setWeight] = useState(null)
  const [messageImc,setMessageImc] = useState("Preencha Peso e Altura")
  const [imc,setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")


  function imcCalculator (){
    return setImc((weight/(height*height)).toFixed(2))
  }


  function validationIMC(){
    if(weight != null && height != null){
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é: ")
      setTextButton("Calcular Novamente")
      return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha Peso e Altura")
  }


  return(
    <View style={styles.boxForm}>
      <View style={styles.form}>
        <Text style={styles.formText} >Altura</Text>
        <TextInput
          style={styles.formTextInput}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex.: 1.75" 
          keyboardType="numeric" 
        />
        <Text style={styles.formText}>Peso</Text>
        <TextInput
          style={styles.formTextInput}
          onChangeText={setWeight}
          value={weight}
          placeholder="78"
          keyboardType="numeric"
          
        />

        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={()=> validationIMC()}
          >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc resultImc={imc}  messageResultImc={messageImc}/>
    </View>
  )
}