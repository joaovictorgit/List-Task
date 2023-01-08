import { Dimensions, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    flex: 1,
  },
  containerTitle: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 35,
  },
  buttonAdd: {
    flex: 1,
    backgroundColor: "blue",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  textAdd: {
    color: "white",
    fontSize: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  containerScroll: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 500,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(162, 162, 162)",
  },
  textClose: {
    margin: 5,
  },
  iconCompleted: {
    position: "relative",
    bottom: -5,
    right: -100,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    position: "absolute",
    top: 5,
    right: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  containerForm: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    borderBottomWidth: 1,
    width: 250,
    marginTop: 25,
  },
  titleModal: {
    fontSize: 14,
    fontWeight: "500",
  },
  buttoAddTask: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    borderRadius: 5,
    width: 150,
    height: 30,
  },
  buttonCompleted: {
    backgroundColor: "rgba(0, 160, 0, 0.64)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 5,
    width: 150,
    height: 30,
  },
  buttonDeleted: {
    backgroundColor: "rgba(178, 34, 34, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 5,
    width: 150,
    height: 30,
  },
  textButtonAdd: {
    color: "white",
  },
  containerSafeArea: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  textScroll: {
    fontSize: 16,
    color: "rgb(162, 162, 162)",
    fontWeight: "400",
    position: "absolute",
    left: 0,
    bottom: 10,
  },
});

export default styles;
