import Country from "./Country"
import ListEntry from "./ListEntry"

const Results = ({ countries, showCountry }) => {
    if (countries.length === 1) {
        return (
            <Country country={countries[0]} />
        )
    }

    if (countries.length <= 10) {
        return (
            <>
                {countries.map(country => 
                    <ListEntry 
                        key={country.cca2} 
                        country={country} 
                        onClick={() => showCountry(country)} 
                    />
                )}
            </>
        )
    }

    return (
        <p>Too many matches, specify another filter</p>
    )
}

export default Results