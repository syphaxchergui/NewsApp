import React from 'react';
import { useState } from 'react';

export const FavoriteListContext = React.createContext();

export const FavoriteListProvider = props => {
  const [favList, setFavList] = useState([])
  let temp = []

  const addFavList = (item) => {
    temp = [...temp, item]
    setFavList(temp)
  }

  const contextValue={
      favList,
      addFavList
  }

  return (
    <FavoriteListContext.Provider value={contextValue}>
      {props.children}
    </FavoriteListContext.Provider>
  );
};