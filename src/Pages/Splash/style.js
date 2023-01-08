import { Dimensions, StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: `#000`,
        fontSize: 20,
        fontWeight: "bold"
    },
    image: {
        width: 200,
        height: 200,
    }
});

export default styles;