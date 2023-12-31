import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Frame = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleClick = () => {
    navigate(`/${props.route}`);
  };

  return (
    <div className={`${props.position} grid-card group`} onClick={handleClick}>
      <div className={`${props.gambar} ${props.bg} grid-card-img`}></div>
    </div>
  );
};

export default Frame;
