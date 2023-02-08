import {
  SafeAreaView,
  SafeAreaViewBase,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>Discover</Text>
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({});
