import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchComp from './SearchComp.js';
import PhotoDisp from './PhotoDisp';
import Style from '../scss/Root.scss';


class Root extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			"searchVal": "",
			"urlEndpoint": "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
			"flickrData": [],
		}

		this.handleSearch = this.handleSearch.bind(this);
		this.searchChange = this.searchChange.bind(this);
	}

	searchChange(inputVal){
		this.setState({
			"searchVal": inputVal
		});
	}

	handleSearch(){
		let searchTerm = this.state.searchVal;
		searchTerm = searchTerm.replace(/\s/g, ",");

		$.ajax({
			url: this.state.urlEndpoint,
			dataType: "jsonp",
			data: {
				"tags": searchTerm,
				"format": "json"
			},

			success: function(data){
				this.setState({
					"flickrData": data.items
				})
			}.bind(this),
			error: function(xhr, status, err){
				console.error('AJAX error:', status, err.toString())	
			}.bind(this)
		})

	}

	render(){
		let resRender = <div className={Style.emptyBody}>Nothing to see here. Search for some pictures!</div>;

		if(this.state.flickrData.length > 0){
			resRender = <PhotoDisp data={this.state.flickrData} />
		}

		return(
			<div>
				<div className={Style.title}>Flickr Photo Search</div>
				<SearchComp searchVal={this.state.searchVal} onChange={this.searchChange} onSubmit={this.handleSearch} />
				{resRender}
			</div>
		)
	}
}

export default Root;

const wrapper = document.getElementById('app');

wrapper ? ReactDOM.render(<Root />, wrapper) : false;