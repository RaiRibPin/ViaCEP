import * as React from 'react';
import { Image, ScrollView } from 'react-native';
import { Text, TextInput, Button, List, Divider } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import style from './Style';

export default function App() {
    let [cep, setCep] = React.useState("");
    let [render, setRender] = React.useState([]);
    let [nome, setNome] = React.useState("");
    let [email, setEmail] = React.useState("");
    let [telefone, setTelefone] = React.useState("");
    let [numero, setNumero] = React.useState("");
    let [complemento, setComplemento] = React.useState("");

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
                    console.log('Nome completo : ' + nome);
                    console.log('Email: ' + email);
                    console.log('Telefone: ' + telefone);
                    console.log('Número da casa: ' + numero);
                    console.log('Complemento: ' + complemento);
                }
            ).catch((erro) => {
                    console.log(erro);
                });
    }
    
    const Limpar = () => {
        setNome("");
        setEmail("");
        setTelefone("");
        setCep("");
        setRender([])
        setNumero("");
        setComplemento("");
    };

    return (
            <SafeAreaProvider>
                <SafeAreaView style={{backgroundColor:'#F6F7F6'}}>
                <ScrollView style = {{ marginVertical: 50, paddingHorizontal: 40, }}>
                        <Image style={style.image} source={require("./assets/location.png")} />
                        <Text style={style.title} variant='displaySmall'>Localizando Você!</Text>
                        <Text style={style.subtitle} variant='headlineSmall'>Preencha com seus dados:</Text>
                        <Divider style={{marginBottom: 20}} />
                        <TextInput style={style.textInput} activeOutlineColor='#0A7' outlineColor='#0A7' outlineStyle={{borderRadius:10, borderWidth:1.5}} textColor='#0A8' value={nome} placeholderTextColor={'#0A8'} placeholder='Digite seu nome...' label={'Nome:'} right={<TextInput.Icon icon="lead-pencil" color={'#FC9797'} />} mode='outlined' onChangeText={nome=>setNome(nome)} />
                        <TextInput keyboardType='email-address' style={style.textInput} activeOutlineColor='#0A7' outlineColor='#0A7' outlineStyle={{borderRadius:10, borderWidth:1.5}} textColor='#0A8' value={email} placeholderTextColor={'#0A8'} placeholder='Digite seu email...' label={'Email:'} right={<TextInput.Icon icon="lead-pencil" color={'#FC9797'} />} mode='outlined' onChangeText={email=>setEmail(email)} />
                        <TextInput keyboardType='phone-pad' style={style.textInput} activeOutlineColor='#0A7' outlineColor='#0A7' outlineStyle={{borderRadius:10, borderWidth:1.5}} textColor='#0A8' value={telefone} placeholderTextColor={'#0A8'} placeholder='Digite seu telefone...' label={'Telefone:'} right={<TextInput.Icon icon="lead-pencil" color={'#FC9797'} />} mode='outlined' onChangeText={telefone=>setTelefone(telefone)} />
                        <TextInput keyboardType='numeric' style={style.textInput} activeOutlineColor='#0A7' outlineColor='#0A7' outlineStyle={{borderRadius:10, borderWidth:1.5}} textColor='#0A8' value={cep} placeholderTextColor={'#0A8'} placeholder='Digite seu CEP...' label={'CEP:'} mode='outlined' right={<TextInput.Icon icon="lead-pencil" color={'#FC9797'} />} onChangeText={(cep)=>{setCep(cep)}} />
                        <Button style={style.button} icon={"home-search"} textColor='#053' buttonColor='#90FEB8' rippleColor={'#62DE8F'} onPress={()=>{BuscaCep(cep)}} mode='contained-tonal'>Buscar CEP</Button>

                        <TextInput style={style.textInput} activeOutlineColor='#0A7' outlineColor='#0A7' outlineStyle={{borderRadius:10, borderWidth:1.5}} textColor='#0A8'  label={'Rua: '} value={render.logradouro} mode='outlined' onChangeText={(value)=>{setRender(render.logradouro = value)}} />
                        <TextInput keyboardType='numeric' style={style.textInput} activeOutlineColor='#0A7' outlineColor='#0A7' outlineStyle={{borderRadius:10, borderWidth:1.5}} textColor='#0A8'  label={'Número: '} value={numero} mode='outlined' right={<TextInput.Icon icon="lead-pencil" color={'#FC9797'} />} onChangeText={numero=>setNumero(numero)} />
                        <TextInput style={style.textInput} activeOutlineColor='#0A7' outlineColor='#0A7' outlineStyle={{borderRadius:10, borderWidth:1.5}} textColor='#0A8'  label={'Complemento: '} value={complemento} right={<TextInput.Icon icon="lead-pencil" color={'#FC9797'} />} mode='outlined' onChangeText={complemento=>setComplemento(complemento)} />
                        <TextInput style={style.textInput} activeOutlineColor='#0A7' outlineColor='#0A7' outlineStyle={{borderRadius:10, borderWidth:1.5}} textColor='#0A8'  label={'Bairro: '} value={render.bairro} mode='outlined' onChangeText={(value)=>{setRender(render.bairro = value)}} />
                        <TextInput style={style.textInput} activeOutlineColor='#0A7' outlineColor='#0A7' outlineStyle={{borderRadius:10, borderWidth:1.5}} textColor='#0A8'  label={'Cidade: '} value={render.localidade} mode='outlined' onChangeText={(value)=>{setRender(render.localidade = value)}} />
                        <List.Section>
                            <List.Accordion style={style.accordion} titleStyle={style.accordionTitle} rippleColor={'#BCE7D1'} title={ selectedValue == null? "Selecione o Estado":selectedValue } expanded={expanded} onPress={handleAccordionPress}>
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

                        <Button style={style.button} icon={"trash-can"} textColor='#770711' buttonColor='#FA6B79' rippleColor={'#EF4554'} onPress={()=>{Limpar()}} mode='contained-tonal'>Limpar Informações</Button>
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
    );

};  