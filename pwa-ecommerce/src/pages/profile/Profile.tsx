import styled from "styled-components";
import { ProfileMobile } from "./ProfileMobile";
import { ProfileDektop } from "./desktop/ProfileDesktop";


const StyleContainer = styled.section` 
    width: 100% ;

`

export const Profile = () => {
    return (
     
        <StyleContainer>
            <ProfileMobile/>
            <ProfileDektop/>
        </StyleContainer>

    )
}