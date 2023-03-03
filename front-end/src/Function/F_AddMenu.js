import React from 'react';

const FAddMenu = async (Menu) => {
    const apiUrl = "http://localhost:4000/add_item";

    const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "myToken" : localStorage.getItem("myToken")
        },
        body: JSON.stringify(Menu)
    });
    const json = await res.json()
    return json;
}


export default FAddMenu;