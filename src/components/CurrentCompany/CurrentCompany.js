import React from 'react';
import './CurrentCompany.css';
import savedPng from '../../img/saved.png'

function CurrentCompany(props) {
  let company = props.company


  return (
    <div className='currentCompany'>
        <div className='currentCompany_name'>
          <h3>{company.value}</h3>
        </div>
        <div className='currentCompany_info'>
          <div className='currentCompany_info__leftSection'>
            {company.data.address ?<div className='currentCompany_info__leftSection-wrapper'>
              <span className='currentCompany_info__header'>Юридический адрес</span>
              <span className='currentCompany_info__value'>{company.data.address.unrestricted_value}</span>
            </div> : null}
            {company.data.management ?<div className='currentCompany_info__leftSection-wrapper'>
              <span className='currentCompany_info__header'>{company.data.management.post}</span>
              <span className='currentCompany_info__value'>{company.data.management.name}</span>
            </div>:null}
          </div>
          <div className='currentCompany_info__rightSection'>
            <div className='currentCompany_info__rightSection-wrapper'>
              <div className='currentCompany_info__rightSectionInfo-wrapper'>
                <span className='currentCompany_info__header'>ИНН</span>
                <span className='currentCompany_info__value'>{company.data.inn}</span>
              </div>
              {company.data.management ? <div className='currentCompany_info__rightSectionInfo-wrapper'>
                <span className='currentCompany_info__header'>КПП</span>
                <span className='currentCompany_info__value'>{company.data.kpp}</span>
              </div>:null}
              <div className='currentCompany_info__rightSectionInfo-wrapper'>
                <span className='currentCompany_info__header'>ОГРН</span>
                <span className='currentCompany_info__value'>{company.data.ogrn}</span>
              </div>
            </div>
          </div>
        </div>
        {props.isSaved.length>0 ? <button 
            className='saveButton__saved'
          ><img src={savedPng}/> Сохранено
        </button> : <button 
            className='saveButton'
            onClick={props.saveCompany}
          >Сохранить
        </button>}
    </div>
  );
}

export default CurrentCompany;
