import React from 'react';
import './CompaniesContent.css';
import NewCompany from '../NewCompany/NewCompany';
import SavedCompany from '../SavedCompany/SavedCompany';


class CompaniesContent extends React.Component {
  state ={
    savedCompaniesArr:[]
  }

  componentDidMount(){
    let savedCompaniesArr = JSON.parse(localStorage.getItem('savedCompanies'));
    this.setState({
      savedCompaniesArr:savedCompaniesArr
    })
    if(savedCompaniesArr) this.props.handleChangeCount(savedCompaniesArr.length)
  }

  handleComaniesList = () => {
    let savedCompaniesArr = JSON.parse(localStorage.getItem('savedCompanies'));
    this.setState({
      savedCompaniesArr:savedCompaniesArr
    })
    if(savedCompaniesArr) this.props.handleChangeCount(savedCompaniesArr.length)
  }
  render(){

    return (
      <div className='companiesContent'>
        {this.props.activeTab === 'newCompany' ? <NewCompany handleComaniesList={this.handleComaniesList}/>: 
        <SavedCompany 
          handleComaniesList={this.handleComaniesList}
          savedCompaniesArr={this.state.savedCompaniesArr}
        />}
  
      </div>
    );
  }
}

export default CompaniesContent;
