import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeInDown } from 'react-native-reanimated'
import Button from '@/src/components/Button'
import ButtonOutline from '@/src/components/ButtonOutline'

const WelcomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 justify-between items-center bg-white'>
      <StatusBar style='auto' />
      <View className='w-full px-4 items-center justify-center space-y-6 h-full'>

        {/* Welcome Text */}

        <View className=' justify-center items-center'>
          <Animated.Text 
          entering={FadeInDown.duration(100).delay(100).springify()}
          className='text-neutral-900 text-3xl font-medium leading-[60px]'
          style={{
            fontFamily: 'PlusJakartaSansBold',
          }}
          >Welcome
          </Animated.Text>
        </View>

          {/* Login and Sign up Button */}

          <View className='w-full justify-start'>
          <Animated.View 
          entering={FadeInDown.duration(100).delay(300).springify()}
          className="pb-6"
          >
            <Button title='Login' />
          </Animated.View>

          <Animated.View 
          entering={FadeInDown.duration(100).delay(400).springify()}
          >
            <ButtonOutline title='Sign Up' />
          </Animated.View>
          </View>

          {/* Breaker Line */}

      </View>
      <Text>WelcomeScreen</Text>
    </SafeAreaView>
  )
}

export default WelcomeScreen