import React from 'react';
import styled from "styled-components";

export default function Nav() {
  return (
    <SecHeader>
      <H1hide>도서 검색 및 목록, 관리</H1hide>
      <NavCenter>
        <div>
          <LabelSearch htmlFor='inp_search'>검색창</LabelSearch>
          <InpSearch type='text' id='inp_search' placeholder='제목을 검색해주세요.'/>
        </div>
        <button>
          <ImgMypage src={require('../img/icon_user.png')} alt='북마크'/>
        </button>
      </NavCenter>
    </SecHeader>
  )
}
const SecHeader = styled.header`
  position: fixed;
  top: 0;
  box-shadow: 0 3px 5px #00000050;
  width: 100vw;
  padding: 8px;
  background-color: #fff;
  z-index: 100;
`
const H1hide = styled.h1`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`
const NavCenter = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: auto;
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
  width: 400px;
  height: 45px;
  padding: 5px 20px;
  font-size: 16px;
  background-color: #FFEBCD;
`
const ImgMypage = styled.img`
  display: block;
  width: 25px;
  height: 25px;
`