import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown } from "react-native-reanimated";
import Button from "@/src/components/Button";
import ButtonOutline from "@/src/components/ButtonOutline";
import Breaker from "@/src/components/Breaker";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Images } from "@/src/constants";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const { navigate: NavigateAuth }: NavigationProp<AuthNavigationType> =
    useNavigation();

  const blurhash = "LGC9OcyWRrRjy?WpnOf6wPVs:7nP";

  return (
    <SafeAreaView className="flex-1 justify-between items-center bg-white">
      <StatusBar style="auto" />
      <View className="w-full px-4 items-center justify-center gap-6 h-full">
        {/* Logo and Brand Name */}
        <View className="w-full px-4 items-center">
          <Animated.View
            entering={FadeInDown.duration(100).springify()}
            className="flex-row justify-center items-center"
          >
            <View>
              <View className="w-20 h-20 overflow-hidden">
                <Image
                  source={Images.logo}
                  placeholder={blurhash}
                  contentFit="cover"
                  style={{ width: "100%", height: "100%" }}
                  transition={1000}
                  className="size-full flex-1"
                />
              </View>
            </View>
          </Animated.View>
        </View>

        {/* Welcome Text */}
        <View className=" justify-center items-center">
          <Animated.Text
            entering={FadeInDown.duration(100).delay(100).springify()}
            className="text-neutral-900 text-3xl font-medium leading-[60px]"
            style={{
              fontFamily: "PlusJakartaSansBold",
            }}
          >
            Welcome
          </Animated.Text>
        </View>

        {/* Login and Sign up Button */}
        <View className="w-full justify-start">
          <Animated.View
            entering={FadeInDown.duration(100).delay(300).springify()}
            className="pb-6"
          >
            <Button title="Login" action={() => NavigateAuth("Login")} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(100).delay(400).springify()}
          >
            <ButtonOutline title="Sign Up" action={() => NavigateAuth("Register")}/>
          </Animated.View>
        </View>

        {/* Breaker Line */}
        <View>
          <Breaker />
        </View>

        {/* 3rd Party Auth */}
        <View className="w-full justify-normal">
          <Animated.View
            entering={FadeInDown.duration(100).delay(600).springify()}
            className="border border-white pb-4"
          >
            <ButtonOutline title="Continue with Google">
              <AntDesign name="google" size={20} color="gray" />
            </ButtonOutline>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(100).delay(700).springify()}
            className="border border-white pb-4"
          >
            <ButtonOutline title="Continue with Apple">
              <AntDesign name="apple1" size={20} color="gray" />
            </ButtonOutline>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
