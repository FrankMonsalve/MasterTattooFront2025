import "../styles/global.css";
import imageCalendar from "../assets/icons/calendar.png";
import imageStore from "../assets/icons/store1.png";
import imageStyle from "../assets/icons/style.png";
import Card from "../components/basics/Card";
import ConsumoApi from '../components/functionals/ConsumoApi'
import './home.css'

const Home = () => {
    return (
        <>
        <h3 className="subtitle-main">Nuestros servicios</h3>
        <div className="container-cards">
           <Card image={imageCalendar} text="Agenda tu cita" />
           <Card className="middle-card" image={imageStore} text="Tienda/supply" />
           <Card image={imageStyle} text="Conoce tu estilo de tattoo" />
        </div>
        <ConsumoApi></ConsumoApi>
        </>
    );
}

export default Home;