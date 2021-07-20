import axios from "axios";

const API = "https://quote-garden.herokuapp.com/api/v3/quotes";

async function handleRandomQuote() {
  const response = await axios.get(`${API}/random`);
  return response.data.data;
}

async function handleQuoteAuthor(author) {
  const response = await axios.get(`${API}?author=${author}`);
  return response.data.data;
}

export { handleRandomQuote, handleQuoteAuthor };
