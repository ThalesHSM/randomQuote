import { useEffect, useState } from "react";
import { handleRandomQuote, handleQuoteAuthor } from "../api/axios";

import {
  StyledQuoteDiv,
  StyledRandomButton,
  StyledQuoteText,
  StyledDiv,
  StyledHr,
} from "./styledHome";

import { BsArrowRight, BsArrowRepeat } from "react-icons/bs";

function Home() {
  const [quote, setQuote] = useState<string>();
  const [quoteAuthor, setQuoteAuthor] = useState<string>();
  const [quoteGenre, setQuoteGenre] = useState<string>();
  const [quoteList, setQuoteList] = useState<any>([]);
  let i = 0;

  async function handleQuoteChange() {
    const randomQuote = await handleRandomQuote();

    setQuote(randomQuote[0].quoteText);
    setQuoteAuthor(randomQuote[0].quoteAuthor);
    setQuoteGenre(randomQuote[0].quoteGenre);
  }

  useEffect(() => {
    handleQuoteChange();
  }, []);

  async function handleAuthorsQuote() {
    const authorsQuote = await handleQuoteAuthor(quoteAuthor);
    setQuoteList(authorsQuote);
  }

  return (
    <StyledDiv>
      <StyledRandomButton onClick={handleQuoteChange}>
        <p
          style={{
            fontSize: 18,
            marginRight: 10,
          }}
        >
          random
        </p>
        <BsArrowRepeat style={{ marginBottom: 17 }} size={24} />
      </StyledRandomButton>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <StyledHr />
          <StyledQuoteText>"{quote}"</StyledQuoteText>
        </div>

        <StyledQuoteDiv onClick={handleAuthorsQuote}>
          <div>
            <h2 style={{ marginLeft: 10 }}>{quoteAuthor}</h2>
            <p
              style={{
                color: "#828282",
                marginLeft: 10,
              }}
            >
              {quoteGenre}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <BsArrowRight style={{ marginRight: 10 }} size={40} />
          </div>
        </StyledQuoteDiv>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: 30,
        }}
      >
        {quoteList.map((quote: any) => (
          <div
            key={i++}
            style={{
              display: "flex",
              marginRight: 40,
              marginBottom: 20,
            }}
          >
            <StyledHr />
            <StyledQuoteText>"{quote.quoteText}"</StyledQuoteText>
          </div>
        ))}
      </div>
    </StyledDiv>
  );
}

export default Home;
