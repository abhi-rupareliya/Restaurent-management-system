import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import jwt_decode from "jwt-decode"
const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('myToken')) {
            const decoded = jwt_decode(localStorage.getItem('myToken'))
            if (decoded.user.role === 'manager') {
                navigate("/manager/"+decoded.user.id)
            }
            else {
                navigate("/cashier/"+decoded.user.id)
            }
        } else {
            navigate('/login')
            console.warn('Login first')
        }
    },)


}

export default Home;