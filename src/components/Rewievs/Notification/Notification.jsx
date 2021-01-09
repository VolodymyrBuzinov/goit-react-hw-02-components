import PropTypes from 'prop-types';
import style from './notification.module.css'
const Notification = ({ message }) => (
  <>     
      <span className={style.message}> {message} </span>  
  </>
);
Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
