import { useState } from "react";
import { View, Image } from "react-native";
import styles from "./style";

const SplashScreen = ({ navigation }) => {
  const [time, setTime] = useState(false);

  setTimeout(function () {
    setTime(true);
  }, 5000);

  if (!time) {
    return (
      <View style={styles.container}>
        <Image
          testID="image-splash"
          style={styles.image}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
          }}
        />
      </View>
    );
  } else {
    navigation.navigate("Home Screen");
    return null;
  }
};

export default SplashScreen;
