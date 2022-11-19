import styled from "styled-components";
import { colours } from "../../UI/colours";
import logoTweet from "../../../public/icons-footer/twitter.png"
import logoFace from "../../../public/icons-footer/face.png"
import logoinsta from "../../../public/icons-footer/insta.png"
import logoyoutube from "../../../public/icons-footer/youtube.png"
import imgLocation from "../../../public/icons-footer/location.png"



const Container = styled.footer `
    width: 100%;
    height: 300px;
    background-color: ${colours.primary} ;

    box-sizing: border-box;
    padding: 2% 5% ;
    display: flex ;

    p{
        margin: 0 0 7% 0 ;
    }

    a{
        text-decoration: none ;
    }

`

const SectionLinks = styled.section`
    width: 15% ;
    height: 100%;

    display: flex ;
    flex-direction: column ;

    p{
        color: ${colours.white};
    }

    a{
        color: ${colours.light_text} ;
        margin-bottom: 3% ;
    }
`

const SectionIcons = styled.section`
    width: 55% ;
    height: 100% ;

    display: flex ;
    flex-direction: column ;
    align-items: flex-end ;
    

    .icons{
        margin: 7% 0 3% 0 ;

        img{
            margin-left: 5% ;
            width: 20% ;
        }

    }
    
    span{
        color: ${colours.white};
      
    }

    p{
        color: ${colours.light_text} ;
        margin-top: 5% ;
    }
    
`

const itenCategory = [
    "Skincare",
    "Personal Care",
    "Handbags",
    "Apparels",
    "Apparels",
    "Watches",
    "Eye Wear",
    "Jewellery"
]

const itemAbout = [
    "Contact Us",
    "Abaut Us",
    "Careers",
    "Press"
]

const itemPolicy = [
    "Return Policy",
    "Terms of Use",
    "Sitemap",
    "Security",
    "Privacy",
    "EPR Compliance"
]

export const Footer = () => {
    return(
        <Container>
            <SectionLinks>
                <p>Shop by Category</p>
                {itenCategory.map(item => <a href="">{item}</a>)}
            </SectionLinks>
            <SectionLinks>
                <p>About</p>
                {itemAbout.map(item => <a href="">{item}</a>)}
            </SectionLinks>
            <SectionLinks>
                <p>Policy</p>
                {itemAbout.map(item => <a href="">{item}</a>)}
            </SectionLinks>
            <SectionIcons>
                <div className="icons">
                    <img src= {logoFace} alt="Facebook" />
                    <img src= {logoinsta} alt="Instagram" />
                    <img src= {logoTweet} alt="Twiter" />
                    <img src= {logoyoutube} alt="Youtube" />
                </div>
                <div>
                    <img src ={imgLocation} alt="Incone Local" />
                    <span>United States</span>
                </div>
                <div>
                    <p>© 2021 | Cora Leviene All Rights Reserved</p>
                </div>
            </SectionIcons>
        </Container>
    )
}