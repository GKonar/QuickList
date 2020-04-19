import React, { useState, createContext } from 'react'

export const ItemsContext = createContext();

export function ItemsProvider({ children }) {
  const [items, setItems] = useState([{ name: 'buraki', id: 1, lang: 'PL' }, { name: 'ziemniaki', id: 2, lang: 'PL' }])

  return (
    <ItemsContext.Provider value={{ items }} >
      {children}
    </ItemsContext.Provider>
  )
}

