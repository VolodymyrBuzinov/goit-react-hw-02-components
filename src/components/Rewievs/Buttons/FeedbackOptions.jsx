import PropTypes from 'prop-types';
import style from './Buttons.module.css'

export default function Buttons({ type, onLeaveFeedback }) {
  return (<>
    <button className={style.button} type={type} onClick={() => onLeaveFeedback('good')}>
      Good
    </button>
    <button className={style.button} type={type} onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </button>
    <button className={style.button} type={type} onClick={() => onLeaveFeedback('bad')}>
      Bad
    </button>
  </>)
}
  
Buttons.propTypes = {
  type: PropTypes.string,
  onButtonsClick: PropTypes.func,
};


