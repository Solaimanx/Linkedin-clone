import React from 'react'
import './HeaderOption.css' 

import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function HeaderOption({ Icon, title, avatar, onClick }) { // this is an 
    
    const user = useSelector(selectUser);
     
    return (
       <div onClick={onClick} className="headerOption">
           {Icon && 
           <Icon className="headerOption__icon" />}
           {avatar &&
           <Avatar src={user?.photoUrl}  className="headerOption__icon">
               {user?.email[0]}
           </Avatar>

           

           }

           <h3 className="headerOption__title">{title}</h3>
       </div>
    )
}

export default HeaderOption; 