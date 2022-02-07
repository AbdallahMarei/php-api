import React,{useState,useEffect} from "react";
import "./get-users.css"

const GetUsers = () => {
    const [users,setUsers] = useState("");

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`http://localhost:80/api/products/fetchAll.php?yaser=${6}`);
            console.log(response);
            const data = await response.json();
            console.log(data);
            setUsers(data);
        }
        getData();
    },[])

    return(
        <div className="flex">
            {users ? users.map(user => <div className="user" key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
            </div>) : <p>bye</p>}
            
        </div>
    )

}

export default GetUsers