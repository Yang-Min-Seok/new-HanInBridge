import { ImgContainorAboutus, ImgContainorConsulting, ImgContainorDefault, ImgContainorInterpretation, Title1, Title2, ShortSummary, LocationAndWeather } from "./style";
import getUserLocationAndWeather from "../../apis/locationAndWeather";
import { useEffect, useState } from "react";
import useGeolocation from "react-navigator-geolocation";
function Img ({currImg}) {
    
    const [data, setData] = useState();
    const { isEnabled, coords } = useGeolocation();
    useEffect(() => {
        async function fetchUserLocationAndWeatherData(isEnabled, coords) {
        const data = await getUserLocationAndWeather(isEnabled, coords);
        setData(data);
        }
        fetchUserLocationAndWeatherData(isEnabled, coords);
    }, [isEnabled, coords]);

    // default screen
    if (currImg === 'default') {

        return (
            <ImgContainorDefault>
                <Title1>
                    Hello,
                </Title1>
                <Title2>
                    We are HanIn Bridge !
                </Title2>
                <LocationAndWeather>
                    {data}
                </LocationAndWeather>
            </ImgContainorDefault>
            
        )
    }

    // screen to show when user hands over on button 'About us'
    else if (currImg === 'aboutus') {
        return (
            <ImgContainorAboutus>
                <ShortSummary>
                    HanIn Bridge,<br />
                    우리의 Partners,<br />
                    Director를 소개합니다
                </ShortSummary>
            </ImgContainorAboutus>
        )
    }

    // screen to show when user hands over on button 'Interpretation'
    else if (currImg === 'interpretation') {
        return (
            <ImgContainorInterpretation>
                <ShortSummary>
                    HanIn Bridge의<br />
                    핵심 서비스인<br />
                    번역 서비스를 소개합니다
                </ShortSummary>
            </ImgContainorInterpretation>
        )
    }

    // screen to show when user hands over on button 'Consulting'
    else if (currImg === 'consulting') {
        return (
            <ImgContainorConsulting>
                <ShortSummary>
                    함께, 인도네시아로<br />
                    HanIn Bridge의<br />
                    무역컨설팅을 소개합니다
                </ShortSummary>
            </ImgContainorConsulting>
        )
    }

}

export default Img;