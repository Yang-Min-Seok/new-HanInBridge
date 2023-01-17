import { FooterDiv, FooterLogo, InfoDiv, AddressAndCopyright, ContactAndRegisteredNumber } from "./footerStyle"

function Footer() {
    return (
        <FooterDiv>
            <FooterLogo></FooterLogo>
            <InfoDiv>
                <AddressAndCopyright>
                    <p>경기도 의정부시 의정부동 520-17, 302호</p>
                    <p>302, 520-17 Uijeongbu-dong, Uijeongbu-si, Gyeonggi-do, Republic of Korea</p>
                    <p>©2023 kurooru allrights reserved.</p>
                </AddressAndCopyright>
                <ContactAndRegisteredNumber>
                    <p>Tel : +82 010-8533-9724</p>
                    <p>사업자등록번호 : 160-18-01500</p>
                </ContactAndRegisteredNumber>
            </InfoDiv>
        </FooterDiv>
    )
}

export default Footer