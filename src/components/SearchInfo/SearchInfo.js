import React from 'react';
import addPng from '../../img/Group.png'
import './SearchInfo.css';

function SearchInfo() {
  return (
    <div className='searchInfo'>
      <img src={addPng}></img>
      <p>
        Для добавления новой организации <br></br>введите ее название, ИНН или адрес
      </p>
    </div>
  );
}

export default SearchInfo;
