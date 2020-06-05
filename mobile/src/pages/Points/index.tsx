import React,{useEffect, useState} from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import MapView, { Marker }  from 'react-native-maps';
import {SvgUri} from 'react-native-svg';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../services/api';
import * as Location from 'expo-location';

interface Item{
  id:number;
  title: string;
  image_url: string;
}

interface Point{
  id: number;
  name: string;
  image: string;
  image_url: string;
  latitude: number;
  longitude: number;
}

interface Params{
  uf: string;
  city: string;
}

const Points: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [points, setPoints] = useState<Point[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [initialPosition, setInitialPosition]  = useState<[number, number]>([0,0]);
  const route = useRoute();
  const navigation = useNavigation();
  
  useEffect(()=>{
    api.get('items').then(response => {
      setItems(response.data);
    })
  },[]);

  useEffect(()=>{
    const routeParams = route.params as Params;
    api.get('points', {
      params: {
        uf: routeParams.uf,
        city: routeParams.city,
        items: selectedItems
      }
    }).then(response =>{
      setPoints(response.data);
    })

  },[selectedItems]);

  useEffect(()=>{
    async function loadPosition(){
      const { status } = await Location.requestPermissionsAsync();
      if(status !== 'granted'){
        Alert.alert('Ops....', 'Precisamos de sua permissão para obter a localização');
        return
      }
      const location = await Location.getCurrentPositionAsync();
      const {latitude, longitude} = location.coords;
      setInitialPosition([latitude, longitude]);
    }
    loadPosition();
  },[]);

  function handleNavigateBack(){
    navigation.goBack();
  };

  function handleNavigateToDetail(id:number){
    navigation.navigate('Detail',{point_id: id});
  }

  function handleSelectItem(id:number){
    const alreadySelected = selectedItems.findIndex(item => item === id);
    if(alreadySelected >= 0){
      const filterItems = selectedItems.filter(item => item !== id);
      setSelectedItems(filterItems);
    }else{
      setSelectedItems([...selectedItems, id]);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" color="#34cd79" size={20} />
        </TouchableOpacity>
        
        <Text style={styles.title}>Bem vindo</Text>
        <Text style={styles.description}>Encontre no mapa um ponto de coleta.</Text>
        
        <View style={styles.mapContainer}>
          {initialPosition[0] !== 0 && (
            <MapView 
            style={styles.map} 
            loadingEnabled={initialPosition[0] === 0}
            initialRegion={{
              latitude: initialPosition[0], 
              longitude: initialPosition[1], 
              latitudeDelta:0.014, 
              longitudeDelta:0.014
            }}
          >
            {points.map(point => (
              <Marker
                key={String(point.id)}
                onPress={() => handleNavigateToDetail(point.id)}
                coordinate={{
                  latitude: point.latitude, 
                  longitude: point.longitude, 
                }}
              >
                <View style={styles.mapMarkerContainer}>
                <Image style={styles.mapMarkerImage} source={{uri: point.image_url}} />
                <Text style={styles.mapMarkerTitle}>{point.name}</Text>
                </View>
              </Marker>
            ))}
          </MapView>
          )}
        </View>
      </View>
      <View style={styles.itemsContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal:20}}
        >
        {items.map(item => (
          <TouchableOpacity 
            key={String(item.id)} 
            style={[
              styles.item,
              selectedItems.includes(item.id) ? styles.selectedItem : {}
            ]} 
            onPress={() => handleSelectItem(item.id)}
            activeOpacity={0.6}
          >
            <SvgUri uri={item.image_url} width={42} height={42} />
            <Text style={styles.itemTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
        </ScrollView>
      </View>
    </>
  );
}

export default Points;