import React, { useContext, useState } from 'react';
import { 
    View, 
    Text, 
    Button, 
    TextInput, 
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    ScrollView

} from 'react-native';
import { styles } from '../../utils/styles';
import AppContext  from '../../utils/appContext';

const TaskCard = ({task}) => {
    return (
        <View>
            <Text>{task.id} - {task.text} </Text>
        </View>
    )
}

export default function HomeScreen ({navigation}) {

    const {task, setTask} = useContext(AppContext);
    const [newTask, setNewTask] = useState(null);

    const onNewTask = () => {
        const currLength = task.length;
        console.log({taskArray: task, taskLength: task.length})
        task.push({ id: currLength, text: newTask })
        setTask([...task])
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="New task"
                onChangeText={newText => {
                    console.log(newText)
                    setNewTask(newText)
                }}
                defaultValue={newTask}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={onNewTask}>
                <Text style={styles.loginText}>Add Task</Text> 
            </TouchableOpacity>

            <SafeAreaView style={styles.container}>
                <ScrollView >
                    <FlatList
                        data={task}
                        renderItem={({item}) => <TaskCard task={item} />}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </SafeAreaView>


        </View>
    )

}
