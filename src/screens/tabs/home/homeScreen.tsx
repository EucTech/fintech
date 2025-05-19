import useSupabaseAuth from "@/hooks/useSupabseAuth";
import Avatar from "@/src/components/Avatar";
import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const [avatarUrl, setAvaterUrl] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const { getUserProfile } = useSupabaseAuth();

  async  function handleGetProfile() {
    setLoading(true);

    try {
      const { data, error, status } = await getUserProfile();

      if(error && status !== 406) {
        setLoading(false);
        throw error;
      }

      if (data) {
        setUsername(data.username)
          setAvaterUrl(data.avatar_url)
      }
    } catch (error) {
      
    }
  }
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="relative">
        {/* Header */}
        <View className="w-full flex-row justify-between items-center px-4">
          <View className="w-3/4 flex-row space-x-2 ">
            <View className="justify-center items-center">
              <View className="h-12 w-12 rounded-2xl overflow-hidden">
                <Avatar url={avatarUrl} size={50} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
