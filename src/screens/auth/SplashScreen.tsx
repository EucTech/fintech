import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from 'react-native'
import Animated, { FadeInRight } from 'react-native-reanimated'
import { Image } from 'expo-image'
import { NavigationProp, useNavigation } from '@react-navigation/native'


const SplashScreen = () => {
  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen