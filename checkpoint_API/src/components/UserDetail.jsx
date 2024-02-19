/* eslint-disable react/prop-types */
// UserDetail component that receives a 'user' prop
const UserDetail = ({user}) => {
    return (
        <div className='border pt-2 ps-3' style={{width: '300px', height:'370px'}}>
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Address: {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
        </div>
    )
}

export default UserDetail