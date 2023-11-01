import  React,{Component} from "react" ;
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default class Dados extends Component{
render(){
return(
<View style = {styles.fundo}>
<View style = {styles.posiçao}>
<Text style ={styles.pedido}>
Confirmação de pedido</Text>
<Image style = {styles.cartao} 
source = {require("../assets/cartao.png")}></Image>
</View>
<Text style = {styles.pedido2}
>Método de envio</Text>
<TextInput style = {styles.textInput}
placeholder = "CEP" 
placeholderTextColor = {"#B8C0B4"}></TextInput>
<TextInput style = {styles.textInput}
placeholder = "BAIRRO" 
placeholderTextColor = {"#B8C0B4"}></TextInput>
<TextInput style = {styles.textInput}
placeholder = "Endereço"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<TextInput style = {styles.textInput}
placeholder = "Número"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<TextInput style = {styles.textInput}
placeholder = "Complemento"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<TextInput style = {styles.textInput}
placeholder = "Cidade"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<TextInput style = {styles.textInput}
placeholder = "Estado"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<TextInput style = {styles.textInput}
placeholder = "Destinatário"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<TouchableOpacity style = {styles.entrar}
>
<Text style = {styles.texto}
>Ir para o pagamento</Text>
</TouchableOpacity>
</View>
)
}
}
const styles = StyleSheet.create({
fundo: {flex:1,
backgroundColor:"#3F493E"
},
cartao: {width:50,
height:50,
alignSelf:"center",
marginTop:14,
marginLeft:10
},
textInput: {borderWidth:4,
width:"70%",
height:"6%",
borderColor:"#B8C0B4",
alignSelf:"center",
borderRadius:30,
textAlign:"center",
marginBottom:20,
},
entrar: {backgroundColor:"#B8C0B4",
width:"40%",
height:"5%",
alignSelf:"center",
borderRadius:30,
},
texto: {textAlign:"center",
color:"#3F493E",
alignItems:"center",
marginTop:10
},
novaconta: {textAlign:"center",
color:"white",
fontWeight:"bold",
textDecorationLine:"underline",
marginTop:7},

posiçao: {flexDirection: "row",
alignSelf:"center"},

pedido: {color:"#B8C0B4",
fontSize:20,
marginTop:35,
fontWeight:"bold",},

pedido2: {color:"#B8C0B4",
fontSize:20,
marginTop:35,
fontWeight:"bold",
marginLeft:210,
marginBottom:10}


})