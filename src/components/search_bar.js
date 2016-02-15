import React, { Component } from 'react';


// const SearchBar = () => {
//   return <input />;
// }

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <div className='search-bar'>
        <input 
           onChange={ event => this.onInputChange(event.target.value) } 
           value={this.state.term}
        />
        <p>Input Value: {this.state.term} </p>
      </div>
    )
  }

  onInputChange(term){
    this.setState({ term }); 
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;