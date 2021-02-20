import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Image, Linking, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);

const DetailScreen = ({ route: { params } }) => {

    const { item } =  params;
    console.log(item) 


    return(
        <ScrollView style={styles.container}>
            <Text style={styles.sourceStyle}>{item.source.name}</Text>
            <Text style={styles.titleStyle}>{item.title}</Text>
            <Text style={styles.descriptionStyle}>{item.description}</Text>
            <Image style={styles.imageStyle} source={item.urlToImage==null ? require('../../assets/icon.png') : {uri: item.urlToImage}}/>
            {item.author ? <Text style={styles.descriptionStyle}>By {item.author}</Text> : null}
            <TouchableOpacity onPress={() =>  Linking.openURL(item.url)}><Text style={styles.url} >{item.url}</Text></TouchableOpacity>
            <Text style={styles.contentStyle}>{item.content}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        flex:1 
    },
    imageStyle: {
        width: screenWidth-20,
        height: 230,
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray'
    },
    sourceStyle:{
        color: '#EF3054',
        fontSize: 20,
        alignSelf: 'center',
        backgroundColor: '#eeeeee',
        paddingHorizontal: 40,
        paddingVertical: 8,
        borderRadius: 10,
        fontFamily: 'monospace'
    },
    titleStyle:{
        fontSize: 28,
        textAlign: 'center',
        marginVertical: 15,
        fontFamily: 'notoserif'
    },
    descriptionStyle: {
        fontSize: 15,
        color: '#888888',
        textAlign: 'justify',
        fontFamily: 'notoserif'
    },
    url:{
        color: '#EF3054',
        fontSize: 14,
    },
    contentStyle: {
        fontSize: 20,
        textAlign: 'justify',
        fontFamily: 'sans-serif',
        marginTop: 10,
        marginBottom: 20
    }


})

export default DetailScreen;