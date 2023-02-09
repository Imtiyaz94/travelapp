import {
  Image,
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Attractions, Avatar, Hotels, Restaurants } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { MenuContainer } from '../components';

const Discover = () => {
  const navigation = useNavigation();
  const mapKey = process.env.MAP_KEY;
  const [type, setType] = useState('restaurants');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='flex-1 bg-white relative'>
      {/* heading section */}
      <View className='flex flex-row items-center justify-between px-8'>
        <View>
          <Text className='text-[32px] text-[#0B646B] font-bold'>Discover</Text>
          <Text className='text-[24px] text-[#527283] '>
            the beauty today...
          </Text>
        </View>
        <View className='w-12 h-12 rounded-md bg-gray-400 justify-center items-center shadow-2xl shadow-blue-300'>
          <Image
            source={Avatar}
            className='w-full h-full object-cover rounded-md'
          />
        </View>
      </View>
      <View className='flex flex-row items-center bg-white border  mx-4 rounded-xl py-1 px-4 shadow-md  mt-4'>
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: 'geometry' }}
          fetchDetails={true}
          placeholder='Search'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: { mapKey },
            language: 'en',
          }}
        />
      </View>
      {/* Menu container */}
      <ScrollView>
        <View className='flex flex-row items-center justify-center px-8 mt-8'>
          <MenuContainer
            key={'hotels'}
            title='Hotels'
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={'attractions'}
            title='Attractions'
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainer
            key={'restaurants'}
            title='Restaurants'
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({});
