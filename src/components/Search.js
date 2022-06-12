import React from 'react';
import styled from "styled-components";

export default function Search() {
  return (
    <SecSearch>
      <WrapSearch>
        <H2Title>도서 검색</H2Title>
        <LabelSearch htmlFor='inp_mainSearch'>검색창</LabelSearch>
        <InpSearch type='text' id='inp_mainSearch' placeholder='제목을 검색해주세요.'/>
      </WrapSearch>
    </SecSearch>
  )
}

const SecSearch = styled.section`
  text-align: center;
`
const H2Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 40px;
`
const WrapSearch = styled.div`
  padding-top: 110px;
`
const LabelSearch = styled.label`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`
const InpSearch = styled.input`
  border : none;
  border-radius: 45px;
  box-shadow: 0 1px 7px #00000050;
  width: 700px;
  height: 60px;
  padding: 5px 20px;
  font-size: 16px;
  background-color: #FFEBCD;
`