const FGetMenu = async () => {
    const apiUrl = "http://localhost:4000/get_menu";
    const res = await fetch(apiUrl, {
        method: "GET"
    })
    const jsonResp = await res.json()
    return jsonResp
}

export default FGetMenu;
