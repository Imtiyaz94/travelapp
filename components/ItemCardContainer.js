import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesome5 } from '@expo/vector-icons';

const ItemCardContainer = ({ imageSrc, title, location }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const apiCall = () => {
    const url = 'https://airbnb19.p.rapidapi.com/api/v1/getCategory';
    const headers = {
      'X-RapidAPI-Key': '9ae521b72dmsh372cbb3ef6bb160p17e9adjsne77a941ed6e4',
      'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com',
    };
    axios.get(url, { headers: headers }).then((res) => {
      console.log(res, 'res');
      setData(res);
    });
  };
  //   useEffect(() => {
  //     apiCall();
  //   }, []);
  return (
    <TouchableOpacity
      className='rounded-md border border-gray-300 space-y-2 px-2 py-2 bg-white w-[182px] my-2'
      style={styles.shadow}
    >
      <Image
        source={imageSrc}
        className='w-full h-40 rounded-md object-cover  '
      />
      <Text className='text-[#428288] text-[18px] font-bold'>
        {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
      </Text>
      <View className='flex flex-row items-center space-x-2'>
        <FontAwesome5 name='map-marker-alt' size={20} color='#83bec4' />
        <Text className='text-[#83bec4] text-[14px] font-bold'>
          {location?.length > 18 ? `${location.slice(0, 14)}..` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
