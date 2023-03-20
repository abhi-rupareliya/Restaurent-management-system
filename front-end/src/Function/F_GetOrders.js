const FGetOrders = async (id) => {
    const apiUrl = "http://localhost:4000/get_det/"+id;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data
}

export default FGetOrders;
