import { Link } from 'react-router-dom';


const HomePage = () =>{
    return (
    <div>Home Page
        <div><Link to='/user'>User</Link></div>
        <div><Link to='/shop'>Let's do some shopping</Link></div>
    </div>
        
    )
}

export default HomePage;