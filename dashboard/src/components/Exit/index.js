import React from 'react';
import Logout from '../../assets/logout.png'
import './index.scss'
const Exit = () => {
  return (
    <div className='quit'>
      <p>Çıkış</p>
      <img src={Logout} alt='ff' />
  </div>);
};

export default Exit;
