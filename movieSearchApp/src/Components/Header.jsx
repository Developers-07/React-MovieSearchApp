import React from 'react'
import './header.css'
 
const Header = (props) => {

  const {user,lgOut, usName}=props;

  return (
    <>
        <div className='intro'>
          
          <h1> MoviesWorld </h1>
          <h3>{user}</h3>

          {
            usName ?  <button onClick={() =>{
              lgOut("")
            }}>LogOut</button> : <></>
          }

        </div>
    </>
  )
}

export default Header
