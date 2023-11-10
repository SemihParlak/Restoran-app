import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function SearchBars({term, onTermChange, onTermSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
    <AntDesign
      style={styles.iconStyle}
      name="search1"
      size={30}
      color="black"
    />
    <TextInput
      style={styles.inputStyle}
      placeholder="Ara"
      autoCorrect={false}
      autoCapitalize="none"
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
    />
  </View>
  )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: 'white',
        flexDirection: 'row',
        margin: 10,
        height:40,
        alignItems:'center',
        borderRadius: 12,
        borderWidth:3,
        borderColor: '#e84242',
    },
    iconStyle:{
        marginHorizontal: 15,
        color: '#ff4040',
    },
    inputStyle:{
        flex: 1,
        fontSize:18,
        color: 'black',
    },
})