import React from 'react';
import Header from './components/Header';
import Posts from './components/Posts';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Posts />
        <Sidebar />
      </main>
    </>
  );
}
