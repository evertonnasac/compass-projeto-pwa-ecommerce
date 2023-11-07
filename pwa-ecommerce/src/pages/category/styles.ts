import styled from "styled-components";

export const StyleContainer = styled.main`
    width: 98%;
    margin: 0 auto ;
    display: flex ;
    flex-direction: column ;
    gap: 25px;
    
`

export const StyleMainSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const StyleContainerLateralFilter = styled.aside`
    width: 23%;

    @media (max-width: ${({theme}) => theme.screen.large}) {
        display: none;
    }
`

export const StyleContainerBottomFilter = styled.div`
     display: flex ;
        align-items: center ;
        justify-content: space-evenly ;
        height: 56px ;
        width: 100%;
        
        div{
            cursor: pointer;
        }

        img{
            margin: 5px 15px 0 0;
        }
        span{
            font-size: 18px ;
        }

        @media (min-width : 899px){
            display: none ;
        }

` 

export const WrapperFilterModal = styled.div`
    width: 95%;

`

export const WrapperBanner = styled.div`
     @media (max-width: ${({theme}) => theme.screen.large}) {
        display: none;
    }
`

export const WrapperBreadcrumbs = styled(WrapperBanner)``

export const StyleContainerProducts = styled.section`
    width: 75%;
    display: flex ;
    justify-content: space-around ;
    align-items: center;
    flex-wrap: wrap ;

`

export const StyleCardProduct = styled.div`
    width: 30% ;
    height: 300px ;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;

    @media (max-width : 899px ){
        width: 40%;
    }

    @media (max-width: 350px){
        width: 100% ; 
    }
`




