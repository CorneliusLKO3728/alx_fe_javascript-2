// Initialize an array to hold quotes
const quotes = [
    { text: "Life is what happens when you're busy making other plans.", category: "Life" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Success" },
    { text: "Do one thing every day that scares you.", category: "Inspiration" }
  ];
  
  // Function to display a random quote
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quoteDisplay").innerText = `"${quote.text}" - ${quote.category}`;
  }
  
  // Event listener to show a random quote on button click
  document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  
  // Function to add a new quote to the quotes array and display it
  function addQuote() {
    const quoteText = document.getElementById("newQuoteText").value;
    const quoteCategory = document.getElementById("newQuoteCategory").value;
  
    // Ensure both text and category are provided
    if (quoteText && quoteCategory) {
      // Add new quote to the array
      quotes.push({ text: quoteText, category: quoteCategory });
      
      // Clear input fields
      document.getElementById("newQuoteText").value = '';
      document.getElementById("newQuoteCategory").value = '';
      
      // Optional: Display confirmation or the new quote immediately
      document.getElementById("quoteDisplay").innerText = `Added new quote: "${quoteText}" - ${quoteCategory}`;
    } else {
      alert("Please enter both quote text and category.");
    }
  }
  