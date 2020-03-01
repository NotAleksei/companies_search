import React from 'react';
import './SavedCompany.css';
import CompanyCard from '../../components/CompanyCard/CompanyCard';



class SavedCompany extends React.Component {


  deleteCompany = (currentCompany)=>{

    let savedCompaniesArr = JSON.parse(localStorage.getItem('savedCompanies'));
    for(let i =0; i < savedCompaniesArr.length; i++){
      if(savedCompaniesArr[i].data.inn === currentCompany.data.inn) {
        savedCompaniesArr.splice(i, 1);
        break;
      }
    }

    localStorage.setItem('savedCompanies', JSON.stringify(savedCompaniesArr))
    this.props.handleComaniesList()
  }

  render(){
    
  let companyCard = null
  if(this.props.savedCompaniesArr){
      companyCard = this.props.savedCompaniesArr.map((item)=>{
        return <CompanyCard 
        company = {item} 
        deleteCompany={(currentCompany)=>this.deleteCompany(currentCompany)}
        key = {item.data.inn}
        />
    })
  }

    return (
      <div className='savedCompanyModal'>
          {companyCard}
      </div>
    );
  }
}

export default SavedCompany;
