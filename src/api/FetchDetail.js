export default async function fetchDetail(payload) {

  try {
    const response = await fetch(`https://newsapi.org/v2/everything?apiKey=d31a85f5dffc42c38e3823ed8854aab9&language=en&sources=${payload}`);
 
    return response.json();
  } catch (error) {
      console.log(error);
  }

}
