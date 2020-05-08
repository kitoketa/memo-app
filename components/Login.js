import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Account from './Account';

class Login extends Component {
    style = {
      fontSize:"12pt",
      padding:"5px 10px"
    }

    constructor(props) {
        super(props);
        this.logined = this.logined.bind(this);
        this.logouted = this.logouted.bind(this);
    }

    // login,logout処理
    logined(){
        alert("ログインしました")
        Router.push('/memo_list')
     }
    logouted(){
        alert("ログインしてください")
    }

    render(){
        return (
          <div>
            <Account onLogined={this.logined}
              onLogouted={this.logouted} />
          </div>
        )
      }
}

Login = connect((state)=> state)(Login);
export default Login;