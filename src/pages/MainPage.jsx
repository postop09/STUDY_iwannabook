import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/BookList';
import Search from '../components/Search';
import { clearCart } from '../features/cart';

export default function MainPage() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  // console.log(cart);

  return (
    <main>
      <Search />
      <BookList />
    </main>
  )
}
