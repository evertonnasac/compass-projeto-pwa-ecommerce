import styled from "styled-components";
import { Button } from "../../components/buttons/Button";
import imgSingup01 from "../../../public/images/signup/frame-1.png"
import imgSingup02 from "../../../public/images/signup/frame-2.png"
import imgSingup03 from "../../../public/images/signup/frame-3.png"
import { Link ,useNavigate } from "react-router-dom";



const StyleContainer = styled.section`  
    width: 100% ;
    min-height: 100vh;
    position: relative ;

    img{
        display: block ;
        width: 100% ;
        height: 25% ;
        margin-bottom: 15px ;
    }
`

const ContainerBotton = styled.div` 
    width: 100% ;
    margin:  0 auto;
    height: 30% ;
    position: absolute ;
    transform: translateX(-50%) ;
    left: 50% ;
    bottom: 10px ;
    background-image: linear-gradient(to top, white 70%, transparent) ;

 

    .container_botton_signup{
        width: 100% ;
        position: absolute ;
        bottom: 10px ;

        .title_signup{
            font-size: 30px ;
            font-weight: bold ;
            margin: 10px 0 ;
        }

        .btn_signup{
            margin: 10px auto ;
         }
         
         a{
            text-align: center ;
            text-decoration: none ;
            color: black ;
            width: 100% ;
            display: inline-block ;
            margin: 0 auto ;

         }
    }

   

`
export const Signup = () => {

    const nav = useNavigate()

    return(
        <StyleContainer>
            <img src={imgSingup01} />
            <img src = {imgSingup02}/>
            <img src={imgSingup03} />
            <ContainerBotton>
                <div className="container_botton_signup">
                <p className="title_signup">The shopping destination you need</p>
                    <Button className="btn_signup" onclick={() => nav("/register")} 
                        type="primary" width="95%" height="40px" >Get Started
                    </Button>
                    <Link to={"/login"} >I already have an account</Link>
                </div>
            </ContainerBotton>
        </StyleContainer>
        
    )
}