import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function ResultShowScreen({ route }) {
    const [result, setResult] = useState(null)
    const id = route.params.id;
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data)
    }
    useEffect(() => {
        getResult(id);
    }, []);
    if (!result) {
        return null;
    }
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }} />

            <Text style={styles.title}>{result.name}</Text>


            <View style={styles.resultDetailContainer}>
                <View style={{ height: 40, top: 20, }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', left: 100 }}>Restorant Hakkında</Text>
                    <View style={{
                        borderWidth: 1,
                        width: 200,
                        left: 90,
                        borderColor: 'yellow',
                    }}></View>
                </View>

                <View style={styles.adressAbout}>
                <View style={styles.addressContainer}>
                    <View style={{
                        width: '100%',
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Text style={styles.city}>{result.location?.city}</Text>
                        <Text style={{
                            fontSize: 18,
                        }}>/</Text>
                        <Text style={styles.address3}>{result.location?.address3}</Text>
                    </View>
                    <Text style={styles.address}>{result.location?.address1}</Text>
                    <Text style={styles.address2}>{result.location?.address2}</Text>
                    <Text style={{fontSize:15, color:'black',}}> <Ionicons name="star-sharp" size={24} color="yellow" /> {result.rating} Yıldızlı Restoran, {result.review_count} Değerlendirme</Text>
                </View>
                </View>



                <Text style={styles.phone}>
                    <FontAwesome style={{paddingTop: 2,}} name="phone" size={30} color="black" />
                    {result.display_phone}
                </Text>
                <View style={styles.locationIcon}>
                    <Entypo name="location-pin" size={30} color="#ffe1ff" />
                    <Text style={{ fontSize: 16, color: 'white', top: 2, }}>38Km</Text>
                </View>
                <View style={styles.icon}>
                    {
                        result.is_closed ? <FontAwesome name="lock" size={24} color="red" /> : <FontAwesome name="unlock" size={24} color="#00ff00" />
                    }
                </View>
                <View style={styles.openCloseContainer}>
                    <Text style={{ fontSize: 17, color: 'white' }}>Open</Text>
                    <Text style={{ fontSize: 17, }}> / </Text>
                    <Text style={{ fontSize: 17, top: 1, color: 'white' }}>Close</Text>
                </View>
                <View style={styles.menuContainer}>
                    <MaterialIcons name="restaurant-menu" size={30} color="yellow" />
                    <Text style={{ fontSize: 17, color: 'white', top: 2, }}>Menu</Text>
                </View>
                <View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5'
    },
    image: {
        height: 200,
        width: 300,
        margin: 10,
        borderRadius: 10,
    },
    title: {
        color: '#ff4646',
        top: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 22,
        marginVertical: 10,
        width: 450,
        textAlign: 'center',
    },
    phone: {
        alignSelf: 'center',
        flexDirection:'row',
        alignItems:'center',
        fontSize: 16,
        backgroundColor: '#ffe1ff',
        top: 200,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        marginLeft: 0,
        paddingHorizontal:30,
        justifyContent:'space-between',
        height: 50,
    },
    icon: {
        alignSelf: 'center',
        backgroundColor: 'whitesmoke',
        bottom: -30,
        backgroundColor: '#ff4646',
    },
    adressAbout:{
        backgroundColor:'white',
        top:80,
        width:'90%',
        left:20,
        borderRadius: 15,
    },
    addressContainer: {
        // top: 80,
        // backgroundColor: 'white',
        // borderRadius: 20,
        // marginHorizontal: 20,
        top: 0,
        alignItems:'center',
        color:'black'
    },
    city: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    address: {
        fontSize:16,
        color:'black',

    },
    address2: {
        fontSize: 16,
        color:'black',
    },
    address3: {
        color:'black',
        fontSize: 18,
        fontWeight:'bold',

    },
    locationIcon: {
        top: 84,
        left: 58,
    },
    resultDetailContainer: {
        top: 15,
        backgroundColor: '#ff4646',
        width: 394,
        height: 380,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    openCloseContainer: {
        flexDirection: 'row',
        width: 94,
        height: 30,
        position: 'relative',
        left: 142,
        paddingHorizontal: 5,
        top: 40,
    },
    menuContainer: {
        alignItems: 'flex-end',
        left: -62,
        top: -22,
    }
})