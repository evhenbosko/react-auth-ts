
import {Link} from "react-router-dom"
const NavBar=()=>{
    return (
        
       <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div className="container-fluid">
    <Link  to='/'className="navbar-brand">Home </Link>
    
    <div >
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        
        <li className="nav-item">
          <Link to='/Login' className="nav-link" >Login</Link>
        </li>
        <li className="nav-item">
          <Link to='SignUp' className="nav-link" >SignUp</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

    )
}
export default NavBar