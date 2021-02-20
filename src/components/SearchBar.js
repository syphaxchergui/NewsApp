import React from 'react';
import { TextInput, View, StyleSheet, Dimensions } from 'react-native'; 
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchBar = ({term, onChangeTerm, onEndEditing}) => {

    return (
    <View style={styles.backgroundStyle}>
        <Ionicons name="ios-search-sharp" style={styles.iconStyle} />
        <TextInput 
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder="Search with key words..."
            placeholderTextColor="gray"
            value={term}
            onChangeText={newTerm => onChangeTerm(newTerm)}
            onEndEditing={() => onEndEditing(term)}
        />
    </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        margin: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        height: 47,
        width: Math.round(Dimensions.get('window').width)-20, 
        borderRadius: 10,
        flexDirection: 'row',
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowRadius: 20,
        elevation: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
        color: '#030303'
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginLeft: 15,
        marginRight: 10,
        color: "#030303"
    }
});

export default SearchBar;