import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import firebase from "firebase";
import Account from './Account';

class MemoList extends Component {
    style = {
        fontSize:"12pt",
        padding:"5px 10px"
    }

    constructor(props) {
        super(props);
        this.logined = this.logined.bind(this);
        this.logouted = this.logouted.bind(this);
    }

    logined(){
        console.log('logined.');
    }
    logouted(){
        Router.push('/');
    }

    render(){
        return (
            <div>
                <h1>メモ一覧</h1>
                <Account self={this} onLogined={this.logined}
                    onLogouted={this.logouted} />
            <hr/>
            <a>ここにメモリスト</a>

            </div>

        );
    }

}

MemoList = connect((state)=> state)(MemoList);
export default MemoList;