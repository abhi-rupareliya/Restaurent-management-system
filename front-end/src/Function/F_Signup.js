const FSignup = async(Email,Password,uname,role) => {
    const apiUrl = "http://localhost:4000/signup"

    const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: Email, password: Password, userName: uname , role:role})
    })
    const json = await res.json()
    return json
}

export default FSignup
