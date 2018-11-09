import React from 'react';
import { connect } from 'react-redux';
import Style from '../scss/PhotoDisp.scss';

const mapStateToProps = state => {
	return { resData: state.flickrData}
}

class PhotoClass extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let picArr = 'Nothing to see here, search something!'

		if(this.props.resData.length > 0){
			picArr = this.props.resData.map((imgObj, ind) => 
				<div className={Style.objCont}>
					<div className={Style.objTitle}>{imgObj.title}</div>
					<img className={Style.objImg} src={imgObj.media.m} />
				</div>
			)
		}

		return(
			<div className={Style.main}>{picArr}</div>
		)
	}
}

const PhotoDisp = connect(mapStateToProps)(PhotoClass);

export default PhotoDisp;