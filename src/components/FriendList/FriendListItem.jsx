import React from 'react';
import css from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => (
    <div className={css.friendItem}>
        <img className={css.avatar} src={avatar} alt="Avatar" width="48"/>
        <p className={css.name}>{name}</p>
        <p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
            {isOnline ? 'Online' : 'Offline'}
        </p>
    </div>
);

export default FriendListItem;
