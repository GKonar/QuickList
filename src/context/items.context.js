import React, { useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const ItemsContext = createContext();

export function ItemsProvider({ children }) {
  // const [items, setItems] = useState([{ name: 'buraki', id: 1, lang: 'PL' }, { name: 'ziemniaki', id: 2, lang: 'PL' }])
  const [items, setItems] = useState([])

  const addItem = (item) => {
    let newItem = {
      name: item,
      id: uuidv4(),
      lang: 'PL'
    }
    if (item !== '') setItems([...items, newItem]);
  }

  const removeItem = (itemId) => {
    const updatedList = items.filter(item => item.id !== itemId);
    setItems(updatedList);
  }

  const clearList = () => {
    console.log('list cleared succesfully');
    setItems([]);
  }

  return (
    <ItemsContext.Provider value={{ items, addItem, removeItem, clearList }} >
      {children}
    </ItemsContext.Provider>
  )
}

