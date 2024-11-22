import { Link } from 'react-router-dom';


const UserPage = () =>{
    return (
        <div>User Page
            <div><Link to='/'>Go to home page</Link></div>
            <div><Link to='/shop'>Let's shop now</Link></div>
        </div>
            
        )
}

export default UserPage;