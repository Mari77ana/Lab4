import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button,
  ActivityIndicator,
} from "react-native";
import Header from "./components/Header";
import Article from "./components/Article";
import { useState } from "react";

export default function App() {
  const [isLoading, setisLoading] = useState(false);

  const showAlert = () => {
    setisLoading(true);
    Alert.alert("Unable To Load", "There was an error", [
      {
        text: "OK",
        onPress: () => setisLoading(false),
      },
    ]);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.border}>
        <Header header="Hello Guest!" />
        <StatusBar style="auto" />
      </View>

      <Text style={styles.highlight}>Today's Highlights</Text>
      <Article />

      <View>
        {isLoading ? (
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Button title="Loading" />
            <ActivityIndicator
              size="small"
              animating={isLoading}
              color="#0000ff"
            />
          </View>
        ) : (
          <View>
            <Button title="Load More " onPress={showAlert} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  highlight: {
    fontWeight: "bold",
    fontSize: 22,
    top: 35,
    left: 20,
  },

  button: {},
});
