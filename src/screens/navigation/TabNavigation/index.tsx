import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";
import MarketNavigation from "./MarketNavigation";
import SearchNavigation from "./SearchNavigation";
import NewsNavigation from "./NewsNavigation";
import ProfileNavigation from "./ProfileNavigation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Market") {
            iconName = "stats-chart-outline";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "News") {
            iconName = "newspaper-outline";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
          }

          const customizeSize = 25;

          return (
            <Ionicons
              name={iconName}
              size={customizeSize}
              color={focused ? "#164b48" : "gray"}
            />
          );
        },
        tabBarActiveTintColor: "#164b48",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 12,
        fontWeight: "bold",
        },
         animationEnabled: true,
         gestureEnabled: true,
         gestureDirection: "horizontal",
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Market" component={MarketNavigation} />
      <Tab.Screen name="Search" component={SearchNavigation} />
      <Tab.Screen name="News" component={NewsNavigation} />
      <Tab.Screen name="Profile" component={ProfileNavigation} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
