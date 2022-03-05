import React, { useState, useContext } from 'react'

export interface State {
  menuOpen: boolean
  cartOpen: boolean
}

const initialState = {
  menuOpen: false,
  cartOpen: false,
}

const AppContext = React.createContext<State | any>(initialState)
const AppStateProvider = AppContext.Provider

export default function AppProvider({ children }: any) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  function openSearchMenu() {
    setMenuOpen(true)
  }

  function closeSearchMenu() {
    setMenuOpen(false)
  }

  function toogleSearchMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <AppStateProvider
      value={{
        cartOpen,
        setCartOpen,
        menuOpen,
        setMenuOpen,
        openSearchMenu,
        closeSearchMenu,
        toogleSearchMenu,
      }}
    >
      {children}
    </AppStateProvider>
  )
}

function useMenu() {
  const all = useContext(AppContext)
  return all
}

export { AppStateProvider, useMenu }
