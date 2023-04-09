export const St1 = async () => {
    const response = await fetch('http://localhost:4000/st2'); // Replace with your server URL if different
    const responseData = await response.json();
    return responseData
}

export const St2 = async () => {
    const response = await fetch('http://localhost:4000/st1'); // Replace with your server URL if different
    const responseData = await response.json();
    return responseData
}