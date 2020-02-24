import React from 'react';
import './NewCompany.css';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchInfo from '../../components/SearchInfo/SearchInfo';
import CurrentCompany from '../../components/CurrentCompany/CurrentCompany';


class NewCompany extends React.Component {

  state = {
    currentCompany: {},
  }

  changeCurrentCompany = (company) => {
    this.setState({
      currentCompany: company
    })
  }

  render(){
    return (
      <div className='searchModal'>
        <SearchInput changeCurrentCompany={this.changeCurrentCompany}/>
        {Object.keys(this.state.currentCompany).length == 0 ? <SearchInfo/> : <CurrentCompany company = {this.state.currentCompany}/>}
      </div>
    );
  }
}

export default NewCompany;
