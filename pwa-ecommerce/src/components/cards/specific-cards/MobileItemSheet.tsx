import styled from "styled-components"
import {MobileItemOrdered}  from "./MobileItemOrdered"

export const MobileItemSheet = styled(MobileItemOrded)` 

    max-height: 75px ;
    span{
        .btn-add, .close, .stepper {
            display: none ;
        }
    }
`