import { useState } from "react"


interface PropsInfoProduct {
    _id: string | undefined
    brand : string | undefined,
    description: string | undefined,
    rate: number | undefined,
    totalRatings: number | undefined,
    price: number | undefined,
    rebate: number | undefined,
    urlPhoto: string | undefined

}

export const Teste = (props: PropsInfoProduct) => {
    console.log(props)

    const [pr, setpt] = useState({...props})
    console.log(pr)
    return(
        <div></div>
    )
   
}