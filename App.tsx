import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import "./global.css";
import { StatusBar } from "expo-status-bar";
import RootNavigation from "./src/screens/navigation/RootNavigation";
import useCachedResources from "./hooks/useChachedResources";
import { useUserStore } from "./store/useUserStore";

const App = () => {

  const isLoadingComplete = useCachedResources();

  const { session, user } = useUserStore();

  useEffect(() => console.log(user, session), [session, user]);

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RootNavigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
