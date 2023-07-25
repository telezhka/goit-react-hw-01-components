import css from '../styles/Friends.module.css'
import PropTypes from "prop-types"
import { FriendsListItem } from './FriendsListItem'
export const FriendList = ({ friends }) => (
    <ul className={css.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
            <FriendsListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                id={id}
            ></FriendsListItem>
))}
</ul>
)
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    )
}
