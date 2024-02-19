import axios from 'axios';                                                  // Import the axios library for making HTTP requests
import { useEffect, useState } from 'react';
import UserDetail from './UserDetail';

const UserList = () => {
    const [users, setUsers] = useState([])                                  // Create a state variable 'users' using useState to store the list of users

    useEffect(() => {                                                       // Use useEffect hook to fetch data from the API when the component mounts
        const fetchData = async () => {                                     // Create an asynchronous function to fetch data from the API
            axios
            .get('https://jsonplaceholder.typicode.com/users')              // Make a GET request to the API endpoint
            .then((response) => {setUsers(response.data)})                  // Update the 'users' state with the data from the response
            .catch((error) => {console.error(error)})                       // Log any errors that occur during the request
        }

        fetchData()                                                         // Call the fetchData function to fetch data when the component mounts
    }, [])                                                                  // The empty dependency array ensures that the effect runs only once, when the component mounts

    return (
        <div className='d-flex-justify-content-center' style={{width: '1200px'}}>
            <h1 className='bg-info bg-gradient d-flex justify-content-center rounded-top-4 mt-4 mb-0 py-2'>List of Users :</h1>
            <ul className='bg-info-subtle d-flex flex-wrap justify-content-center rounded-bottom-4 mb-4 list-unstyled'>
                {users.map((user) => (                                                                                              // Map over the 'users' array and render the UserDetail component for each user
                    <li key={user.id}>
                        <UserDetail user={user}/>                                                                                   {/* Pass each user object as a prop to the UserDetail component */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList