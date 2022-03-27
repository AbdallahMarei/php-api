import React,{useState,useEffect} from "react";
import "./get-users.css"
import axios from 'axios';

const GetUsers = () => {
    const [users,setUsers] = useState("");
    const [inputs,setInputs] = useState({
        name: "",
        phone: "",
        email: "",
        password: ""
    });
    const [submitted,setSubmitted] = useState(0)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`http://localhost:80/api/products/fetchAll.php`);
            console.log(response);
            const data = await response.json();
            console.log(data);
            setUsers(data);
        }
        getData();
    },[submitted])


    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:80/api/products/addUser.php`, inputs).then(res => {
            console.log(res)
            setSubmitted(submitted +1)
        })
    }
    return(
        <div className="flex">
            {users ? users.map(user => <div className="user" key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>) : <p>bye</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={inputs.name} onChange={handleChange}/>
                </div>
                <div>
                    <label>Phone</label>
                    <input type="tel" name="phone" value={inputs.phone} onChange={handleChange}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={inputs.email} onChange={handleChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={inputs.password} onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )

}

export default GetUsers