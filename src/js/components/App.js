import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link, browserHistory } from 'react-router'

class App extends React.Component{
    createItems(){
        return this.props.test.map((item) => {
            return (
                <b key={item.id}>{item.name}</b>
            )
        })
    }
    createItems2(){
        return this.props.testtwo.map((item) => {
            return (
                <b key={item.id}>{item.name}</b>
            )
        })
    }


    render(){
        return (
            <h2>
                {this.createItems()}
                {this.createItems2()}
            </h2>
        )
    }
}

function mapStateToProps(state){
    return {
        test: state.test,
        testtwo: state.testtwo
    }
}

export default connect(mapStateToProps)(App);