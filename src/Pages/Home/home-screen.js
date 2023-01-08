import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  ScrollView,
} from "react-native";

import styles from "./style";
import { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { db } from "../firebase/config";
import { onValue, push, ref, remove, set } from "firebase/database";
import moment from "moment";
import uuid from "react-native-uuid";

const Home = () => {
  moment.locale("en");

  const [modalVisible, setModalVisible] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [task, setTask] = useState("");
  const [oldTask, setOldTask] = useState();
  const [statusAddTask, setStatusAddTask] = useState(true);

  const addTask = () => {
    if (statusAddTask) {
      const id = uuid.v4();
      set(ref(db, "tarefas/" + id), {
        id: id,
        task: task,
        statusCompletedTaks: false,
        date: new Date().toString(),
      });
      setTask("");
      setModalVisible(false);
    } else {
      set(ref(db, "tarefas/" + oldTask), {
        id: oldTask,
        task: task,
        statusCompletedTask: false,
        date: new Date().toString(),
      });
      setTask("");
      setOldTask("");
      setModalVisible(false);
      setStatusAddTask(true);
    }
  };

  const completedTask = () => {
    set(ref(db, "tarefas/" + oldTask), {
      id: oldTask,
      task: task,
      statusCompletedTask: true,
      date: new Date().toString(),
    });
    setOldTask("");
    setModalVisible(false);
  };

  const deletedTask = () => {
    remove(ref(db, "tarefas/" + oldTask));
    setOldTask("");
    setModalVisible(false);
  };

  useEffect(() => {
    return onValue(ref(db, "/tarefas"), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      let allItems = { ...data };
      setAllTasks(allItems);
    });
  }, []);

  const allTasksFireabase = Object.keys(allTasks);

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title} testID="title-list">
          Lista de Tarefas
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => {
          setModalVisible(true);
          setTask("");
        }}
      >
        <Text style={styles.textAdd}>+</Text>
      </TouchableOpacity>

      <SafeAreaView style={styles.containerSafeArea}>
        <ScrollView style={styles.scrollView}>
          {allTasksFireabase.map((index) => (
            <View style={styles.containerScroll} key={allTasks[index]}>
              <Text
                style={styles.textScroll}
                key={allTasks[index]}
                onPress={() => {
                  if (!allTasks[index].statusCompletedTask) {
                    setModalVisible(true);
                  }
                  setTask(allTasks[index].task);
                  setStatusAddTask(false);
                  setOldTask(allTasks[index].id);
                }}
              >
                {allTasks[index].task} -{" "}
                {moment(allTasks[index].date).format("HH:mm")}
              </Text>
              <Text style={styles.iconCompleted}>
                {allTasks[index].statusCompletedTask ? (
                  <Text style={{ color: "green" }}>Check</Text>
                ) : null}
              </Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => {
                setModalVisible(!modalVisible);
                setStatusAddTask(true);
              }}
            >
              <Text style={styles.textClose}>X</Text>
            </TouchableOpacity>

            <Text style={styles.titleModal}>
              {statusAddTask ? "Adicionar nova tarefa" : "Dados da Tarefa"}
            </Text>

            <View style={styles.containerForm}>
              <TextInput
                testID="input"
                style={styles.inputText}
                value={task}
                onChangeText={(event) => setTask(event)}
              />
              <TouchableOpacity style={styles.buttoAddTask} onPress={addTask}>
                <Text style={styles.textButtonAdd}>
                  {statusAddTask ? "Adicionar Tarefa" : "Atualizar Tarefa"}
                </Text>
              </TouchableOpacity>
              {!statusAddTask ? (
                <>
                  <TouchableOpacity
                    style={styles.buttonCompleted}
                    onPress={completedTask}
                  >
                    <Text style={styles.textButtonAdd}>Concluir</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonDeleted}
                    onPress={deletedTask}
                  >
                    <Text style={styles.textButtonAdd}>Deletar</Text>
                  </TouchableOpacity>
                </>
              ) : null}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
