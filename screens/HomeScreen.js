import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className='bg-white flex-1'>
      <View>
        <Text>Hi there...</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
