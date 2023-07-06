import { View,Text,TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";
import { useState } from "react";


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
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex.: 1.75" 
          keyboardType="numeric" 
        />
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="78"
          keyboardType="numeric"
          
        />

        <Button
        onPress={()=> validationIMC()}
          title={textButton} />
      </View>
      <ResultImc resultImc={imc}  messageResultImc={messageImc}/>
    </View>
  )
}