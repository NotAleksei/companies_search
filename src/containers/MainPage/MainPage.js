import React from 'react';
import './MainPage.css';
import CompaniesContent from '../CompaniesContent/CompaniesContent'

function MainPage() {
  return (
    <div className='mainPage'>
      <div className='header'></div>
      <div className='content'>
        <div className='contentTitle'>
          <h4>Мои организации</h4>
        </div>
        <CompaniesContent/>
      </div>

    </div>
  );
}

export default MainPage;
