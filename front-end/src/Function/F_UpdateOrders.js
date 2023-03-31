const FUpdateOrders = async (id, updatedItems) => {
    const apiUrl = `http://localhost:4000/tablesUpdate/${id}`;
    const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            orders: updatedItems,
        }),
    });
    const data = await response.json();
}

export const FAddOrder = async(id,selectedItem,qty) => {
    const apiUrl = `http://localhost:4000/add_order/${id}`;
    const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            item: selectedItem,
            quantity: qty,
        }),
    });
    const data = await response.json();
}


export const FDeleteOrder = async(tid,oid) => {
    const apiUrl = `http://localhost:4000/removeitem`;
    const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

            tableId:tid,
            orderId : oid
        }),
    });
    const data = await response.json();
}

export default FUpdateOrders;
