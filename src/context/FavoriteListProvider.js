import React from 'react';

export const FavoriteListContext = React.createContext();

const FavoriteListProvider = props => {

  const contextValue={
      
  }

  return (
    <FavoriteListContext.Provider value={contextValue}>
      {props.children}
    </FavoriteListContext.Provider>
  );
};