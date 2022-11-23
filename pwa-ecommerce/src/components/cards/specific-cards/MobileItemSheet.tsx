import styled from "styled-components"
import {MobileItemOrdered}  from "./MobileItemOrdered"

export const MobileItemSheet = styled(MobileItemOrdered)` 

    max-height: 75px;

    span{
        .btn-add, .close, .stepper {
            display: none ;
        }
    }
`