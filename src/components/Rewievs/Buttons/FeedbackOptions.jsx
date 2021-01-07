import PropTypes from 'prop-types';

export default function Buttons({ type, onButtonsClick }) {
  return (<>
    <button type={type} onClick={() => onButtonsClick('good')}>
      Good
    </button>
    <button type={type} onClick={() => onButtonsClick('neutral')}>
      Neutral
    </button>
    <button type={type} onClick={() => onButtonsClick('bad')}>
      Bad
    </button>
  </>)
}
  
Buttons.propTypes = {
  type: PropTypes.string,
  onButtonsClick: PropTypes.func,
};


