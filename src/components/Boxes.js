import AOS from "aos";
import "aos/dist/aos.css";
const Boxes = (props) => {
  AOS.init({
    duration: 1200,
  });
  return (
    <div data-aos={`${props.dataAOS}`} className={`boxes ${props.align}`}>
      <h1>{props.nama}</h1>
      <a href={props.instagram}>Instagram</a>
      <a href={props.github}>Github</a>
      <a href={props.linkedin}>LinkedIn</a>
    </div>
  );
};
export default Boxes;
