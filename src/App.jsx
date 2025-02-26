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
    "url('https://w.wallhaven.cc/full/m9/wallhaven-m9or11.jpg')",
    "url('https://w.wallhaven.cc/full/wq/wallhaven-wq1716.jpg')",
    "url('https://w.wallhaven.cc/full/lq/wallhaven-lqqv8r.jpg')",
    "url('https://w.wallhaven.cc/full/p9/wallhaven-p9pere.png')",
    "url('https://w.wallhaven.cc/full/7p/wallhaven-7p1wko.jpg')",
    "url('https://w.wallhaven.cc/full/o3/wallhaven-o3wyp9.jpg')",
    "url('https://w.wallhaven.cc/full/3l/wallhaven-3l1wyv.png')",
    "url('https://w.wallhaven.cc/full/8o/wallhaven-8o7o1y.jpg')",
    "url('https://static.wallhaven.cc/images/layout/bg-dark-grain.png')",
    "url('https://static.wallhaven.cc/images/layout/bg-dark-grain.png')",
  
    "url('https://static.wallhaven.cc/images/layout/bg-dark-grain.png')",
"url('https://w.wallhaven.cc/full/yx/wallhaven-yxqzpd.jpg')",
    "url('')",
    "url('')",
    "url('https://w.wallhaven.cc/full/5g/wallhaven-5g26o9.jpg')",
    "url('https://w.wallhaven.cc/full/6d/wallhaven-6dp6ox.jpg')",
    "url('https://w.wallhaven.cc/full/dp/wallhaven-dpj72g.jpg')",
    "url('https://w.wallhaven.cc/full/gp/wallhaven-gp9keq.png')",
    "url('https://w.wallhaven.cc/full/m9/wallhaven-m92r99.png')",
    "url('https://w.wallhaven.cc/full/2y/wallhaven-2yrqrx.jpg')",
    "url('https://w.wallhaven.cc/full/ox/wallhaven-ox6zrl.jpg')",
    "url('https://w.wallhaven.cc/full/kw/wallhaven-kw22p1.jpg')",
    "url('https://w.wallhaven.cc/full/8o/wallhaven-8oky1j.jpg')",
    "url('https://w.wallhaven.cc/full/l3/wallhaven-l3zmwy.jpg')",
    "url('https://w.wallhaven.cc/full/r2/wallhaven-r25zz7.jpg')",

    "url('https://w.wallhaven.cc/full/1p/wallhaven-1pvr5w.jpg')"
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
        alignItems: "bottom",
        backgroundImage: bgImage ,
        backgroundSize: "cover",
      filter: "blur(0.6px)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "98vw",
      height: "98vh",
      flexDirection: "column",
      }}
    >
      {/* Quote Box */}
      <div 
        style={{
          position: "fixed", 
          bottom: "20px",
          left: "50% ", 
          transform: "translateX(-50%)",
          backgroundColor: "black",
          // position:"absolute",
          // wordWrap: "break-word",
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
