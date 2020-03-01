import React from 'react';
import './CompanyCard.css';
import deletePng from '../../img/delete.png'
import upPng from '../../img/up.png'
import downPng from '../../img/down.png'

class CompanyCard extends React.Component {
  
  state = {
    isOpen: false,
  }

  hideInfo = ()=>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  


  render(){
    let company = this.props.company

    return (
      <div className='companyCard'>
        <div className="companyCard_header">
          <div>
            <span>{company.value}</span>
          </div>
          <button className='deleteBtn' onClick={()=>this.props.deleteCompany(company)}>
            <img src={deletePng}/>
          </button>
        </div>
        <div className={this.state.isOpen ? 'companyCard_info' : 'companyCard_info companyCard_info__hidden'}>
          <div className='companyCard_info__wrapper'>
            <span className='companyCard_info__header'>ИНН</span>
            <span className='companyCard_info__value'>{company.data.inn}</span>
          </div>

          {this.state.isOpen?<div>
            {company.data.management ? <div className='companyCard_info__wrapper'>
              <span className='companyCard_info__header'>КПП</span>
              <span className='companyCard_info__value'>{company.data.kpp}</span>
            </div>:null}
            <div className='companyCard_info__wrapper'>
              <span className='companyCard_info__header'>ОГРН</span>
              <span className='companyCard_info__value'>{company.data.ogrn}</span>
            </div>
            {company.data.address ? <div className='companyCard_info__wrapper'>
              <span className='companyCard_info__header'>Юридический адрес</span>
              <span className='companyCard_info__value'>{company.data.address.unrestricted_value}</span>
            </div> : null}
            {company.data.management ?<div className='companyCard_info__wrapper'>
                  <span className='companyCard_info__header'>{company.data.management.post}</span>
                  <span className='companyCard_info__value'>{company.data.management.name}</span>
            </div>:null}
          </div>:null}
        </div>
        {this.state.isOpen? <button  className='hideInfoBtn' onClick={this.hideInfo}>
          <span>скрыть подробности</span>
          <img src={upPng} className='hideInfoPng'/>
        </button> :
        <button  className='hideInfoBtn hideInfoBtn__hidden' onClick={this.hideInfo}>
          <span>подробнее</span>
          <img src={downPng} className='hideInfoPng'/>
        </button>
        }
      </div>
    );
  }

 }

export default CompanyCard;
