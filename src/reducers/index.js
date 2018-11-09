const initialState = {
	searchVal: "",
	urlEndpoint: "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
	flickrData: [],
};

const rootReducer = (state = initialState, action) => {
	switch(action.type){
		case "SEARCH_SUBMIT":
			return {...state, searchVal: action.payload};
		case "NEW_DATA":
			return {...state, flickrData: action.payload};
		default:
			return state
	}
};

export default rootReducer;