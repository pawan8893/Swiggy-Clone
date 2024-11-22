import Header from './Components/Header';
import Filter from './Components/Filter';
import Footer from './Components/Footer';
import './App.css';
import MainContent from './Components/MainContent';
import React, { useState } from 'react';

function App() {
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(false);

  return (
    <>
      <Header />
      <Filter
        onFilterChange={(selectedFilter) => setFilter(selectedFilter)}
        onSortChange={() => setSort((prev) => !prev)}
      />
      <MainContent filter={filter} sortTrigger={sort} />
      <Footer />
    </>
  );
}

export default App;
