import React from 'react'
import PropTypes from 'prop-types'


function Header({text,bgColor,textColor}) {
    const headerStyle={
        backgroundColor:bgColor,
        color:textColor
    }

  return (
    <header style={headerStyle}>
        <div className="container">
            <h1>FeedBack UI</h1>
        </div>
    </header>
  )
}

Header.defaultProps={
    text:"FeedBack UI",
    bgColor:"black",
    textColor:"#ff6a95"
}

Header.prototype={
    text:PropTypes.string
}

export default Header