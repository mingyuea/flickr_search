import React from 'react';
import ReactDOM from 'react-dom';
import SearchComp from './SearchComp.js';
import PhotoDisp from './PhotoDisp';
import Style from '../scss/Root.scss';

class Root extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<div className={Style.title}>Flickr Photo Search</div>
				<PhotoDisp />
				<SearchComp />
			</div>
		)
	}
}

export default Root;