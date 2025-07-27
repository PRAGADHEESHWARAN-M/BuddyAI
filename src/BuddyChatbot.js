import React, { useState, useEffect, useRef } from 'react';
import './BuddyChatbot.css';
import bookaa from './bookaa.mp3';
import logo from './buddylogo.png';

const BuddyChatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
  const audioRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setShowButtons(value.trim().length > 0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      sendMessage(input);
    }
  };

  const sendMessage = async (text) => {
    setMessages(prev => [...prev, { type: 'user', text }]);
    setInput('');
    setSuggestions([]);

    if (text.toLowerCase().includes('book')) {
      fetchBooks(text);
    } else {
      setMessages(prev => [
        ...prev,
        { type: 'bot', text: 'Searching... Please wait.' }
      ]);
    }
  };

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const data = await response.json();
      if (data.items) {
        const bookResults = data.items.map((item) => ({
          title: item.volumeInfo.title,
          previewLink: item.volumeInfo.previewLink,
        }));
        setSuggestions(bookResults);
        setMessages((prev) => [
          ...prev,
          {
            type: 'bot',
            text: `Here are some book suggestions based on "${query}"`,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { type: 'bot', text: 'No books found.' },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { type: 'bot', text: 'Error fetching book data.' },
      ]);
    }
  };

  const handleSuggestionClick = (type) => {
    const query = input.trim();
    if (!query) return;

    if (type === 'news') {
      window.open(`https://news.google.com/search?q=${query}`, '_blank');
    } else if (type === 'articles') {
      window.open(`https://www.google.com/search?q=${query}+articles`, '_blank');
    } else if (type === 'wikipedia') {
      window.open(`https://en.wikipedia.org/wiki/${query}`, '_blank');
    } else if (type === 'books') {
      fetchBooks(query);
    }
  };

  const handleLogoClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="logo-top-center" onClick={handleLogoClick}>
        <img src={logo} alt="Buddy AI" className="logo-neon" />
        <audio ref={audioRef} src={bookaa} preload="auto" />
      </div>
      <h1 className="heading">Buddy AI</h1>
      <p className="intro">
        Welcome to Buddy AI – your intelligent assistant for books, articles, news & more. Type anything and let Buddy fetch results instantly!
      </p>

      <div className="chat-area">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-section">
        <input
          type="text"
          placeholder="Ask Buddy AI..."
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="input-box"
        />
      </div>

      {showButtons && (
        <div className="suggestion-buttons">
          <button onClick={() => handleSuggestionClick('books')}>Books</button>
          <button onClick={() => handleSuggestionClick('articles')}>Articles</button>
          <button onClick={() => handleSuggestionClick('news')}>News</button>
          <button onClick={() => handleSuggestionClick('wikipedia')}>Wikipedia</button>
        </div>
      )}

      <div className="book-suggestions">
        {suggestions.map((book, idx) => (
          <div key={idx} className="book-card">
            <p>{book.title}</p>
            <a href={book.previewLink} target="_blank" rel="noreferrer">
              <button className="preview-btn">Preview</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuddyChatbot;
