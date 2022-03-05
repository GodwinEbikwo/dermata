import React, { useState, useContext } from 'react'

export interface State {
  introContext: boolean
}

const initialState = {
  introContext: false,
}

export const IntroContext = React.createContext<State | any>(initialState)
