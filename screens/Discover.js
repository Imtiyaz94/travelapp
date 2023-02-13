import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Attractions,
  Avatar,
  HeroImage,
  Hotels,
  NotFound,
  Restaurants,
} from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { ItemCardContainer, MenuContainer } from '../components';
import { FontAwesome } from '@expo/vector-icons';
import { getPlacesData } from '../api';

const Discover = () => {
  const navigation = useNavigation();
  const mapKey = process.env.MAP_KEY;
  const [type, setType] = useState('restaurants');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getPlacesData().then((data) => {
      // console.log('data', data);
      // console.log(pic, data.photo.images.thumbnail.url);
      setData(data);
      setInterval(() => {
        setLoading(false);
      }, 2000);
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
        <View
          className='w-12 h-12 rounded-md bg-gray-400 justify-center items-center '
          style={styles.shadow}
        >
          <Image
            source={Avatar}
            className='w-full h-full object-cover rounded-md'
          />
        </View>
      </View>
      <View
        className='flex flex-row items-center bg-white  mx-4 rounded-xl py-1 px-4   mt-4'
        style={styles.shadow}
      >
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
      {loading ? (
        <View className='flex-1 items-center justify-center'>
          <ActivityIndicator size='large' color='#00ff00' />
        </View>
      ) : (
        <ScrollView>
          <View className='flex flex-row items-center justify-between px-8 mt-8'>
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

          {/* list section */}
          <View>
            <View className='flex flex-row items-center justify-between px-4 mt-8'>
              <Text className='text-[#2C7379] text-[24px] font-bold '>
                Top Tips
              </Text>
              <TouchableOpacity className='flex flex-row items-center justify-center px-2 space-x-2'>
                <Text className='text-[#A0C4C7] text-[16px]'>Explore</Text>
                <FontAwesome
                  name='long-arrow-right'
                  color={`#A0C4C7`}
                  size={24}
                />
              </TouchableOpacity>
            </View>
            <View className='px-2 mt-8 items-center justify-evenly flex-row flex flex-wrap'>
              {data?.length > 0 ? (
                <>
                  {data?.map((data, i) => {
                    <ItemCardContainer
                      key={i}
                      // imageSrc={
                      //   data?.photo?.images?.thumbnail?.url
                      //     ? data?.photo?.images?.thumbnail?.url
                      //     : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fsimple-restaurant-logo-design-template-image139794464&psig=AOvVaw2KqvTS3HHTQYs31Na9SaK2&ust=1676379017154000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDmytfEkv0CFQAAAAAdAAAAABAD'
                      // }
                      imageSrc={HeroImage}
                      title={data?.name}
                      location={data?.location_string}
                    />;
                  })}
                </>
              ) : (
                <>
                  <View className='w-full h=[600px] justify-center items-center space-y-8'>
                    <Image
                      source={NotFound}
                      className='w-32 h-32 object-cover'
                    />
                    <Text className='text-[#63888b] text-[20px] font-semibold'>
                      Oops... No Data Found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;

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
