import React  from 'react';

const Word = ({word, text}) => {
  const matchedCount = word.startsWith(text) ? text.length : 0;
  return (
    <WordElement word={word} highlightCount={matchedCount} />
  );
};
Word.propTypes = {
  word: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

const WordElement = ({word, highlightCount}) => {
  var characters = word.split('').map((c, index) => {
    let isMatch = highlightCount >= index + 1;
    return (<span className={isMatch ? 'match' : null} key={index}>{c}</span>);
  });
  return (
    <div className="word">
      {characters}
    </div>
  );
};

export default Word;
