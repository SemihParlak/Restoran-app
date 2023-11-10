import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


export default function ResultDetail({ result }) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.boxContainer}>
                <Image
                    style={styles.Image}
                    source={result.image_url ? { uri: result.image_url } : null} />
                <Text style={styles.name}>{result.name}</Text>
                <Text style={styles.textEvaluation}> <Ionicons name="star-sharp" size={16} color="yellow" /> {result.rating} Yıldızlı Restoran, {result.review_count} Değerlendirme</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    Image: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 12,
        borderTopRightRadius:12,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
        textAlign:'center',
        top:10,
        color:'#ff4646',
        fontSize:20,
    },
    textEvaluation:{
        color:'white',
        fontWeight:'600',
        top:20,
        fontSize:13,
        textAlign:'center',
        color:'#ff4646'
    },
    boxContainer:{
        backgroundColor:'white',
        height:190,
        width:290,
        borderRadius:12,
    }
})