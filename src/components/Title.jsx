import PropTypes from "prop-types";
export default function Title({ title }) {
  return (
    <div className="text-white text-4xl font-semibold whitespace-nowrap max-md:max-w-full max-md:text-4xl">
      {title}
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
