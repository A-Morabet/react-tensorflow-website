const PlusSvg = ({ className = "" }) => {
  return (
    <svg className={`${className} || ""`} height="100" width="100" xmlns="http://www.w3.org/2000/svg">
    <circle r="8" cx="50" cy="50" fill="#EEA509" />
    </svg>
  );
};

export default PlusSvg;
