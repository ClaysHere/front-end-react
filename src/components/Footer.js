const Footer = (props) => {
  return (
    <footer
      className={`${props.marg} ${props.disp} flex justify-center items-center py-8 bg-black text-white bg-opacity-70`}>
      <p>FruitPedia &copy;2023</p>
    </footer>
  );
};

export default Footer;
