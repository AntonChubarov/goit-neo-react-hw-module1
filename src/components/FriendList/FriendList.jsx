import React from 'react';
import FriendListItem from './FriendListItem.jsx';
import css from './FriendList.module.css';

const FriendList = ({friends}) => (
    <div className={css.friendsList}>
        <ul>
            {friends.map((friend) => {
                return <li key={friend.id}>
                    <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}/>
                </li>;
            })}
        </ul>
    </div>
);

export default FriendList;
