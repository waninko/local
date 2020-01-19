import React, { useState } from 'react';
import { StyleSheet, View,  Button, FlatList } from 'react-native';
import { selectAssetSource } from 'expo-asset/build/AssetSources';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
    { id: Math.random().toString(), value: goalTitle }
  ])
    setIsAddMode(false); //for å lukke modal'en etter en har trykket add
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId) //behold de med ID som IKKE matcher den som er valgt i et nytt array(filter)
    })
    console.log('You deleted something! ')
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput 
      visible= {isAddMode} 
      onAddGoal= {addGoalHandler} 
      onCancel= {cancelGoalAdditionHandler}/> 

      <FlatList
        keyExtractor={(item, index) => item.id} //"bytte navn" til noe annet enn key
        data={courseGoals} //pek til dataen du skal vise - et array
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }

});
