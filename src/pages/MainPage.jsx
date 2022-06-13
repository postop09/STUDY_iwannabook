import React from 'react';
import BookList from '../components/BookList';
import Search from '../components/Search';

export default function MainPage() {
  return (
    <main>
      <Search />
      <BookList />
    </main>
  )
}
