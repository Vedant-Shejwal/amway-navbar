import React from 'react'
import { Link } from 'react-router-dom'
import './GeneralBtn.css'
const GeneralBtn = ({ type, gen_btn_text, redirect }) => {
  return (
    <Link to={redirect} className={`gen-btn ${type}`}>
      <div className="gen-btn-text">
        {gen_btn_text}
      </div>
    </Link>
  )
}

export default GeneralBtn
