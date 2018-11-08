import React from 'react';
import Style from '../scss/PhotoDisp.scss';

class PhotoDisp extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		let picArr = this.props.data.map((imgObj, ind) => 
			<div className={Style.objCont}>
				<div className={Style.objTitle}>{imgObj.title}</div>
				<img className={Style.objImg} src={imgObj.media.m} />
			</div>
		)

		return(
			<div className={Style.main}>{picArr}</div>
		)
	}
}

export default PhotoDisp;