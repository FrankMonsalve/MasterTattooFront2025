import PropTypes from 'prop-types';

function ButtonMode(props) {
     const [darkMode, setDarkMode] = useState(false);
    
      // Cambiar el modo oscuro cuando el usuario hace clic en el botón
      const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
      };
    
      // Cambiar la clase de body al cambiar el modo oscuro
      useEffect(() => {
        if (darkMode) {
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
      }, [darkMode]);    
  return (
    <div>ButtonMode</div>
  )
}

ButtonMode.propTypes = {}

export default ButtonMode
