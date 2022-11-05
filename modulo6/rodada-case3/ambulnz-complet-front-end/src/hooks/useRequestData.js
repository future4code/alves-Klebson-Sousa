import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (initialState, url) => {

    const [data, setData] = useState(initialState)

    const getData = async () => {
        await axios.get(url, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return data
}