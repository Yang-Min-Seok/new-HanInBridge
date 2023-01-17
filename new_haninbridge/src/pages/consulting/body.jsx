import { BodyDiv, Intro, IntroUpTitle, IntroDownTitle, IntroContentBox, IntroContent, History, HistoryTitle, HistoryContentBox, HistoryContent, SlideBox } from "./style"

function Body() {
    return (
        <BodyDiv>
            <Intro>
                <IntroUpTitle>
                    Consulting
                </IntroUpTitle>
                
                <IntroDownTitle>
                    함께, 인도네시아로
                </IntroDownTitle>
                
                <IntroContentBox>
                    <IntroContent>
                        한인브릿지 컨설팅은,< br/>
                        한국 기업들 또는 개인이 인도네시아로 진입할 수 있게끔< br/>
                        수많은 인도네시아에 대한 지식과 경험< br/>
                        그리고 이해도를 쌓아왔으며,< br/>
                        그 높은 진입 장벽을 뚫을 수 있게끔 다리 역할을 하고 있습니다.< br/>
                        한인브릿지 컨설팅의 실전 바탕의 인도네시아< br/>
                        경험을 기반으로,< br/>
                        인도네시아 진입 시 큰 어려움 없도록 최선을 다하여< br/>
                        길을 열어 드립니다.
                    </IntroContent>
                </IntroContentBox>
            </Intro>

            <History>
                <HistoryTitle>
                    The path we've been through
                </HistoryTitle>
                <SlideBox>

                </SlideBox>
                <HistoryContentBox>
                    <HistoryContent>
                        인도네시아는 흔히 기회의 땅이라고 불리는 국가이지만,< br/>
                        진입 장벽이 높고 인도네시아에 대한 지식과< br/>
                        실전 경험이 부족하면 많은 어려움을 겪는 곳으로 알려져 있습니다.< br/>
                        또한 절차가 매우 복잡하기에,< br/>
                        시도도 못하고 포기하는 한국 기업들이 다수 생겨,< br/> 
                        기회가 많이 사라지곤 합니다.< br/>
                        그럼에도 3억 인구에 육박하는 인도네시아는< br/>
                        K-Contents에 대한 열정과 사랑이 넘쳐나는 국가로,< br/>
                        한국 기업들에게는 큰 기회라고 볼 수 있습니다.< br/>
                    </HistoryContent>
                </HistoryContentBox>
            </History>
        </BodyDiv>
    )
}

export default Body