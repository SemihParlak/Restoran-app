import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';


export default function ResultList({title, results}) {

  const navigation = useNavigation()


  console.log(results);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      renderItem={({item}) => {
        return(
          <TouchableOpacity onPress={() => navigation.navigate('ResultShow', {id: item.id})}>
            <ResultDetail result={item}/>
          </TouchableOpacity>
        )
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginBottom:12,
  },
  title:{
    fontSize:18,
    fontStyle: 'italic',
    fontWeight: '600',
    marginLeft: 15,
    marginBottom:5,
    color:'white'
  },
})