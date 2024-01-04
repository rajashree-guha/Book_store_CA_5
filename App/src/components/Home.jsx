// Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  // updating search value 
  const handleSearch = (e) => {
    setSearch(e);
    console.log(e);
  };

// fetching data from api 
  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then((res) => {
        setBooks(res.data.books);
        console.log("data:", books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // filtering the books on searching 
  const searchBooks =books.filter(book=>{
    return book.title.toLowerCase().startsWith(search.toLowerCase())
  })

  // html 
  return (
    <>
      <Navbar searchText={handleSearch} />
      <div className='grid' style={{ marginTop: "50px", position: "absolute", width: "100%", top: "15%", zIndex: "-1" }} >
        {searchBooks.map((book) => (
          <div id="searchBookDiv" style={{ width: "300px", textAlign: "center", padding: "30px 10px", border: "3px solid #ef3737f3", borderRadius: "10px", boxShadow: "2px 2px 2px 2px  rgba(0, 0, 0, 0.363)" }}>
            <div>
              <div key={book.id}>
                <img style={{ width: "250px", height: "300px", border: "1px solid black" }} src={book.imageLinks.thumbnail} alt="" />
                <h4 style={{ width: "250px", fontSize: "18px", margin: "10px 0" }}>{book.title}</h4>
                <div className='flex' style={{ justifyContent: "center", color: "grey" }}>
                  <h5 style={{ padding: "0 5px" }}>{book.averageRating ? book.averageRating+"⭐": "--⭐"}</h5>
                  <h5>Free</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
