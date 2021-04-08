import React, { useState } from 'react';
import { View, Text, Dimensions, Input, StyleSheet, CheckBox, Pressable } from 'react-native';

import TasksModals from './TasksModals';

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
let modal;
let name;
//<Pressable onPress={toggleModal}>
const Task = ({ title, info }) => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        //name = title;
    };

    modal = <TasksModals title={title} info={info} isModalVisible={isModalVisible} setModalVisible={setModalVisible}/>

    return (
        <Pressable onPress={toggleModal} style={styles.taskContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.textTitle}> {title} </Text>
            </View>
            {modal}
        </Pressable>

    );
};

const styles = StyleSheet.create({
    taskContainer: {
        justifyContent: 'center',
        width: deviceWidth * 90 / 100,
        borderLeftWidth: 4,
        borderRadius: 4,
        borderColor: '#000080',
        height: '15%',
        marginTop: 10,
        backgroundColor: '#FBFAF5',
        shadowColor: '#c4c4c4',
        shadowOffset: {
            width: 3,
            height: 2,
        },
        shadowRadius: 4,
        shadowOpacity: 1.0,
    },
    textContainer: {
        position: 'absolute',
        left: 0,
    },
    textTitle: {
        paddingLeft: 8,
        marginBottom: 10,
        fontSize: 15,
    }
});

export default Task;