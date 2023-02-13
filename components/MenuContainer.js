import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const MenuContainer = ({ title, type, setType, imageSrc }) => {
  return (
    <TouchableOpacity className='items-center justify-center space-y-2'>
      <View
        style={styles.shadow}
        className={`w-20 h-20  items-center justify-center  rounded-full ${
          type === title.toLowerCase() ? 'bg-teal-200' : ''
        } `}
      >
        <Image source={imageSrc} className='w-full h-full object-contain' />
      </View>
      <Text className='text-[#00BCC9] text-md font-semibold mx-2 '>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#b9dfe2',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
