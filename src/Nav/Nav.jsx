import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav(props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">NOXE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {props.userData ? <><li className="nav-item">
                            <Link className="nav-link " aria-current="page" to='home'>Home</Link>
                        </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to='movie'>MovieTetail</Link>
                            </li>
                           
                        </> : ""}


                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item d-flex align-items-center me-4">
                            <i className='fab fa-instagram me-2'></i>
                            <i class="fab fa-facebook-f me-2   "></i>
                            <i class="fab fa-twitter  me-2 "></i>
                            <i class="fab fa-snapchat me-2   "></i>

                        </li>
                        {props.userData?<><li className="nav-item">
                            <span className="nav-link"  onClick={props.logout}>logout</span>
                        </li></>:<> <li className="nav-item">
                            <Link className="nav-link" to='register'>register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='login'>login</Link>
                        </li></>}
                        
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}
