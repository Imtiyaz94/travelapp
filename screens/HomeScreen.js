import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { HeroImage } from '../assets';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white flex-1 relative'>
      {/* first section */}
      <View className='flex flex-row px-6 mt-8 space-x-2 items-center'>
        <View className='w-16 h-16 bg-black rounded-full justify-center items-center'>
          <Text className='text-teal-500 font-semibold text-3xl'>Go</Text>
        </View>
        <Text className='text-[#2A2B40] text-2xl font-semibold'>Travel</Text>
      </View>
      {/* second section */}
      <View className='px-6 mt-8 space-y-3'>
        <Text className='text-[#3C6072] text-[36px]'>Enjoy the trip with</Text>
        <Text className='text-[#00BCC9] text-[30px] font-bold '>
          Good Moments.
        </Text>
        <Text className='text-[#3C6072] text-base'>
          Lorem ipsum dolor amet. Impedit beatae! numquam possimus ab, itaque
          dolorum.
        </Text>
      </View>
      {/* circle button section */}
      <View className='w-[320px] h-[320px] bg-[#00BCC9] rounded-full absolute bottom-32 -right-32'></View>
      <View className='w-[320px] h-[320px] bg-[#E99265] rounded-full absolute -bottom-16 -left-28'></View>

      {/* image section */}
      <View className='flex-1 items-center justify-center '>
        <Animatable.Image
          animation='fadeIn'
          easing='ease-in-out'
          source={HeroImage}
          className='w-full h-full object-fit mt-20'
        />
        {/* go button section */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Discover')}
          className='absolute bottom-20 w-24 h-24 border-r-2 border-l-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center'
        >
          <Animatable.View
            animation='pulse'
            easing='ease-in-out'
            iterationCount='infinite'
            className='w-20 h-20 rounded-full items-center justify-center bg-[#00BCC9]'
          >
            <Text className='text-gray-200 font-semibold text-3xl'>Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
