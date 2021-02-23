import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import NewsDetail from '../components/NewsDetail';
import { FavoriteListContext } from '../context/FavoriteListProvider'
import { useContext, useEffect } from 'react';

const FavoriteListScreen = ({ navigation }) => {

    const { favList } = useContext(FavoriteListContext);
    console.log(favList)
    
    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>Liked articles</Text>
            <FlatList 
                    data={favList}
                    keyExtractor={(result) => result.title}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity activeOpacity={0.8} onPress={() =>  navigation.navigate('DetailsFav', {item: item})} >
                                <NewsDetail news={item}/>
                            </TouchableOpacity>
                        )
                    }}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 10,
    },
    titleStyle: {
        fontSize: 23,
        marginHorizontal: 15,
        marginBottom: 10,
        fontWeight: 'bold',
        fontFamily: 'notoserif'
    }
})

export default FavoriteListScreen;