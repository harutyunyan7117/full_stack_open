const ListEntry = ({ country, onClick }) => {
    return (
        <p>
            {country.name.common}
            <button onClick={onClick}>show</button>
        </p>
    )
}

export default ListEntry
