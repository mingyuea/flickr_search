import React from 'react';
import Style from '../scss/SearchComp.scss';

class SearchComp extends React.Component {
	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();

		this.props.onSubmit();
	}

	handleChange(e){
		let inputVal = e.target.value;

		this.props.onChange(inputVal);
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

export default SearchComp;