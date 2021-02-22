import React from 'react';
import { useEffect } from 'react';
import { View,ScrollView, Text, FlatList,TouchableOpacity, StyleSheet, Image } from 'react-native'; 
import { useState } from 'react/cjs/react.development';
import NewsDetailCategorie from '../components/NewsDetailCategorie';
import newsApi from '../api/newsApi'
import Ionicons from '@expo/vector-icons/Ionicons';

const CategorieScreen = ({ navigation }) => {

    const [resultBusiness, setResultBusiness] = useState([])
    const [resultEntretainment, setResultEntretainment] = useState([])
    const [resultHealth, setResultHealth] = useState([])
    const [resultScience, setResultScience] = useState([])
    const [resultSports, setResultSports] = useState([])
    const [resultTech, setResultTech] = useState([])
    const [loaded, setLoaded] = useState(false)



    const searchApi = async () => {
        try{
            setLoaded(false);
            const response = await newsApi.get(`./top-headlines?country=us&category=business&apiKey=9ad9ee5b59854fdcac03e4564bb937e2`)
            setResultBusiness(response.data.articles);
            const response1 = await newsApi.get(`./top-headlines?country=us&category=health&apiKey=9ad9ee5b59854fdcac03e4564bb937e2`)
            setResultHealth(response1.data.articles);
            const response2 = await newsApi.get(`./top-headlines?country=us&category=sports&apiKey=9ad9ee5b59854fdcac03e4564bb937e2`)
            setResultSports(response2.data.articles);
            const response3 = await newsApi.get(`./top-headlines?country=us&category=entertainment&apiKey=9ad9ee5b59854fdcac03e4564bb937e2`)
            setResultEntretainment(response3.data.articles);
            const response4 = await newsApi.get(`./top-headlines?country=us&category=science&apiKey=9ad9ee5b59854fdcac03e4564bb937e2`)
            setResultScience(response4.data.articles);
            const response5 = await newsApi.get(`./top-headlines?country=us&category=technology&apiKey=9ad9ee5b59854fdcac03e4564bb937e2`)
            setResultTech(response5.data.articles);
            setLoaded(true)
        } catch( err ) { 
            console.log(err)
        }
    }

    useEffect(() => {
        searchApi(); 
    }, []);

    return(
        <ScrollView style={{flex:1, backgroundColor: '#fff'}}>
            { resultBusiness.length>0&&loaded ? 
            <View styles={styles.viewStyle}>
                <Text style={styles.titleStyle} >Business <Ionicons name="ios-bar-chart-outline" size={24} /></Text>
                <FlatList 
                    data={resultBusiness}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(data) => data.title}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity activeOpacity={0.8} onPress={() =>  navigation.navigate('DetailsCategorie', {item: item})} >
                                <NewsDetailCategorie news={item}/>
                            </TouchableOpacity>
                        )
                    }}
                    /> 
            </View>: <Image source={require('../../assets/loading.gif')} style={styles.imageLoading} />}

            {resultHealth.length>0&&loaded ? 
            <View styles={styles.viewStyle}>
                <Text style={styles.titleStyle} >Health <Ionicons name="ios-bandage-outline" size={25} /></Text>
                <FlatList 
                    data={resultHealth}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(data) => data.title}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity activeOpacity={0.8} onPress={() =>  navigation.navigate('DetailsCategorie', {item: item})} >
                                <NewsDetailCategorie news={item}/>
                            </TouchableOpacity>
                        )
                    }}
                    /> 
            </View>: null}

            {resultScience.length>0&&loaded ? 
            <View styles={styles.viewStyle}>
                <Text style={styles.titleStyle} >Science <Ionicons name="ios-flask-outline" size={25} /></Text>
                <FlatList 
                    data={resultScience}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(data) => data.title}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity activeOpacity={0.8} onPress={() =>  navigation.navigate('DetailsCategorie', {item: item})} >
                                <NewsDetailCategorie news={item}/>
                            </TouchableOpacity>
                        )
                    }}
                    /> 
            </View>: null}

            {resultEntretainment.length>0&&loaded ? 
            <View styles={styles.viewStyle}>
                <Text style={styles.titleStyle} >Entertainment <Ionicons name="ios-flame-outline" size={27} /></Text>
                <FlatList 
                    data={resultEntretainment}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(data) => data.title}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity activeOpacity={0.8} onPress={() =>  navigation.navigate('DetailsCategorie', {item: item})} >
                                <NewsDetailCategorie  news={item}/>
                            </TouchableOpacity>
                        )
                    }}
                    /> 
                </View>: null}
            
            {resultSports.length>0&&loaded ? 
            <View styles={styles.viewStyle}>
                <Text style={styles.titleStyle} >Sports <Ionicons name="ios-football" size={25} /></Text>
                <FlatList 
                    data={resultSports}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(data) => data.title}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity activeOpacity={0.8} onPress={() =>  navigation.navigate('DetailsCategorie', {item: item})} >
                                <NewsDetailCategorie  news={item}/>
                            </TouchableOpacity>
                        )
                    }}
                    /> 
                </View>: null}

            {resultTech.length>0&&loaded ? 
            <View styles={styles.viewStyle}>
                <Text style={styles.titleStyle} >Tech <Ionicons name="ios-hardware-chip-outline" size={25} /></Text>
                <FlatList 
                    data={resultTech}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(data) => data.title}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity activeOpacity={0.8} onPress={() =>  navigation.navigate('DetailsCategorie', {item: item})} >
                                <NewsDetailCategorie  news={item}/>
                            </TouchableOpacity>
                        )
                    }}
                    /> 
            </View>: null}      
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 28,
        marginTop: 10,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    imageLoading:{
        marginTop: 10,
        alignSelf: 'center',
        width: 70,
        height: 50
    }
});

export default CategorieScreen;