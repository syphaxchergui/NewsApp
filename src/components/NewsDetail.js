import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

let TextColor = '#010101'
const screenWidth = Math.round(Dimensions.get('window').width);

const NewsDetail =(news) => {
    return(
        <View>
            <Image style={styles.imageStyle} source={news.news.urlToImage==null ? require('../../assets/icon.png') : {uri: news.news.urlToImage}  }/>
            <View style={styles.container}>
                <View> 
                    <Text style={styles.titleText}>{news.news.title.length > 50 ? (news.news.title.substr(0, 50)+"...") : news.news.title }</Text>
                    <Text style={styles.moreInfotext}>Source: {news.news.source.name} </Text>
                    {news.news.author ? <Text style={styles.moreInfotext}>Author: {news.news.author.length > 40 ? (news.news.author.substr(0, 40)+"...") : news.news.author }</Text> : null}
                </View>
               { news.news.description ? <Text style={styles.discriptionText}>{news.news.description.length > 100 ? (news.news.description.substr(0, 100)+"...") : news.news.description }</Text> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginHorizontal: 10,
        marginBottom: 13,
        backgroundColor: '#eeeeee',
        padding: 15,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowRadius: 8.30,
        elevation: 7,
    },
    imageStyle:{
        height: 150,
        width: screenWidth - 20,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        marginHorizontal: 10,
    },
    discriptionText: {
        marginTop: 20,
        color: TextColor,
        fontSize: 16,
        fontFamily: 'notoserif'
    },
    moreInfotext: {
        color: TextColor,
        fontSize: 14,
        opacity: 0.6,
        fontFamily: 'notoserif'
    },
    titleText: {
        color: TextColor,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'notoserif'
    }
    
})

export default NewsDetail;