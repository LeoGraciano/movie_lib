const connectAPi = async (url) =>{
  const resp = await fetch(url);
  const resultsJson = await resp.json();
  return resultsJson;
}

export const getMovies = async (url) => {
  const data = await connectAPi(url)
  return data.results
};

export const getMovie = async (url) => {
  const data = await connectAPi(url)
  return data
};