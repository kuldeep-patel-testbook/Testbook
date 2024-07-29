import React from 'react'
// import "./Styles.css";

const Card = () => {
  return (
    <div className="card">
        <img src="https://img.freepik.com/free-psd/realistic-mobile-device-isolated_23-2150427379.jpg?w=1060&t=st=1721912273~exp=1721912873~hmac=f10b8afa276477e654a255c07f754e98a8a529bf63999bf529596533dd4366b8" alt="phone-image" />
        <div className="card-body">
            <h2>Title of the Card</h2>
            <p>Caption text about the Card</p>
            <h5>Author name</h5>
        </div>
    </div>
  )
}

export default Card