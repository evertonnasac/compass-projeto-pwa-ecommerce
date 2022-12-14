import styled from "styled-components";
import { ProfileMobile } from "./ProfileMobile";


const StyleContainer = styled.section` 
    width: 100% ;

`

export const Profile = () => {
    return (
        <StyleContainer>
            <ProfileMobile/>
        </StyleContainer>
    )
}