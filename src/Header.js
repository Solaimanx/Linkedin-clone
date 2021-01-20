import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'

function Header() {
    return (
        <div className="header">
        
            
            <div className="header__left">
                
         <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt=""/>
                <div className="header__search">
                        <SearchIcon />
                        <input type="text" />
                </div>
        </div>
        <div className="header__right">
                
        </div>
</div>
    )
}

export default Header


