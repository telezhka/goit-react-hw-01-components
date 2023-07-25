import PropTypes from 'prop-types'
import css from '../styles/Friends.module.css'
export const FriendsListItem = ({ avatar, name, isOnline, id }) => (
    <li className={css.item} key={id}>
        <span className={isOnline ? css.green : css.red}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
)
FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}