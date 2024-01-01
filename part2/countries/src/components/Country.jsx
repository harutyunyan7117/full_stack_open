import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

const api_key = import.meta.env.VITE_API_KEY

const Weather = ({ info }) => {
    const iconUrl = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
    return (
        <section>
            <h2>Weather in {info.name}</h2>
            <p>temperature {info.main.temp}</p>
            <img src={iconUrl} />
            <p>wind {info.wind.speed}</p>
        </section>
    )
}

const Country = ({ country }) => {
    const name = country.name.common
    const capital = country.capital[0]
    const area = country.area
    const languages = Object.values(country.languages)
    const flagUrl = country.flags.png
    const lat = country.capitalInfo.latlng[0]
    const lng = country.capitalInfo.latlng[1]

    const [temperatureInfo, setTemperatureInfo] = useState(null)

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`)
            .then(response => setTemperatureInfo(response.data))
            .catch(error => console.log(`Unable to get weather info for ${name}`))
    }, [])

    return (
        <section>
            <h1>{name}</h1>
            <p>capital {capital}</p>
            <p>area {area}</p>
            <h3>languages:</h3>
            <ul>
                {languages.map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            <img src={flagUrl}/>
            {temperatureInfo
                ? <Weather info={temperatureInfo} />
                : null}
        </section>
    )
}

export default Country