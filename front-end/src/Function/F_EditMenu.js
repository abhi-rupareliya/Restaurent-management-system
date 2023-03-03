export const FEditMenu = async (Menu) => {
    console.warn(Menu);
    const apiUrl = "http://localhost:4000/UpItem/" + Menu._id;

    const res = await fetch(apiUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "myToken": localStorage.getItem("myToken")
        },
        body: JSON.stringify(Menu)
    });
    const json = await res.json()
    return json;
}
export const FDeleteMenu = async(_id) => {
    const apiUrl = "http://localhost:4000/delete_menu/" + _id;
    const res = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "myToken": localStorage.getItem("myToken")
        }
    })
    const json = await res.json()
    return json;
}
