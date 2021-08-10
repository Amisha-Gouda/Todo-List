import React from 'react'

function footer() {
    let footerStyle = {
      position: "relative",
      top: "10vh",
      width: "100%"
    }
    return (
        <div className="bg-dark text-light py-3" style={footerStyle}>
          <p className="text-center"> Copyright &copy; myTodoList.com</p> 
        </div>
    )
}

export default footer
