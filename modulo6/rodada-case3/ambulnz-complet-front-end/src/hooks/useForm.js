import { useState } from "react"

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChangeForm = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]:value})
    }

    const clear = () => {
        setForm(initialState)
    }
    return {form, onChangeForm, clear}
}