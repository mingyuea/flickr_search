export const onSubmit = input => ({type: "SEARCH_SUBMIT", payload: input});

export const importData = resData => ({ type: "NEW_DATA", payload: resData });