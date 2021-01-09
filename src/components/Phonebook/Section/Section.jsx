import PropTypes from 'prop-types';


export default function Section({title, children }) {
return (
  <>
        <section><h1>{title}</h1></section>{children}
  </>
);
}

Section.propTypes = {
  children: PropTypes.any.isRequired,
};