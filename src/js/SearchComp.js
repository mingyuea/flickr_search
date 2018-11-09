import React from 'react';
import { connect } from 'react-redux';
import { onSubmit } from '../actions/index.js';
import Style from '../scss/SearchComp.scss';
import $ from 'jquery';

const mapDispatchToProps = dispatch => {
  return {
    importData: resData => dispatch(importData(resData))
  };
};

class SearchClass extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			"inputVal": ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		let urlEndpoint = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		let searchTerm = this.state.inputVal;
		//this.props.onSubmit(inputVal);

		$.ajax({
			url: urlEndpoint,
			dataType: "jsonp",
			data: {
				"tags": searchTerm,
				"format": "json"
			},

			success: function(data){
				this.props.importData(data.items);
			}.bind(this),
			error: function(xhr, status, err){
				console.error('AJAX error:', status, err.toString())	
			}.bind(this)
		})

		//this.props.onSearch();
	}

	handleChange(e){
		let inputVal = e.target.value;

		this.setState({
			"inputVal": inputVal
		});
	}

	render(){
		return(
			<div className={Style.wrapper}>
				<form onSubmit={this.handleSubmit}>
					<label>
						<input className={Style.input} type="text" value={this.props.searchVal} onChange={this.handleChange} />
					</label>
					<div className={Style.searchBtn}>
						<input type="submit" value="Search" />
					</div>
				</form>
			</div>
		)
	}
}

const SearchComp = connect(null, mapDispatchToProps)(SearchClass);

export default SearchComp;