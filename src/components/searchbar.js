import React, {Component} from 'react';

//Create new component that produces html

class SearchBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
          term: ''
      }
      this.handleChange = this.handleChange.bind(this);
  }
  // onChange(event){
  //   this.onInputChange(event.target.value);
  // }
  // onInputChange(term){
  //   this.setState({term})
  //   this.props.onSearchTermChange(term);
  // }

  handleChange(e) {
    console.log(e.target);
    let name = e.target.name;
    let val = e.target.value;
    this.setState({
      [name]: val
    })

  }

  render() {
      return(
        <div className= "search-bar">
          <input 
          name="term"
          value = {this.state.term}
          onChange = {this.handleChange}
         />
        </div>  
      )   
  }

}



export default SearchBar;

