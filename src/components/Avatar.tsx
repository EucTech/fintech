import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { View, StyleSheet, Alert, Image, Pressable, ActivityIndicator } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { MaterialIcons } from '@expo/vector-icons'

interface Props {
  size: number;
  url: string | null;
  onUpload: (filePath: string) => void;
  showUpload?: boolean;
}

const Avatar = ({url, size=150, onUpload, showUpload}: Props) => {

  const [uploading, setUploading] = useState(false);
  const [avaterUrl, setAvaterUrl] = useState<string | null>(null); 
  const avaterSize = {height: size, width: size}

  useEffect(() => {
    if (url) {
      downloadImage(url)
    }
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path)

      if (error) {
        console.log(error);
        throw error
      }

        const fr = new FileReader();
        fr.readAsDataURL(data);
        fr.onload = () => {
          setAvaterUrl(fr.result as string);
        };
    
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error downloading Image: ', error.message )
      }
    }
  }

  async function uploadAvatar() {

  }

  return (
    <View>
      {
      avaterUrl ? (
        <View className='relative '>
          <Image
          source={{ uri: avaterUrl }}
          accessibilityLabel='Avatar'
          style={[avaterSize, styles.avatar, styles.image]}
          />
        </View>
      ) : (
        <View className='justify-center items-center'
        style={[avaterSize, styles.avatar, styles.image]}
        >
          <ActivityIndicator color="white" />
        </View>
      )}

      {
        showUpload && (
          <View className=' absolute right-0 bottom-0'>
            {
              !uploading ? (
                <Pressable>
                  <MaterialIcons name="cloud-upload" size={30} color="black" />
                </Pressable>
              ) : (
                <ActivityIndicator color="white" />
              )
            }
          </View>
        )
      }
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
  avatar : {
    overflow: "hidden",
    maxWidth: "100%",
    position: "relative",
  },
  image: {
    objectFit: "cover",
    paddingTop: 0,
  },
  noImage: {
    backgroundColor: "gray",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgb(200, 200, 200)",
    borderRadius: 20,
  }
})