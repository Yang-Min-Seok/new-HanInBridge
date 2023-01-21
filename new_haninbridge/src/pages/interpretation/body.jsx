import { BodyDiv, IntroBox, IntroUpTitle, IntroDownTitle, IntroContentBox, IntroContent, InterpreterBox, InterpreterUpTitle, InterpreterDownTitle, PJWBox, PJWImg, PJWContentBox, PJWName, PJWContent, PJWResume, YTHBox, YTHContentBox, YTHName, YTHContent, YTHResume, YTHImg, ServiceBox, GeneralTitle, GeneralSlideAndContentBox, GeneralSlideBox, GeneralContentBox, GeneralContent, DocumentTitle, DocumentSlideAndContentBox, DocumentContentBox, DocumentContent, DocumentSlideBox, PhoneTitle, PhoneSlideAndContentBox, PhoneSlideBox, PhoneContentBox, PhoneContent } from "./style";

// swiper Js setting
import "swiper/css/bundle";
import "./generalSlideStyle.css";
import "./documentSlideStyle.css";
import "./phoneSlideStyle.css";

// import slides
import GeneralSlide from "./generalSlide"
import DocumentSlide from "./documentSlide"
import PhoneSlide from "./phoneSlide"

function Body() {
    return (

        <BodyDiv>
            <IntroBox>
                <IntroUpTitle>Hanin Bridge</IntroUpTitle>
                <IntroDownTitle>Interpretation Service</IntroDownTitle>
                <IntroContentBox>
                    <IntroContent>
                        한인브릿지 통.번역 팀은<br />
                        경험이 많고 전문성 있는<br/>
                        통.번역사들로 구성되어 있으며<br/>
                        각종 분야에 알맞는 통.번역가를 배정하여<br />
                        최고 퀄리티의 결과를 보여드립니다.<br/>
                    </IntroContent>
                </IntroContentBox>
            </IntroBox>

            <InterpreterBox>
                <InterpreterUpTitle>Our Interpreters</InterpreterUpTitle>
                <InterpreterDownTitle>최고의 번역가와 함께 질 높은 번역을 느껴보세요</InterpreterDownTitle>
                <PJWBox>
                    <PJWImg></PJWImg>
                    <PJWContentBox>
                        <PJWName>박진우 통 ・ 번역사</PJWName>
                        <PJWContent>
                            ・ 한국외국어대학교 말레이-인도네시아어과 졸업<br />
                            ・ 現 한인브릿지 대표
                        </PJWContent>
                        <PJWResume>Click to Download Resume</PJWResume>
                    </PJWContentBox>
                </PJWBox>
                <YTHBox>
                    <YTHContentBox>
                        <YTHName>양태훈 통 ・ 번역사</YTHName>
                        <YTHContent>
                            ・ 서울 중앙대학교 공과대학 기계공학부 졸업<br />
                            ・ 現 한인브릿지 팀장
                        </YTHContent>
                        <YTHResume>Click to Download Resume</YTHResume>
                    </YTHContentBox>
                    <YTHImg></YTHImg>
                </YTHBox>
            </InterpreterBox>

            <ServiceBox>
                <GeneralTitle>General Interpretation</GeneralTitle>
                <GeneralSlideAndContentBox>
                    <GeneralSlideBox>
                        <GeneralSlide></GeneralSlide>
                    </GeneralSlideBox>
                    <GeneralContentBox>
                        <GeneralContent>
                        한인브릿지 통역 서비스는<br />
                        현장 통역, 온라인 화상 통역 서비스를 제공하고 있습니다.<br />
                        인도네시아어 실력과<br />
                        다양한 분야에 전문성을 보유하고 있는 통역사가<br />
                        최고의 퀄리티로 인도네시아어라는 언어 장벽을 넘게 해드립니다.<br />
                        </GeneralContent>
                    </GeneralContentBox>
                </GeneralSlideAndContentBox>

                <DocumentTitle>Document Interpretation</DocumentTitle>
                <DocumentSlideAndContentBox>
                    <DocumentContentBox>
                        <DocumentContent>
                            한인브릿지 번역 서비스는<br />
                            간단한 일상 번역부터 전문 번역까지 경험이 많고<br />
                            각종 분야에 전문성 또한 풍부한 번역물로,<br />
                            신속함과 함께 차원이 다른 퀄리티와 결과물로<br />
                            한국과 인도네시아를 잇는 다리 역할을 책임집니다.
                            </DocumentContent>
                    </DocumentContentBox>
                    <DocumentSlideBox>
                        <DocumentSlide></DocumentSlide>
                    </DocumentSlideBox>
                </DocumentSlideAndContentBox>

                <PhoneTitle>Phone Interpretation</PhoneTitle>
                <PhoneSlideAndContentBox>
                    <PhoneSlideBox>
                        <PhoneSlide></PhoneSlide>
                    </PhoneSlideBox>
                    <PhoneContentBox>
                        <PhoneContent>
                            인도네시아에 있는 한국인 또는<br />
                            한국에 있는 인도네시아인들을 위한 전화 통역으로,<br />
                            공항, 경찰서, 병원, 그 외 긴급한 상황에서<br />
                            인도네시아어가 필요할 시 주저하지 말고 전화 주시면,<br />
                            신속하게, 차분하게, 정확하게 해결해드립니다.
                        </PhoneContent>
                    </PhoneContentBox>
                </PhoneSlideAndContentBox>
            </ServiceBox>
        </BodyDiv>
    )
}

export default Body