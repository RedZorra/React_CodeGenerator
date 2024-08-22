import {useState, useEffect} from 'react'

function QuoteGenerator() {
    const [quotes, setQuotes] = useState([]);
    const [currentQuote, setCurrentQuote] = useState(null);

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json())
        .then(data => {
            setQuotes(data.quotes);
            setCurrentQuote(data.quotes[0]);
        });
    } , []);

    const getRandomQuote = () => {
        if (quotes.length > 0) {
          const randomIndex = Math.floor(Math.random() * quotes.length);
          setCurrentQuote(quotes[randomIndex]);
        }
      };
    return (
        <div className="quote-generator">
            <div className="quote-box">
                {currentQuote ? (
                    <>
                    <p className="quote">
                        "{currentQuote.quote}"
                    </p>
                    <p className="author">"{currentQuote.author}"</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <button className="new-quote-btn" onClick={getRandomQuote}>
                New Quote
            </button>
        </div>
    );
};

export default QuoteGenerator;