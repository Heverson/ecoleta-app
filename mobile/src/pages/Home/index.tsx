import React, {useEffect, useState} from 'react';
import { View, Image, Text, ImageBackground, Alert } from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles';
import axios from 'axios';


interface IBGEUFResponse{
  sigla: string;
}

interface IBGECityResponse{
  nome: string;
}

interface SelectLocation{
    label: string;
    value: string;
}

const Home: React.FC = () => {

  const [ufs, setUfs]  = useState<SelectLocation[]>([]);
  const [cities, setCities]  = useState<SelectLocation[]>([]);
  const [selectedUf, setSelectedUf]  = useState('0');
  const [selectedCity, setSelectedCity]  = useState('0');
  const placeholder = {
    value: null,
    color: '#9EA0A4',
  };
  const pickerStyle = {
    inputIOS: styles.select,
    inputAndroid: styles.select,
    placeholder: styles.select,
    iconContainer: {
      top: 20,
      right: 15,
    }
  }
  const navigation = useNavigation();

  function handleNavigateToPoints(){
    if(selectedUf === '0' || selectedCity === '0'){
      Alert.alert('Selecione o Estado e a Cidade',  'Precisamos saber aonde você quer procurar locais de coleta!');
      return;
    }
    navigation.navigate('Points', {uf: selectedUf, city: selectedCity});
  } 

  useEffect(() =>{
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        const ufInitials = response.data.map(uf => ({
          label: uf.sigla,
          value: uf.sigla,
        }));
        setUfs(ufInitials);
      })
  },[]);

  useEffect(() =>{
    if(selectedUf === '0' ){
      return ;
    }

    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => ({
          label: city.nome,
          value: city.nome,
        }));
        setCities(cityNames);
      });
  },[selectedUf]);


  return (
    <ImageBackground 
      source={require('../../assets/home-background.png')} 
      style={styles.container}
      imageStyle={{ width:274, height:368}}
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')}></Image>
        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
      </View>

      <View style={styles.footer}>
      {selectedUf !== '0' && (
          <RNPickerSelect
              placeholder={placeholder, {label: 'Selecione a Cidade'}}
              onValueChange={setSelectedCity}
              items={cities}
              style={pickerStyle}
              Icon={() => {
                return <Icon name="chevron-down" size={24} color="black" />
              }}
          />
        )}
        <RNPickerSelect
            placeholder={placeholder, {label: 'Selecione um Estado'}}
            onValueChange={setSelectedUf}
            style={pickerStyle}
            items={ufs}
            Icon={() => {
              return <Icon name="chevron-down" size={24} color="black" />
            }}
        />
        <RectButton style={styles.button} onPress={handleNavigateToPoints}>
          <View style={styles.buttonIcon}>
            <Text><Icon name="arrow-right" color="#FFFFFF" size={24} /></Text>
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
}

export default Home;