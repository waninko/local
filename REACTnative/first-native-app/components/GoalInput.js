import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

      const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('') //blanker teksten!

      }

    return (
        <Modal visible={props.visible} animationType="slide"> 
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Add Your New Goal"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="ADD " onPress={addGoalHandler} />
                </View>
                <View style={styles.button}>
                    <Button title="CANCEL " color="red" onPress={props.onCancel}/>  
                </View>
            
            </View>
        </View>
        </Modal>
//visible=  i Modal settes til true/false via props - er knappen i app.js trykket på? true. ikke? false.
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 15,
        padding: 10
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'40%'
    },
    button: {
        width: '50%',
        padding: 5
    }
})

export default GoalInput