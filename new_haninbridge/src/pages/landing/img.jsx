import { ImgContainorAboutus, ImgContainorConsulting, ImgContainorDefault, ImgContainorInterpretation, Title1, Title2 } from "./style";
function Img ({currImg}) {
    if (currImg === 'default') {
        return (
            <ImgContainorDefault>
                <Title1>
                    Hello,
                </Title1>
                <Title2>
                    We are HanIn Bridge !
                </Title2>
            </ImgContainorDefault>
            
        )
    }
    else if (currImg === 'aboutus') {
        return (
            <ImgContainorAboutus>
                <Title1>
                    
                </Title1>
            </ImgContainorAboutus>
        )
    }
    else if (currImg === 'interpretation') {
        return (
            <ImgContainorInterpretation>
                <Title1>

                </Title1>
            </ImgContainorInterpretation>
        )
    }
    else if (currImg === 'consulting') {
        return (
            <ImgContainorConsulting>
                <Title1>

                </Title1>
            </ImgContainorConsulting>
        )
    }

}

export default Img;