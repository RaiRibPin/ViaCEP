import * as React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { TouchableRipple, TextInput, Text, Button, List } from 'react-native-paper'; 
export default function App() {
    let [cep, setCep] = React.useState("");
    let [render, setRender] = React.useState([]);
    
    const BuscaCep = (xcep) => {
        let url = `https://viacep.com.br/ws/${xcep}/json/`;
        console.log(url);

        fetch(url)
            .then(
                (resp) => { return resp.json() }
            ).then(
                (dados)=>{
                    console.log(dados);

                    console.log(dados.logradouro);
                    console.log(dados['logradouro']);
                    setRender(dados);
                }
            ).catch(
                (erro) => {console.log(erro)}
            )
    }

    return (
            <ScrollView style = {{ marginTop: 50, marginHorizontal:20}}>
                <View>
                    <Text style={{color:'#A7C'}}>ViaCEP</Text> 
                    <TextInput style={{backgroundColor:'#FFF'}} label={'CEP:'} mode='outlined' onChangeText={(value)=>{setCep(value)}} />
                    <Button icon={"tab-search"} onPress={()=>{BuscaCep(cep)}} 
                        mode='contained' style={{marginTop:20}}>Busca</Button>

                    <TextInput style={{backgroundColor:'#FFF'}} label={'Endereço: '} value={render.logradouro} mode='outlined' onChangeText={(value)=>{setRender(render.logradouro = value)}} />
                    <TextInput style={{backgroundColor:'#FFF'}} label={'Número: '} value={{}} mode='outlined' onChangeText={{}} />
                    <TextInput style={{backgroundColor:'#FFF'}} label={'Complemento: '} value={{}} mode='outlined' onChangeText={{}} />
                    <TextInput style={{backgroundColor:'#FFF'}} label={'Bairro: '} value={render.bairro} mode='outlined' onChangeText={(value)=>{setRender(render.bairro = value)}} />
                    <TextInput style={{backgroundColor:'#FFF'}} label={'Cidade: '} value={render.localidade} mode='outlined' onChangeText={(value)=>{setRender(render.localidade = value)}} />
                    <List.Section>
                        <List.Accordion title="Selecione o Estado:">
                            <List.Item title="Acre" />
                            <List.Item title="Alagoas" />
                            <List.Item title="Amapá" />
                            <List.Item title="Amazonas" />
                            <List.Item title="Bahia" />
                            <List.Item title="Ceará" />
                            <List.Item title="Distrito Federal" />
                            <List.Item title="Espirito Santo" />
                            <List.Item title="Goiás" />
                            <List.Item title="Maranhão" />
                            <List.Item title="Mato Grosso do Sul" />
                            <List.Item title="Mato Grosso" />
                            <List.Item title="Minas Gerais" />
                            <List.Item title="Pará" />
                            <List.Item title="Paraíba" />
                            <List.Item title="Paraná" />
                            <List.Item title="Pernambuco" />
                            <List.Item title="Piauí" />
                            <List.Item title="Rio de Janeiro" />
                            <List.Item title="Rio Grande do Norte" />
                            <List.Item title="Rio Grande do Sul" />
                            <List.Item title="Rondônia" />
                            <List.Item title="Roraima" />
                            <List.Item title="Santa Catarina" />
                            <List.Item title="São Paulo" />
                            <List.Item title="Sergipe" />
                            <List.Item title="Tocantins" />
                        </List.Accordion>
                    </List.Section>
                    <Button icon={"home-search"} onPress={()=>{BuscaCep(cep)}} 
                        mode='contained' style={{marginTop:20}}>Busca</Button>
                </View>,0
            </ScrollView>  
    );

};  