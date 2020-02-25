import React from 'react';
import './MainPage.css';
import CompaniesContent from '../CompaniesContent/CompaniesContent'

class MainPage extends React.Component {
  state ={
    activeTab: 'newCompany',
  }

  handleChangeTab(activeTab){
    this.setState({
      activeTab: activeTab,
    })
  }
  render(){
    return (
      <div className='mainPage'>
        <div className='header'></div>
        <div className='content'>
          <div className='contentTitle'>
            <h4>Мои организации</h4>
          </div>
          <div className='tabs_wrapper'>
            <div className='company_tab__wrapper'>
              <div className={this.state.activeTab === 'newCompany'? 'company_tab__active': 'company_tab'} onClick={()=>this.handleChangeTab('newCompany')}>
                <span>Новая организация</span>
              </div>
              <div className={this.state.activeTab === 'savedCompany'? 'company_tab__active': 'company_tab'} onClick={()=>this.handleChangeTab('savedCompany')}>
                <span>Сохраненные организации</span>
              </div>
            </div>
          </div>
          <CompaniesContent activeTab={this.state.activeTab}/>
        </div>
      </div>
    );
  }
}

export default MainPage;
