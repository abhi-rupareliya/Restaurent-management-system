export const FGetTables = async () => {
    const apiUrl = "http://localhost:4000/getTabs"
    const res = await fetch(apiUrl, {
        method: "GET"
    })
    const jsonResp = await res.json()
    return jsonResp
}

export const FAddTable = async (tab_id) => {
    const api = `http://localhost:4000/add_table/${tab_id}`
    const response = await fetch(api, {
        method: 'POST',
    });
    await response.json()
};
