import  { createContext, useState, ReactNode } from "react";

interface PropsChildren {
    children: ReactNode,
}

interface TypeContex {
    qtd : number,
    setQtd: (qtd:number) => void,
    operation: string,
    setOperation: (operation : string) => void
}

export const Context = createContext<TypeContex>({qtd : 0, setQtd: () => {}, operation: "plus", setOperation: () => {}})

export const ContextStepper = ({children} : PropsChildren) => {
    const [qtd, setQtd] = useState(1)
    const [operation, setOperation] = useState("plus")

    return (
        <Context.Provider value={{qtd, setQtd, operation, setOperation}}>
            {children}
        </Context.Provider>
    )                                                                                                       

}