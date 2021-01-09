import PropTypes from 'prop-types';
import s from './section.module.css';

const Section = ({ title, children }) => (
  <section className={s.bla}>
    <h2 className={s.title}>{title}</h2> {children}
  </section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
