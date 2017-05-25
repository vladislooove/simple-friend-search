import React from 'react';
import ReactDOM from 'react-dom';

var friends = [
  {
    name: 'Петр Порох',
    tel: '+380333999444',
    img: 'http://ua-news.in.ua/uploads/posts/2015-10/1446136253_05ec7e3892_256crop.jpg',
    id: '0'
  },{
    name: 'Владимир Путин',
    tel: '+709995555443',
    img: 'http://kursk46.com/upload/2014/06/20/256x256_1403249538_Putin-poprivetstvoval-uchastnikov-patrioticheskogo-foruma-v-Kurske.jpg',
    id: '1'
  },{
    name: 'Владимир Янукович',
    tel: '+39004222354',
    img: 'http://tolko-biznes.ru/wp-content/uploads/2011/09/519508918.jpg',
    id: '2'
  },{
    name: 'Дмитрий Ярош',
    tel: '+38066626623',
    img: 'https://pimg.mycdn.me/getImage?url=http%3A%2F%2Fbm.img.com.ua%2Fberlin%2Fstorage%2Fnews%2Forig%2F2%2Fa1%2F2bbce5e7772b2bb5849f07c1acc40a12.jpg&type=TOPIC_LINK_128&signatureToken=IS856alR-irVHG10tUyHnQ',
    id: '3'
  }
];

var FriendListItem = React.createClass({
  render: function() {
    return (
      <li className='friend-list__item'>
        <img className="friend-list__img"
             src={this.props.img} />
        <div className="friend-list__data">
          <div className='friend-list__name'>{this.props.name}</div>
          <a className="friend-list__tel" href={`tel:${this.props.tel.slice(1)}`}>{this.props.tel}</a>
        </div>
      </li>
    );
  }
});

var FriendList = React.createClass({
  getInitialState: function(){
    return {
      displayedFriends: friends
    } 
  },
  filterFriends: function(e){
    var searchQuery = e.target.value.toLowerCase();
    var displayedFriends = friends.filter(function(item){
      var searchValue = item.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState({displayedFriends: displayedFriends})
  },
  render: function(){
    return(
      <div className="friend-list-wrapper">
        <input type="text"
               className="friend-list__search-field"
               onChange={this.filterFriends} />
        <ul className="friend-list">
          {
            this.state.displayedFriends.map(function(el){
              return <FriendListItem  key={el.id}
                                      name={el.name}
                                      tel={el.tel}
                                      img ={el.img} />
            })
          }
        </ul>
      </div>
    );
  }
});

ReactDOM.render(<FriendList />, document.querySelector('#root'));
