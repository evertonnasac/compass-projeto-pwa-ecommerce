import  { createContext, useState, ReactNode } from "react";

interface PropsChildren {
    children: ReactNode,
}

interface TypeContex {
    total : number,
    setTotal: React.Dispatch<React.SetStateAction<number>>
}

export const Context = createContext<TypeContex>({total : 0, setTotal: () => {}})

export const ContextBag = ({children} : PropsChildren) => {
    const [total, setTotal] = useState(0)

    return (
        <Context.Provider value={{total, setTotal}}>
            {children}
        </Context.Provider>
    )                                                                                                       

}