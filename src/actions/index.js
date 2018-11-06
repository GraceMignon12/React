export const fetchNews = () => {
  console.log('action >> ');
  return {
    type: 'FETCH_NEWS',
   // payload: param,
  };
};

export const fetchDetail = (id) => {
  return {
    type: 'FETCH_NEWS_DETAILS',
    id,
  };
};