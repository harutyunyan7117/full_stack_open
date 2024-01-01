import axios from "axios";

const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    const response = axios.get(baseUrl)
    return response.then(response => response.data)
}

const createPerson = (personObject) => {
    const response = axios.post(baseUrl, personObject)
    return response.then(response => response.data)
}

const updatePerson = (personObject) => {
    const response = axios.put(`${baseUrl}/${personObject.id}`, personObject)
    return response.then(response => response.data)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll,
    createPerson,
    updatePerson,
    deletePerson,
}
