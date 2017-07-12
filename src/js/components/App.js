import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class App extends React.Component{
    createItems(){
        return this.props.friends.map((el) => {
            return (
                <li className='friend-list__item'
                    key={el.id}>
                    <img className="friend-list__img"
                        src={el.img} />
                    <div className="friend-list__data">
                        <div className='friend-list__name'>{el.name}</div>
                        <a className="friend-list__tel" href={`tel:${el.tel.slice(1)}`}>{el.tel}</a>
                    </div>
                    <button className="friend-list__remove"></button>
                </li>
            )
        })
    }

    render(){
        return (
            <div className="friend-list-wrapper">
                <div className="friend-list__title">My friends</div>
                <input type="text"
                    className="friend-list__search-field"
                    placeholder="Search"/>
                <div className="input-animate" />
                
                <ul className="friend-list">
                    {this.createItems()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        friends: state.friends,
    }
}

export default connect(mapStateToProps)(App);