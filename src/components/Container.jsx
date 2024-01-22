import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { TWITTER_MAX_CHARACTERS, FACEBOOK_MAX_CHARACTERS } from "../lib/constants";

function countWords(str) {
  // Using \p{L} to match any kind of letter and \d for digits
  const words = str.match(/(\p{L}+|\d+)/gu);
  return words ? words.length : 0;
}

export default function Container() {
  const [text, setText] = useState("");
  const stats = {
    numbersOfWords: countWords(text),
    numberOfCharacters: text.length,
    twitterCharactersLeft: TWITTER_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
