import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Button,
  TextInput,
  Modal,
} from "react-native";
import { useState } from "react";

const Header = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      {name ? (
        <Text style={styles.text}>Hello {name}!</Text>
      ) : (
        <Text style={styles.text}>{props.header}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowModal(true)}
        activeOpacity={0.5}
      >
        {name ? (
          <ImageBackground
            style={styles.image}
            source={require("../assets/avatar.png")}
          >
            <Text style={styles.imageText}>{name}</Text>
          </ImageBackground>
        ) : (
          <Image style={styles.image} source={require("../assets/icon.png")} />
        )}
      </TouchableOpacity>

      <Modal animationType="slide" visible={showModal} transparent={true}>
        <View style={styles.modal}></View>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShowModal(false)}
        >
          <Image source={require("../assets/close.png")} />
        </TouchableOpacity>

        <Text style={styles.name}>Name:</Text>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={setTextInput}
        />

        <Button
          title="Submit"
          color="black"
          onPress={() => {
            setName(textInput);
            setShowModal(false);
          }}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 400,
    backgroundColor: "steelblue",
    justifyContent: "space-between",
    padding: 20,
    flexDirection: "row",
  },

  text: {
    fontWeight: "bold",
    fontSize: 25,
    top: 10,
    //padding: 30,
    color: "beige",
  },

  png: {
    width: 70,
    height: 70,
    bottom: 10,
    right: 10,
    borderRadius: 40,
    //marginTop: 10,
    //left: 300
  },

  image: {
    width: 95,
    height: 95,
    borderRadius: 100,
    marginTop: -10,
  },

  input: {
    width: 200,
    height: 23,
    backgroundColor: "lightgrey",
    marginTop: 10,
    left: 95,
    padding: 5,
  },

  name: {
    fontWeight: "bold",
    fontSize: 18,
    left: 100,
    marginTop: 30,
  },

  modal: {
    width: 250,
    height: 180,
    marginTop: 320,
    left: 70,
    backgroundColor: "lightblue",
  },
  button: {
    marginTop: -8,
    right: 15,
  },

  icon: {
    marginTop: -170,
    left: 77,
  },

  imageText: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    //padding: 2,
    backgroundColor: "oldlace",
    marginTop: 80,
  },
});

export default Header;
