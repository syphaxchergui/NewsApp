import React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import SearchBar from "../components/SearchBar";
import NewsDetail from '../components/NewsDetail';
import newsApi from "../api/newsApi";
import { useEffect } from 'react';


const HomeScreen = ({ navigation }) => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loaded, setLoaded] = useState(false);



    const searchApi = async () => {
        try{
            const response = await newsApi.get('./top-headlines?apiKey=9ad9ee5b59854fdcac03e4564bb937e2&country=us')
            setResults(response.data.articles);

            setLoaded(true)     
        } catch( err ) {
            console.log(err)
        }
    }

    const searchApiWithTerm = async (term) => {
        try{
            setLoaded(false)
            const response = await newsApi.get(`./everything?q=${term}&apiKey=9ad9ee5b59854fdcac03e4564bb937e2`)
            setResults(response.data.articles);
            setLoaded(true)
        } catch( err ) { 
            console.log(err)
        }
    }

    useEffect(
        () => {
            searchApi();
        },[])

  
    return(
      <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}}>
            <SearchBar term={term} onChangeTerm={(term) => setTerm(term)} onEndEditing={(term) => searchApiWithTerm(term)}/>
            {loaded  ? 
                <FlatList 
                    data={results}
                    keyExtractor={(result) => result.title}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity activeOpacity={0.8} onPress={() =>  navigation.navigate('Details', {item: item})} >
                                <NewsDetail news={item}/>
                            </TouchableOpacity>
                        )
                    }}
                /> 

            : <Image source={require('../../assets/loading.gif')} style={styles.imageLoading} />}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageLoading:{
        marginTop: 10,
        alignSelf: 'center',
        width: 70,
        height: 50
    }
})

export default HomeScreen;