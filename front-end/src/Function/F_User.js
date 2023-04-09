export const FGetUsers = async () => {
    const response = await fetch('http://localhost:4000/AllUser')
    const users = await response.json()
    return users
}

export const FDeleteUser = async (id) => {
    const response = await fetch(`http://localhost:4000/deleteUser/${id}`, { method: 'DELETE' });
    const data = await response.json();
    console.log(data);
}