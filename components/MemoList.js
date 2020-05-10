import React, {Component} from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import firebase from "firebase";
import Lib from '../static/address_lib';
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
        this.getMemoList();
    }
    logouted(){
        Router.push('/');
    }

    getMemoList() {
        if (this.props.email == undefined ||
            this.props.email == ''){ return; }
        let email = Lib.encodeEmail(this.props.email);
        let db = firebase.database();
        let ref = db.ref('memo/');
        let self = this;
        ref.orderByKey()
            .equalTo(email)
            .on('value', (snapshot)=>{
                let d = Lib.deepcopy(snapshot.val());
                this.props.dispatch({
                    type:'UPDATE_USER',
                    value:{
                        login:this.props.login,
                        username: this.props.username,
                        email: this.props.email,
                        data:d,
                        items:self.getItem(d)
                    }
                });
            });
    }

    getItem(data) {
        if (data == undefined){ return; }
        let res = [];
        console.log(data)
        for (let i in data){
            console.log(i)
            for(let j in data[i]){
                console.log(data[i][j])
                let id = data[i][j].id;
                let title = data[i][j].title;
                let body = data[i][j].body;
                res.push(
                <table border="1">
                <tbody>
                    <tr>
                        <td>{title}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>{body}</td>
                    </tr>
                    </tbody>
                </table>
                );
            }
            break;
        }
        console.log(res)
        return res;
    }

    render(){
        const title = 'タイトル'
        const body = '詳細'
        const title2 = 'タイトル2'
        const body2 = '詳細2'
        return (
            <div>
                <h1>メモ一覧</h1>
                <Account self={this} onLogined={this.logined}
                    onLogouted={this.logouted} />
            <hr/>
                {this.props.items}
            </div>

        );
    }

}

MemoList = connect((state)=> state)(MemoList);
export default MemoList;