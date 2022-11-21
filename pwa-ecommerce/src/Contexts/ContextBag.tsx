import  { createContext, useState, ReactNode } from "react";

interface PropsChildren {
    children: ReactNode,
}

interface TypeContex {
    qtd : number,
    setQtd: (qtd:number) => void
}

export const Context = createContext<TypeContex>({qtd : 0, setQtd: () => {}})

export const ContextBag = ({children} : PropsChildren) => {
    const [qtd, setQtd] = useState(1)

    return (
        <Context.Provider value={{qtd, setQtd}}>
            {children}
        </Context.Provider>
    )

}