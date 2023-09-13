import React from 'react';
import styled from "styled-components";

export default function Book({info}) {
  const date = info.datetime.slice(0,10);
  // console.log(info);

  return (
    <ItmeBook>
      <button>
        <WrapBook>
          <WrapDetail>
            <h4>{info.title}</h4>
            <p>
              {info.contents}
            </p>
            <small>{date}</small>
            <strong>{info.price} 원</strong>
          </WrapDetail>
          <ImgBook src={info.thumbnail} alt='' />
        </WrapBook>
      </button>
    </ItmeBook>
  )
}

const ItmeBook = styled.li`
  float: left;
  margin: 15px;
  width: calc(25% - 30px);
  &:hover div {
    left: 0;
  }
  > button {
    width: 100%;
    padding: 0;
    overflow: hidden;
  }
`
const WrapBook = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
`
const WrapDetail = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  color: #fff;
  background-color: #000000c4;
  transition: all .3s;
  > h4 {
    margin-bottom: 7px;
    font-size: 1.1rem;
    font-weight: 700;
    text-align: left;
  }
  > p {
    display: -webkit-box;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 0.9rem;
    text-align: left;
    word-break: keep-all;
  }
  > small {
      display: block;
      margin-top: auto;
      font-size: 0.8rem;
      text-align: right;
  }
  > strong {
    display: block;
    margin-top: 5px;
    font-size: 1.1rem;
    font-weight: 700;
    text-align: right;
  }
`
const ImgBook = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  background-color: #F5DEB3;
  object-fit: cover;
  object-position: center center;
`