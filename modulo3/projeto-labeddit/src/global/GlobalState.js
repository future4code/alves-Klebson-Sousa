import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export default function GlobalState(props) {
    const [listPosts, setListPosts] = useState({})

    const values = {
        listPosts, setListPosts
    }
    const Provider = GlobalContext.Provider

    return <Provider value={values}>{props.children}</Provider>
}