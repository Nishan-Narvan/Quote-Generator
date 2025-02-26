import { useState, useEffect } from 'react';
import "./App.css";
import Papa from "papaparse"; // Correct import

function App() {
  
  const quotes = [
    // 🌿 Deep Osho Quotes
    "The less people know, the more stubbornly they know it.",
    "Truth is not something outside to be discovered, it is something inside to be realized.",
    "Life begins where fear ends.",
    "Life is what happens when you're busy making other plans.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Do what you can, with what you have, where you are.",
    "Log Behen ke Lode hote hain, they don't care nor should you!",
    "Be a Sher! Always make the harder choice!",
    "Be - don't try to become.",
    "The greatest fear in the world is the opinion of others.",
    "You are not accidental. The world needs you.",
    "Meditation is the art of being alone, but in total celebration.",
    "Don't move the way fear makes you move.",
    "A certain darkness is needed to see the stars.",
    "Life is a mirror, it reflects your inner being.",
    "Courage is a love affair with the unknown.",
    "When you are silent, existence speaks to you.",
    "Live the moment – and live it totally.",
    "A man who knows how to laugh is already on the way to enlightenment.",
    "The more you try to be somebody, the more you remain nobody.",
    "If you love a flower, don’t pick it. Let it be.",
    "To be creative means to be in love with life.",
    "Only fools are consistent. The wise remain fluid and flexible.",
    "Your mind is a beautiful servant but a dangerous master.",
    "Don't seek, don't search, don't ask, don't knock, don't demand – relax.",
    
    // 🎭 Satirical Osho Quotes
    "The problem with the world is that intelligent people are full of doubts, while stupid ones are full of confidence.",
    "The moment you think you are special, you become stupid.",
    "Society teaches you how to fit in, meditation teaches you how to stand out.",
    "Your parents lived a miserable life, and they want you to continue their tradition.",
    "The only people who don’t have problems are the ones in the cemetery.",
    "Be spontaneous, but do it carefully!",
    "Success is just failure postponed with better PR.",
    "Man is the only animal who pays to live on Earth.",
    "You were born free, then you went to school.",
    "The biggest conspiracy theory is that life has a purpose.",
    "God created man in his own image. Man returned the favor.",
    "Everyone is in a hurry, but nobody knows where they are going.",
    "Don't try to impress people who don't even like themselves.",
    "Life is short, make sure you spend most of it overthinking.",
    "First, they tell you to fit in. Then they ask you why you’re not unique.",
    "If you keep waiting for the perfect moment, you will die waiting.",
    "Some people work hard. Others are smart enough to delegate.",
    "A wise man learns from his mistakes. A genius learns from others’ mistakes.",
    "You are stressed because you think you have control.",
    "The only real sin in life is being boring.",
    "Be careful what you wish for. You just might get it and realize it's not what you wanted.",
    "Marriage is the only war where you sleep with the enemy.",
    "Nobody really wants the truth; they just want their beliefs validated.",
    "You don't find yourself. You create yourself.",
    "Why worry? In the end, nothing will matter anyway."
  ];
  

  const backgrounds = [
    "url('/QuoteGen IMage/bg1.jpg')",
    "url('/QuoteGen IMage/bg2.jpg')",
    "url('/QuoteGen IMage/bg3.jpg')",
    "url('/QuoteGen IMage/bg4.jpg')",
    "url('/QuoteGen IMage/bg5.jpg')",
    "url('/QuoteGen IMage/bg6.jpg')",
    "url('/QuoteGen IMage/bg7.jpg')",
    "url('/QuoteGen IMage/bg8.jpg')",
    "url('/QuoteGen IMage/bg9.jpg')",
    "url('/QuoteGen IMage/bg10.jpg')",
    "url('/QuoteGen IMage/bg11.jpg')",
    "url('/QuoteGen IMage/bg12.jpg')",
    "url('/QuoteGen IMage/bg13.jpg')",
    "url('https://i.pinimg.com/736x/d4/1b/98/d41b9854839215ced42f9620913f2820.jpg ')",
    "url('https://i.pinimg.com/736x/a6/cb/57/a6cb5734b7e2f16c39a2af7b66ec74d9.jpg ')",
    "url('https://i.pinimg.com/736x/d8/0e/cb/d80ecb853f149c4477082058d59ba49d.jpg ')",
    "url('https://i.pinimg.com/736x/99/23/13/992313d5c25945dd243056e7a6dda650.jpg ')",
    "url('https://i.pinimg.com/736x/1c/76/7f/1c767fd5fd11a9989daa6e11ac0df5ed.jpg ')",
    "url('https://i.pinimg.com/736x/13/ab/6c/13ab6cc39a664d11ab8a93d2065e28fa.jpg ')",
    "url(' https://i.pinimg.com/736x/e5/84/b0/e584b0810843723949f918a4b81e3ea7.jpg')",
    "url('https://i.pinimg.com/736x/3b/0a/a5/3b0aa56e8fef7cd8566995b8249c4251.jpg ')",
    "url('https://i.pinimg.com/736x/9a/53/3e/9a533e56276fc412f8e3470a97980f3d.jpg ')",
    "url(' https://i.pinimg.com/736x/fa/41/8e/fa418ef9a6928c002de84661db5dfd05.jpg')",
    "url('https://i.pinimg.com/736x/42/f4/fa/42f4fa02767fb52ec5fb9628d2691ce3.jpg ')",
    "url('https://i.pinimg.com/736x/4a/f7/13/4af713e69a8854277674f6771d5d9d3d.jpg ')",
    "url('https://i.pinimg.com/736x/55/9d/6b/559d6b527b6d7f5916587dbc11d7cc49.jpg ')",
    "url(' https://i.pinimg.com/736x/45/60/32/4560326eb380f0ff6802c9cc4ffec5d6.jpg')",
    "url('https://i.pinimg.com/736x/dd/db/4c/dddb4c74249e0a71f99c6600cff29613.jpg ')",
    "url(' https://i.pinimg.com/736x/cd/cf/a9/cdcfa95eb38e7f298cc4fdeab9ad618d.jpg')",
    "url('https://i.pinimg.com/736x/c0/ca/f6/c0caf6255a285c5089489ceab63431e2.jpg ')",
    "url(' https://i.pinimg.com/736x/8a/df/8d/8adf8dd5bdc7890ca98114de621caf6d.jpg')",
    "url(' https://i.pinimg.com/736x/cd/80/2d/cd802dac3b0ccb6d2f4f7a2178fa7b32.jpg')",
    "url(' https://i.pinimg.com/736x/12/a1/25/12a125c97f4abdf0ec52b5c43b87b1ae.jpg')",
    "url('https://i.pinimg.com/736x/e1/eb/fd/e1ebfdd2c6cd69b07a94c457af77108f.jpg ')",
    "url('https://i.pinimg.com/736x/4d/42/f5/4d42f505d79988cfc11963cfeb98c7fc.jpg ')",
    "url(' https://i.pinimg.com/736x/b5/be/44/b5be4471d952aeaf941c363e99811083.jpg')",
  ];

  const [bgImage, setBgImage] = useState(backgrounds[0]);
  const [quote, setQuote] = useState(quotes[0]);
  const [quotesa, setQuotesa] = useState("");
  const [quotesa1, setQuotesa1] = useState([]);

  // Function to get new random quote
  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(""); // Clear the text first
    setTimeout(() => setQuote(quotes[randomIndex]), 200);

    // Change background
    const randomBgIndex = Math.floor(Math.random() * backgrounds.length);
    setBgImage(backgrounds[randomBgIndex]);
  };

  // Fetch CSV quotes
  useEffect(() => {
    fetch("/x.csv") // Public folder se directly fetch
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse(data, { header: false });
        const quoteList = parsedData.data.map((row) => row[0]);
        setQuotesa1(quoteList);
        if (quoteList.length > 0) setQuotesa(quoteList[0]);
      })
      .catch((error) => console.error("Error loading CSV: ", error));
  }, []);

  // Function to get new random quote from CSV
  const getNewQuote1 = () => {
    if (quotesa1.length > 0) {
      const randomIndex1 = Math.floor(Math.random() * quotesa1.length);
      setQuotesa(""); // Clear before setting new
      setTimeout(() => setQuotesa(quotesa1[randomIndex1]), 200);

      // Change background
      const randomBgIndex = Math.floor(Math.random() * backgrounds.length);
      setBgImage(backgrounds[randomBgIndex]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: bgImage ,
        // backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "1000vh",
        flexDirection: "column",
      }}
    >
      {/* Quote Box */}
      <div
        style={{
          backgroundColor: "black",
          position:"absolute",
          wordWrap: "break-word",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          minWidth: "300px",
          minHeight: "200px",
        }}
      >
        <h2>Random Quote Generator</h2>
        <p style={{ wordBreak: "break-word", whiteSpace: "pre-wrap" }}>{quote}</p>
        <button
          onClick={getNewQuote}
          style={{
            marginTop: "10px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Quote
        </button>
        <hr />
        <p style={{wordBreak: "break-word", whiteSpace: "pre-wrap" }}>{quotesa}</p>
        <button
          onClick={getNewQuote1}
          style={{
            marginTop: "10px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          One More Quote
        </button>
      </div>
    </div>
  );
}

export default App;
