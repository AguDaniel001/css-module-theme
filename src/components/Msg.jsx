import React from 'react'
import Header from './Header';
import header from '../css/Header.module.css'
import SubText from './SubText';
import subText from '../css/SubText.module.css'

function Msg() {
  return (
    <div>
      <Header tag="h2" text="Welcome!" className={header.header} />
      <SubText tag="p" text="We are happy to have you back. Kindly login " className={subText.subText} />
    </div>
  )
}

export default Msg