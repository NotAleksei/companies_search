import React from 'react';
import './CompaniesContent.css';
import NewCompany from '../NewCompany/NewCompany';
import SavedCompany from '../SavedCompany/SavedCompany';


class CompaniesContent extends React.Component {
  render(){
    return (
      <div className='companiesContent'>
        {this.props.activeTab === 'newCompany' ? <NewCompany/>: <SavedCompany/>}
  
      </div>
    );
  }
}

export default CompaniesContent;
