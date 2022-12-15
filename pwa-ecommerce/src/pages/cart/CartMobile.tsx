import styled from "styled-components";
import typography from "../../UI/typography";
import { colours } from "../../UI/colours";
import { ContainerBack } from "../../components/mobile/HeaderBack";
import { Context } from "../../Contexts/ContexBag";
import { useContext, useState,useEffect } from "react";
import iconAddress from "../../../public/icons/address-sumary-mob.png"
import { Button } from "../../components/buttons/Button";
import { ModalInferior } from "../../components/modais/modal-inferior/ModalInferior";
import { RadioButton } from "../../components/inputs/RadioButton";
import { useNavigate } from "react-router-dom";

const StyleCart = styled.section`  
    width: 100% ;
    margin-bottom:  100px;

    @media (min-width : 899px){
        display: none ;
    }

    .btn_cart_mobile{
        position: fixed ;
        bottom: 10px ;
        transform: translateX(-50%) ;
        left: 50% ;
    }

`

export const ContainerAddress = styled.div`  
    width: 95% ;
    margin: 50px auto ;


    .title_address{
        font-size: ${typography.headingS14.fontSize} ;
        font-weight: ${typography.headingS14.fontWeight} ;
        color: ${colours.low_emphasis};
        margin: 0 ;
    }

    .container_address{
        display: flex ;
        justify-content: space-evenly ;
        background-color: ${colours.accent} ;
        align-items: center ;
        height: 75px ;

        p{
            margin: 2px 0;
        }

        img{
            height: 70% ;
        }

        .resume_address{
            font-size: ${typography.headingS14.fontSize} ;
            font-weight: ${typography.headingS14.fontWeight} ;
            width: 75% ;

            & p:first-child{
               color: ${colours.high_emphasis} ;
            }
            & p:nth-child(){
                color: ${colours.low_emphasis} ;
            }
        }
    }
`

export const ContainerItensOrderer = styled.div` 
    width: 95%;
    margin: 0 auto ;

    .title_card{
        color: ${colours.low_emphasis} ;
        
    }

    .container_card{
        display: flex ;
        gap: 5%;

        img{
            width: 80px ;
            height: 80px ;
            border-radius: 16px ;
        }

        .info_orderer_mobile {

            .date{
                font-size: ${typography.paragraphS12.fontSize} ;
                font-weight: ${typography.paragraphS12.fontWeight} ;
            }
        
            .desc{
                font-size: ${typography.paragraphM12.fontSize} ;
                font-weight: ${typography.captiomM12.fontWeight} ;
                color: ${colours.low_emphasis}
            }
        }

    }

`

const ContentModalInferior = styled.div` 
    p{
        margin: 0 ;
    }
    .title_modal{
        display: flex ;
        justify-content: space-between ;
        font-size: ${typography.headingS14.fontSize} ;
        font-weight: ${typography.headingS14.fontWeight} ;
        margin: 20px ;


        .text_title{
            color: ${colours.low_emphasis} ;
        }
        .add_address{
            color: ${colours.primary} ;
            cursor: pointer ;
        }

    }
    .radio_address{
        .street{
            color: ${colours.high_emphasis};
            font-size: ${typography.headingS14.fontSize} ;
            font-weight: ${typography.headingS14.fontWeight} ;

        }
    }

    .btn_modal_address{
        margin: auto ;
        margin-bottom: 10px;
    }

`

export const CartMobile = () => {

    const {currentBag, setCurrentBag, setBag, getBag} = useContext(Context)
    const [modal, setModal] = useState(false)
    const nav = useNavigate()

    return(
        <StyleCart>
            <ContainerBack title="Order Sumary"/>
            <ContainerAddress onClick={() => setModal(!modal)}>
                <p className="title_address">Deliver To</p>
                <div className="container_address">
                    <div className="resume_address">
                        <p>Ruby S Snively</p>
                        <p>1460  Jenric Lane, Ashmor Drive </p>
                    </div>
                    <img src={iconAddress} alt = "Alterar endereço" />
                </div>
            </ContainerAddress>
            <ContainerItensOrderer>
                <p className="title_card">Expected Delivery</p>
                {currentBag.products.map((item) => {
                    return  <div className="container_card">
                                <img src={item.urlPhoto} alt="Imagem do produto" />
                                <div className="info_orderer_mobile">
                                    <p className="date">09 Dec</p>
                                    <p className="desc">{item.brand}</p>
                                    <p className="desc">{item.description}</p>
                                </div>
                            </div>
                })}          
            </ContainerItensOrderer>
            <ModalInferior open = {modal}>
                <ContentModalInferior>
                    <div className="title_modal">
                        <p className="text_title">Select Delivery Address</p>
                        <p className="add_address">+ Add address</p>
                    </div>
                    <RadioButton disabled={false} id="1" name="address" value="1" >
                        <div className="radio_address">
                            <p className="street">Elm Street</p>
                            <p className="number_city">
                                <span className="number">303</span>
                                <span className="city">Los Angles</span>
                            </p>
                            <p className="state">California</p>
                            <p className="pin_code">11-555-999</p>
                        </div>
                    </RadioButton>
                    <RadioButton disabled={false} id="1" name="address" value="1" >
                        <div className="radio_address">
                            <p className="street">Crystal Lake</p>
                            <p className="number_city">
                                <span className="number">13</span>
                                <span className="city">Tolland</span>
                            </p>
                            <p className="state">Connecticut</p>
                            <p className="pin_code">00-965-456</p>
                        </div>
                    </RadioButton>
                    <Button type="primary" className="btn_modal_address"  width = "90%" height="43px" >Delivery Here</Button>
                </ContentModalInferior>
            </ModalInferior>
            <Button onclick={() => nav("/checkout")} type="primary" className="btn_cart_mobile" height="45px" width="90%">Process to Payments</Button>
        </StyleCart>
    )

}