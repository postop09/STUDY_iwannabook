import axios from '../api/axios';
import React, { useEffect, useState } from 'react'

export default function useFetchBook(_query, _page) {
  const [bookList, setBookList] = useState('');
  async function fetchBook(_query, _page) {
    const res = await axios.get('', {
      params : {
        query : _query,
        page : _page
      }
    });
    console.log(res.data.documents);
    setBookList(res.data.documents);
  }

  useEffect(() => {
    fetchBook(_query, _page);
  }, [_page])

  return bookList;
}
