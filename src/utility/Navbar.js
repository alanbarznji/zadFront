import { Link, useLocation } from 'react-router-dom'
import logo from '../image/46291470-323146521837241-4876910488157421568-n.png'
import './utility.css'
const Navbar = () => {
  const Location=useLocation()
  console.log('====================================');
  console.log(Location.pathname.slice(0,12));
  console.log('====================================');
 return(
   
<nav class="navbar navbar-light bg-light login navs">
  <div class="container">
    <Link class="navbar-brand nav-image" to="/">
      <img src={logo} alt="" width="30" height="24"/>
    </Link>
  <div className='login'>
{Location.pathname==='/AdminHome'||Location.pathname.slice(0,12)==='/FormyPrkraw'||
Location.pathname ==='/signup'||
Location.pathname ==='/Hawkar'||
Location.pathname ==='/History'?
        <li class="DropDown nav-item dropdown d-flex">
        <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Link
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
          <li><Link class="dropdown-item" to={'/Hawkar'}>هاوکارەکان</Link></li>
          <li><Link class="dropdown-item" to={'/AdminHome'}> فۆرمی گەیشتوو</Link></li>
          <li><hr class="dropdown-divider"/></li>
          <li><Link class="dropdown-item" to={'/History'}>فۆرمی کۆن</Link></li>
        </ul>
      </li>:<Link to={"login"} className='LoginClass'>Log<p>in</p></Link> }
  </div>
  </div>
</nav>
  
  )
}

export default Navbar