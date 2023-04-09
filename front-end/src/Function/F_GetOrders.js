export const FGetOrders = async (id) => {
    const apiUrl = "http://localhost:4000/get_det/" + id;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data
}

export const FGetAllOrders = async () => {
    const api = "http://localhost:4000/orders"
    const resp = await fetch(api)
    const data = await resp.json()
    return data
}


export const FGetOrderByID = async (id) => {
    const api = `http://localhost:4000/orders/${id}`
    const resp = await fetch(api)
    const data = await resp.json()
    return data
}