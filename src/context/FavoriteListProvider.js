import React from 'react';
import { useState } from 'react';
import { ToastAndroid } from 'react-native'
 
export const FavoriteListContext = React.createContext();

export const FavoriteListProvider = props => {
  const [favList, setFavList] = useState([])
  let temp = favList

  const showToast = (toast) => {
    ToastAndroid.showWithGravityAndOffset(
      toast,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  const addFavList = (item, toast) => {
    temp = [...temp, item]
    setFavList(temp)
    showToast(toast)
  }

  const deleteFavList = (item, toast) => {
    temp = temp.filter((elem) => {return item!==elem})
    setFavList(temp)
    showToast(toast)
  }

  const contextValue={
      favList,
      addFavList,
      deleteFavList
  }

  return (
    <FavoriteListContext.Provider value={contextValue}>
      {props.children}
    </FavoriteListContext.Provider>
  );
};