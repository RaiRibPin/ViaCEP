import * as React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { TouchableRipple, TextInput, Text, Button, List } from 'react-native-paper'; 
export default function App() {
    let [cep, setCep] = React.useState("");
    let [render, setRender] = React.useState([]);

    const [selectedValue, setSelectedValue] = React.useState(null); 
    const [expanded, setExpanded] = React.useState(false);
    const handleAccordionPress = () => setExpanded(!expanded);
    const handleItemPress = (value) => {
        setSelectedValue(value);
        setExpanded(false);
    };
    
    const BuscaCep = (xcep) => {
        let url = `https://viacep.com.br/ws/${xcep}/json/`;
        console.log(url);

        fetch(url)
            .then(
                (resp) => { return resp.json() }
            ).then(
                (dados)=>{
                    console.log(dados);
                    setRender(dados);
                    setSelectedValue(render.uf);

                    // console.log(dados.logradouro);
                    // console.log(dados['logradouro']);
                    
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
                        <List.Accordion title={ selectedValue == null? "Selecione o Estado":selectedValue } expanded={expanded} onPress={handleAccordionPress}>
                            <List.Item title="Acre" onPress={() => handleItemPress("AC")} />
                            <List.Item title="Alagoas"  onPress={() => handleItemPress("AL")} />
                            <List.Item title="Amapá" onPress={() => handleItemPress("AP")} />
                            <List.Item title="Amazonas" onPress={() => handleItemPress("AM")} />
                            <List.Item title="Bahia" onPress={() => handleItemPress("BA")} />
                            <List.Item title="Ceará" onPress={() => handleItemPress("CE")} />
                            <List.Item title="Distrito Federal" onPress={() => handleItemPress("DF")} />
                            <List.Item title="Espirito Santo" onPress={() => handleItemPress("ES")} />
                            <List.Item title="Goiás" onPress={() => handleItemPress("GO")} />
                            <List.Item title="Maranhão" onPress={() => handleItemPress("MA")} />
                            <List.Item title="Mato Grosso do Sul" onPress={() => handleItemPress("MS")} />
                            <List.Item title="Mato Grosso" onPress={() => handleItemPress("MT")} />
                            <List.Item title="Minas Gerais" onPress={() => handleItemPress("MG")} />
                            <List.Item title="Pará" onPress={() => handleItemPress("PA")} />
                            <List.Item title="Paraíba" onPress={() => handleItemPress("PB")} />
                            <List.Item title="Paraná" onPress={() => handleItemPress("PR")} />
                            <List.Item title="Pernambuco" onPress={() => handleItemPress("PE")} />
                            <List.Item title="Piauí" onPress={() => handleItemPress("PI")} />
                            <List.Item title="Rio de Janeiro" onPress={() => handleItemPress("RJ")} />
                            <List.Item title="Rio Grande do Norte" onPress={() => handleItemPress("RN")} />
                            <List.Item title="Rio Grande do Sul" onPress={() => handleItemPress("RS")} />
                            <List.Item title="Rondônia" onPress={() => handleItemPress("RO")} />
                            <List.Item title="Roraima" onPress={() => handleItemPress("RR")} />
                            <List.Item title="Santa Catarina" onPress={() => handleItemPress("SC")} />
                            <List.Item title="São Paulo" onPress={() => handleItemPress("SP")} />
                            <List.Item title="Sergipe" onPress={() => handleItemPress("SE")} />
                            <List.Item title="Tocantins" onPress={() => handleItemPress("TO")} />
                        </List.Accordion>
                    </List.Section>
                    <Text>Valor selecionado: {selectedValue}</Text>
                    <Button icon={"home-search"} onPress={()=>{BuscaCep(cep)}} 
                        mode='contained' style={{marginTop:20}}>Busca</Button>
                </View>
            </ScrollView>  
    );

};  