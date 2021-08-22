import React from 'react';
import './NewCompany.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchInfo from '../../components/SearchInfo/SearchInfo';
import CurrentCompany from '../../components/CurrentCompany/CurrentCompany';

class NewCompany extends React.Component {

  state = {
    currentCompany: {},
    isSaved: []
  }

  changeCurrentCompany = (company) => {
    this.setState({
      currentCompany: company
    })

    if (localStorage.getItem('savedCompanies')) {
      let savedCompanies = JSON.parse(localStorage.getItem('savedCompanies'));
      let isSaved = savedCompanies.filter(item=>item.data.inn===company.data.inn);
      this.setState({
        isSaved: isSaved
      });
    }
  }

  saveCompany = () => {

    if(localStorage.getItem('savedCompanies')){
      let savedCompanies = JSON.parse(localStorage.getItem('savedCompanies'));
      let isSaved = savedCompanies.filter(item=>item.data.inn===this.state.currentCompany.data.inn);
      if(isSaved.length===0){
        let savedCompaniesArr = JSON.parse(localStorage.getItem('savedCompanies'));
        savedCompaniesArr.push(this.state.currentCompany);
        localStorage.setItem('savedCompanies', JSON.stringify(savedCompaniesArr));
      } 
    } else {
      let savedCompaniesArr = [this.state.currentCompany];
      localStorage.setItem('savedCompanies', JSON.stringify(savedCompaniesArr));
    }
    this.setState({
      isSaved: [this.state.currentCompany]
    })
    this.props.handleComaniesList();
  }

  render(){
    return (
      <div className='searchModal'>
        <SearchInput changeCurrentCompany={this.changeCurrentCompany}/>
        {Object.keys(this.state.currentCompany).length === 0 ? <SearchInfo/> : <CurrentCompany 
            company = {this.state.currentCompany}
            isSaved = {this.state.isSaved}
            saveCompany = {this.saveCompany}
          />
        }
      </div>
    );
  }
}

export default NewCompany;
