import { useState, useEffect } from 'react'
import axios from "axios"
import Results from './components/Results'

function App() {
    const [filter, setFilter] = useState("")
    const [countries, setCountries] = useState([])
    const [countriesToShow, setCountriesToShow] = useState(countries)

    useEffect(() => {
        axios
            .get("https://studies.cs.helsinki.fi/restcountries/api/all")
            .then(response => setCountries(response.data))
    }, [])

    const handleChange = (event) => {
        const newFilter = event.target.value
        setFilter(newFilter)
        setCountriesToShow(countries.filter(c => c.name.common.toLowerCase().includes(newFilter.toLowerCase())))
    }

    const showCountry = (country) => {
        setFilter(country.name.common)
        setCountriesToShow([country])
    }

    return (
        <div>
            find countries <input value={filter} onChange={handleChange} />
            {filter 
                ? <Results countries={countriesToShow} showCountry={showCountry} />
                : null
            }
        </div>
    )
}

export default App
