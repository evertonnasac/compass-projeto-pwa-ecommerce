import  { createContext, useState, ReactNode } from "react";

interface PropsChildren {
    children: ReactNode,
}

interface TypeContex {
    currentBag : IBag,
    setCurrentBag: React.Dispatch<React.SetStateAction<IBag>>,
    getBag : () => IBag,
    setBag : (bag : IBag) => void,
    visible : boolean,
    setVisible : React.Dispatch<React.SetStateAction<boolean>>
}

export type ProductsBagInfo = {
    _id : string | undefined,
    brand: string | undefined,
    description: string | undefined,
    qte : number | undefined,
    price : number | undefined,
    rebate: number | undefined,
    urlPhoto: string | undefined,
}

export interface IBag {
    products : ProductsBagInfo[],
    tax: number,
}

const bagLocal : IBag =  {products : [], tax : 2}

export const Context = createContext<TypeContex>({currentBag: bagLocal, 
    setCurrentBag : () => {}, getBag : () => bagLocal, visible: false, setVisible : () => {}, setBag: () => {}})


export const ContextBag = ({children} : PropsChildren) => {
    const [visible, setVisible]  = useState(false)
    const [currentBag, setCurrentBag] = useState<IBag>(bagLocal)
    const getBag  = () => localStorage.getItem("bag") ? JSON.parse(localStorage.getItem("bag") || "") : {products : [], tax : 2}
    const setBag = (bag : IBag) => localStorage.setItem("bag", JSON.stringify(bag))

    return (
        <Context.Provider value={{currentBag, setCurrentBag, getBag, visible, setVisible, setBag}}>
            {children}
        </Context.Provider>
    )                                                                                                       

}