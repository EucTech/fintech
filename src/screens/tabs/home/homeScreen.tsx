import useSupabaseAuth from "@/hooks/useSupabseAuth";
import Avatar from "@/src/components/Avatar";
import { Images } from "@/src/constants";
import { useUserStore } from "@/store/useUserStore";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { Image } from "expo-image";
import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const blurhash = "LGC9OcyWRrRjy?WpnOf6wPVs:7nP"

const HomeScreen = () => {
  const [avatarUrl, setAvatarUrl] = useState(""); 
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const { getUserProfile } = useSupabaseAuth();
  const { session } = useUserStore();

  const handleGetProfile = useCallback(async () => {
    setLoading(true);

    try {
      const { data, error, status } = await getUserProfile();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [getUserProfile]);

  // Corrected useFocusEffect usage
  useFocusEffect(
    useCallback(() => {
      if (session) {
        handleGetProfile();
      }
    }, [session, handleGetProfile])
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="relative">
        {/* Header */}
        <View className="w-full flex-row justify-between items-center px-4">
          <View className="w-3/4 flex-row space-x-2">
            <View className="justify-center items-center">
              <View className="h-12 w-12 rounded-2xl overflow-hidden">
                <Avatar url={avatarUrl} size={50} />
              </View>
            </View>

            <View>
              <Text className="text-lg font-bold">
                Hi, {username ? username : "User"}
              </Text>
              <Text className="text-sm text-neutral-500">Have a good day</Text>
            </View>
          </View>

          <View className="py-6">
            <View className="bg-neutral-700 rounded-lg p-1">
              <Ionicons name="menu" size={24} color="white" />
            </View>
          </View>
        </View>

        {/* Balance */}
        <View className="mx-4 bg-neutral-800 rounded-[34px] overflow-hidden mt-4 mb-4">
          <View className="bg-[#0DF69E] justify-center items-center py-6 rounded-[34px]">
            <Text className="text-sm font-medium text-neutral-700">
              Total Balance
            </Text>

            <Text className="text-3xl font-extrabold">$2,430.00</Text>
          </View>

          <View className="justify-between items-center flex-row py-4">
            {/* Send to */}
            <View className="w-1/4 justify-center items-center space-y-2 ">
              <View className="w-10 h-10 overflow-hidden bg-[#3B363F] rounded-full p-2">
                <Image
                  source={Images.money_send}
                  placeholder={blurhash}
                  contentFit="cover"
                  transition={1000}
                  className="w-full h-full flex-1 "
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <Text className="text-white">
                Send to
              </Text>
            </View>

            {/* Request */}
           <View className="w-1/4 justify-center items-center space-y-2 ">
              <View className="w-10 h-10 overflow-hidden bg-[#3B363F] rounded-full p-2">
                <Image
                  source={Images.money_receive}
                  placeholder={blurhash}
                  contentFit="cover"
                  transition={1000}
                  className="w-full h-full flex-1 "
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <Text className="text-white">
                Request
              </Text>
            </View>

            {/* Top Up */}
           <View className="w-1/4 justify-center items-center space-y-2 ">
              <View className="w-10 h-10 overflow-hidden bg-[#3B363F] rounded-full p-2">
                <Image
                  source={Images.card_add}
                  placeholder={blurhash}
                  contentFit="cover"
                  transition={1000}
                  className="w-full h-full flex-1 "
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <Text className="text-white">
                Top Up
              </Text>
            </View>

            {/* More */}
           <View className="w-1/4 justify-center items-center space-y-2 ">
              <View className="w-10 h-10 overflow-hidden bg-[#3B363F] rounded-full p-2">
                <Image
                  source={Images.more}
                  placeholder={blurhash}
                  contentFit="cover"
                  transition={1000}
                  className="w-full h-full flex-1 "
                  style={{ width: "100%", height: "100%" }}
                />
              </View>

              <Text className="text-white">
                More
              </Text>
            </View>

          </View>
        </View>

        
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
