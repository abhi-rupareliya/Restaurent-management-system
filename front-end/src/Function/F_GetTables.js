import React from 'react';

const FGetTables = async() => {
    const apiUrl = "http://localhost:4000/getTabs"
    const res = await fetch(apiUrl, {
        method: "GET"
    })
    const jsonResp = await res.json()
    return jsonResp
}

export default FGetTables;
