import React from 'react';
import './SearchResultList.css';

class SearchResultList extends React.Component {

  state = {
    companies: [],
  }

  render(){

    let companies = this.props.companies

    let listOfCompanies = companies.map((item)=>{
      return <li onClick={()=>this.props.setCurentCompany(item)} key = {item.data.inn}>
        <h4>{item.value}</h4>
        <div className='innContainer'>
          <span>{item.data.inn}</span>
          {item.data.address ? <span>{item.data.address.data.region_with_type}</span> : null}
        </div>
      </li>
    })

    return (
      <div className='searchResultList'>
        <div className='searchResultList_container'>
          {companies.length>0 ? 
          <ul>
            {listOfCompanies}
          </ul> : 
          <span className='unknownCompanie'>Неизвестная организация</span>}
        </div>
      </div>
    );
  }

}

export default SearchResultList;
