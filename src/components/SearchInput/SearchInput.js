import React from 'react';
import './SearchInput.css';
import SearchResultList from '../SearchResultList/SearchResultList';

class SearchInput extends  React.Component {
  
  state = {
    value: '',
    companies: null,
  }
  

  getListOfCompanies(value){
    fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party', {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Token b42339129509b03ef405961e7a76e7e0843c887e',
      },

      body: `{ "query": "${value}" }`, 
      })
    .then(response => response.json())
    .then(result => {
      this.setState({
        companies: result,
    })})
  }

  handleInput(e){
    e.preventDefault()
    let value = e.target.value
    this.setState({
      value: value,
    })
    this.getListOfCompanies(value)
  }

  setCurentCompany = (company) => {
    this.setState({
      value: '',
    })
    this.props.changeCurrentCompany(company)
  }


  render(){
    return (
    <div className='searchInput'>
      <p>Организация или ИП</p>
      <form>
        <input 
        onChange = {(e)=>this.handleInput(e)} 
        value = {this.state.value}
        placeholder = 'Введите название, ИНН или адрес организации'
        ></input>
      </form>
      {this.state.value && this.state.companies ? <SearchResultList 
      companies = {this.state.companies.suggestions}
      setCurentCompany = {this.setCurentCompany}
      /> : null}
    </div>
  );
}
}

export default SearchInput;
