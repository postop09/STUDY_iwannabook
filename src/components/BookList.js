import React, { useEffect } from 'react';
import styled from "styled-components";
import Book from './Book';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFrontEnd } from '../features/frontEnd';

export default function BookList() {
  const frontEnd = useSelector((store) => store.frontEnd.books);
  const dispatch = useDispatch();
  let pageCount = 1;

  useEffect(() => {
    dispatch(fetchFrontEnd('프론트엔드', pageCount));
  }, [pageCount]);
  console.log(frontEnd);
  
  return (
    <section>
      <WrapBookList>
      <H2Title>도서 목록</H2Title>
        <ListCategory>
          <li><button type='button' name='frontend'>프론트엔드</button></li>
          <li><button type='button' name='webDev'>웹개발</button></li>
          <li><button type='button' name='webDesign'>웹디자인</button></li>
        </ListCategory>
        <SecFrontend>
          <H3hide>프론트엔드 도서 목록</H3hide>
          <ListBook>
            {
              frontEnd.map((book) => {
                return (
                  <Book key={book.isbn} info={book} />
                )
              })
            }
          </ListBook>
        </SecFrontend>
      </WrapBookList>
    </section>
  )
}

const WrapBookList = styled.div`
  max-width: 1024px;
  margin: 110px auto 0;
  `
const H2Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
`
const ListCategory = styled.ul`
  display: flex;
  margin-bottom: 25px;
  li {
    box-shadow: 0 1px 5px #00000080;
    border-radius: 15px;
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
  button {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    font-size: 16px;
    transition: all .1s;
    &:hover {
      background-color: #FFEBCD;
    }
  }
`
const SecFrontend = styled.article`
  padding: 40px 20px;
  background-color: #FFEBCD;
`
const H3hide = styled.h3`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`
const ListBook = styled.ul`
  overflow: hidden;
`