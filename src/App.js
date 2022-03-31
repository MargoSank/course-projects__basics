import React, {Fragment, useState} from "react";

import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";


function App() {
    const [usersList, setUsersList] = useState([
        {name: "Jane Smith", age: 25, id: "1"},
        {name: "Mike Jones", age: 30, id: "2"}
    ])
    const addUserHandler = (userName, userAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {name: userName, age: userAge, id: Math.random().toString()}
            ];
        })
    }

    return (
        <Fragment>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </Fragment>
    );
}

export default App;
