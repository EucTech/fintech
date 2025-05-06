import { Text, Pressable, View } from 'react-native'
import React from 'react'

interface ButtonOutlineProps {
  title: string;
  action?: () => void;
  children?: React.ReactNode;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({title, action, children}) => {
  return (
    <Pressable className='border-2 border-neutral-400 rounded-lg justify-center items-center py-4 flex-row space-x-2'
    onPress={action}
    >
      {children && <View>{children}</View>}
      <Text className='text-neutral-400 font-bold text-lg'>{title}</Text>
    </Pressable>
  )
}

export default ButtonOutline;