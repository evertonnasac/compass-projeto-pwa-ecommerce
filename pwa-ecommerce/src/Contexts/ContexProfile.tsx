import {useState, createContext, ReactNode} from "react"

interface TypeContex {
    itemSelected: string,
    setItemSelected: (selected: string) => void
}

type UserContextProps = {
    children: ReactNode
}
