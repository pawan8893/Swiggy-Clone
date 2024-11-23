import Header from './Components/Header';
import Filter from './Components/Filter';
import Footer from './Components/Footer';
import './App.css';
import MainContent from './Components/MainContent';
import React, { useState } from 'react';
import MyModal from './Components/MyModal';

function App() {
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleOpen = ()=>{
    setShowModal(true)
  }
  const handleClose = ()=>{
    setShowModal(false)
  }


  return (
    <>
      <Header />
      <Filter
        onFilterChange={(selectedFilter) => setFilter(selectedFilter)}
        onSortChange={() => setSort((prev) => !prev)}
      />
      {showModal && <MyModal handleClose={handleClose}/>}
      <MainContent filter={filter} sortTrigger={sort} handleOpen={handleOpen} />
      <Footer />
    </>
  );
}

export default App;
