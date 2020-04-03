import React from "react";
import NavBar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import SongList from "./components/SongList";
import ProductList from "./components/ProductList";
import BookContextProvider from "./contexts/BooksContext";
/**
 * ==============
 * React Context: Context provides a way to pass data through the component tree without having to pass props down manually at every level.
 * ==============
 * ==============
 * React Hooks: Special Function: Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class and inside a functional Components.
 * ==============
 */
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <ProductList />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <SongList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
