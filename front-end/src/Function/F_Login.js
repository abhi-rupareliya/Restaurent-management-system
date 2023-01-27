const FLogin = async(Email,Password) => {
    const apiUrl = "http://localhost:4000/login";

    const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: Email, password: Password })
    });
    const json = await res.json()
    return json;
}

export default FLogin;