import quotes from "../../mock/quotes.json";

export default (req, res) => {
  res.status(200).json(quotes);
};
