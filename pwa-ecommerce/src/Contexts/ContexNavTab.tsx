import {useState, createContext, ReactNode} from "react"

interface TypeContex {
    itemSelected: string,
    setItemSelected: (selected: string) => void
}

type UserContextProps = {
    children: ReactNode
}



export  const Context =  createContext<TypeContex>({itemSelected: "", setItemSelected: () => {}})

export const ContextNavTab = ({children} : UserContextProps) => {

    const [itemSelected, setItemSelected ] = useState("init")

    return(
        <Context.Provider value={{itemSelected, setItemSelected}}>
            {children}
        </Context.Provider>
    )
}