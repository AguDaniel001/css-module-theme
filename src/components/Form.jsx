import React from 'react';

import Button from '../components/Button'
import Btn from '../css/Button.module.css'
import TextInput from './TextInput';
import textInput from '../css/TextInput.module.css'
import Header from './Header';
import header from '../css/Header.module.css'
import SubText from './SubText';
import subText from '../css/SubText.module.css'
import card from '../css/Card.module.css'


function Login() {
  return (
    <div className={card.card}>
      <div>
        <Header tag="h4" text="Login" className={header.header} />
        <TextInput type="email" placeholder="Email" className={textInput.input} />
        <br /><br />
        <TextInput type="password" placeholder="Password" className={textInput.input} />

      </div>

      <div>
        <SubText tag="p" text="Forgot password?" className={subText.subText} />
        <SubText tag="p" text="By continuing, you  agree to our Terms of Services and Privacy Policy." className={subText.subText} />
        <br />
        <Button className={Btn.btn} text="Login" />
        <br /><br />
        <Button className={`${Btn.btn} ${Btn.outline}`} text="Sign up" />
        
      </div>
    </div>
  );
};

export default Login;