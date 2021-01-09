import PropTypes from 'prop-types';


export default function Section({title, children }) {
return (
  <>
        <section><h1>{title}</h1></section>{children}
  </>
);
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};