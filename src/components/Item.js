import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Item.css";

const Item = ({
  className = "",
  clarkspng,
  clarks,
  propLeft,
  propTop,
  propMinWidth,
}) => {
  const itemStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const clarksStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`item5 ${className}`} style={itemStyle}>
      <img className="clarkspng-icon" alt="" src={clarkspng} />
      <div className="clarks-wrapper">
        <a
          className="clarks"
          href="https://www.figma.com/design/pwILOhgZjyci5pd3NAHYMV?node-id=2-1651"
          target="_blank"
          style={clarksStyle}
        >
          {clarks}
        </a>
      </div>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  clarkspng: PropTypes.string,
  clarks: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default Item;
