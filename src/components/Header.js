import React from 'react'

function Header() {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-white shadow-sm'>
        <div className="container">
            <a class="navbar-brand" href="#">

                <img width="150" src="https://justmac.com/storage/images/justmac-logo-black.svg" alt=""/>

            </a>

            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav dc'>
                    <li class="nav-item">
                        <div>
                            <a href="http://repair.justmac.com/" class="nav-link"> Repair </a>
                        </div>
                    </li>                
                    <li class="nav-item">
                        <div>
                            <a href="http://repair.justmac.com/" class="nav-link"> Sell </a>
                        </div>
                    </li>                
                    <li class="nav-item">
                        <div>
                            <a href="http://repair.justmac.com/" class="nav-link"> Franchise </a>
                        </div>
                    </li>                
                    <li class="nav-item">
                        <div>
                            <a href="http://repair.justmac.com/" class="nav-link"> Laptop </a>
                        </div>
                    </li>                
                    <li class="nav-item">
                        <div>
                            <a href="http://repair.justmac.com/" class="nav-link"> iPhones </a>
                        </div>
                    </li>                
                    <li class="nav-item">
                        <div>
                            <a href="http://repair.justmac.com/" class="nav-link"> Contact Us </a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="flash-border">
                            <b>
                                <a href="/offers/specialDeals" id="flash" class="nav-link">Flash Sale </a> 
                            </b>
                        </div>

                    </li>                
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header