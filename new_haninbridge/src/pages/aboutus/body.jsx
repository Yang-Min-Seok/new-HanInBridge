import { BodyDiv, IntroBox, IntroUpTitle, IntroDownTitle, IntroContentBox, IntroContent, PartnerBox, PartnerTitle, PartnerSlide, DirectorBox, DirectorTitle, DirectorContentBox, DirectorImg, DirectorNameAndContentBox, DirectorName, DirectorContent } from "./style";
function Body() {
    return (
        <BodyDiv>
            <IntroBox>
                <IntroUpTitle>Hanin Bridge</IntroUpTitle>
                <IntroDownTitle>한인브릿지</IntroDownTitle>
                <IntroContentBox>
                    <IntroContent>
                        한인브릿지는 한국 기업들이 인도네시아로 진출할 수 있도록<br/>
                        도움을 주고자하는 사업을 하고 있습니다.<br/>
                        각종 수출입 계약에 관한 서류 번역부터,<br/>
                        수준 높은 수출 상담회 통역,<br/>
                        더 나아가 현지에서 열리는 전시회 참가를 함으로써<br/>
                        인도네시아 진출을 어려워하는 한국 기업이 <br/>
                        더욱 원활하게 인도네시아로 나아갈 수 있도록 다리 역할을합니다.<br/>
                        한인브릿지와 함께 인도네시아로 나아가<br/>
                        인도네시아와 한국이 보다 쉽게 연결될 수 있다는 것을 경험할 수 있습니다.<br/>
                    </IntroContent>
                </IntroContentBox>
            </IntroBox>
            <PartnerBox>
                <PartnerTitle>Our Partners</PartnerTitle>
                <PartnerSlide>

                </PartnerSlide>
            </PartnerBox>
            <DirectorBox>
                <DirectorTitle>Director</DirectorTitle>
                <DirectorContentBox>
                    <DirectorImg></DirectorImg>
                    <DirectorNameAndContentBox>
                        <DirectorName>Jin Woo Park</DirectorName>
                        <DirectorContent>
                            ・ 한국외국어대학교 말레이-인도네시아어과 졸업 <br/>
                            ・ 한인브릿지 대표<br/>
                            ・ 기업경력<br/>
                            - KCC글라스 공장 가동 메뉴얼 인도네시아어 번역<br/>
                            - 각종 RPG 모바일 게임 인도네시아어 번역<br/>
                            - 한국무역협회 개최 온라인 수출 상담회 통역<br/>
                            ・ 개인경력<br/>
                            - KBS World Radio Indonesia 고정 출연 DJ<br/>
                            - 조코 위도도 대통령 청계천 행사 인도네시아어 통역<br/>
                            - 대기업/중소기업 인도네시아어 기업 강사<br/>
                            - SBS/Net.TV 예능 ‘Good Friends’ 통역 PD<br/>
                            - 뷰티웰팜 의학 세미나 담당 지정 통역<br/>
                            - 한국무역협회 지정 인도네시아어 통역사<br/>
                            - MBC, SBS, KBS, JTBC 인도네시아어 자막 번역<br/>
                            - 미래창조과학부 ‘한국정부와 인도네시앙 농.어촌 브로드밴드 네트워크 구축 산업’ 현장 통역<br/>
                            - JETEMA 의학 세미나 지정 인도네시아어 통역사<br/>
                            - SBS 정글의 법칙 ‘코모도 편’ 인도네시아어 통역 및 자막 번역<br/>
                            - ISWAM 의학 세미나 인도네시아어 통역 및 자막 번역<br/>
                        </DirectorContent>
                    </DirectorNameAndContentBox>
                </DirectorContentBox>
            </DirectorBox>
        </BodyDiv>
    )
}

export default Body