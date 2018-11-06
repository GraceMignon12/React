const initialState = {
  counter: 0,
  news: [],
  newsDetail:[],
  loading: false,
};

const dataReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS':
     return {
       ...previousState,
       loading: true,
     };
    case 'FETCH_NEWS_SUCCESS':
    return {
      ...previousState,
      loading: false,
      // news: action.response.content,
      news: action.response.sources,
      
    };
    case 'FETCH_NEWS_DETAILS':
    return {
      ...previousState,
      loading: false,
     
      
    };
    case 'FETCH_NEWS_DETAILS_SUCCESS':
    return {
      ...previousState,
      loading: false,
      newsDetail: action.response.articles,
      
    };
    default:
      return previousState;
  }
};

export default dataReducer;
