import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <View>
      <Text></Text>
    </View>
  );
};

export default ItemCardContainer;

const styles = StyleSheet.create({});
