export default async function fetchNews() {

  try {
    const response = await fetch('https://newsapi.org/v2/sources?apiKey=d31a85f5dffc42c38e3823ed8854aab9&language=en&country=us');
    // .then(response => response.json());
   
    return response.json();
  } catch (error) {
      console.log(error);
  }

}
