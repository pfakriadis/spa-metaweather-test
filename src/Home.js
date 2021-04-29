import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";

function Home() {
    const [search, setSearch] = useState("");

    const handleChangeSearch = (value) => {
        setSearch(value);
    };
  return (
    <>
      <Header handleSearch={handleChangeSearch}/>
      <Main search={search}/>
      <Footer/>
    </>
  );
}

export default Home;
