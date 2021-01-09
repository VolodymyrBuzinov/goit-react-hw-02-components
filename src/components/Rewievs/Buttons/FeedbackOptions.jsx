import PropTypes from 'prop-types';

export default function Buttons({ type, onLeaveFeedback }) {
  return (<>
    <button type={type} onClick={() => onLeaveFeedback('good')}>
      Good
    </button>
    <button type={type} onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </button>
    <button type={type} onClick={() => onLeaveFeedback('bad')}>
      Bad
    </button>
  </>)
}
  
Buttons.propTypes = {
  type: PropTypes.string,
  onButtonsClick: PropTypes.func,
};


