function Img ({currImg}) {
    if (currImg === 'default') {
        return (
            <h1>Hello we are HanIn Bridge !</h1>
        )
    }
    else if (currImg === 'aboutus') {
        return (
            <img src="" alt="Aboutus"></img>
        )
    }
    else if (currImg === 'interpretation') {
        return (
            <img src="" alt="Interpretation"></img>
        )
    }
    else if (currImg === 'consulting') {
        return (
            <img src="" alt="Consulting"></img>
        )
    }

}

export default Img;