import { Text, Pressable } from 'react-native'
import React from 'react'

interface ButtonProps {
  title: string;
  action?: () => void;
}

const Button: React.FC<ButtonProps> = ({title, action}) => {
  return (
    <Pressable className='bg-[#2ab07c] rounded-lg justify-center items-center py-5'
    onPress={action}
    >
      <Text className='text-white font-bold text-lg'>{title}</Text>
    </Pressable>
  )
}

export default Button;