import Container from 'react-bootstrap/Container';
import Topmenu from './component/Topmenu';
import Banner from './component/Banner';
import Home from './Page/Home';
import Footer from './component/Footer';


const App=()=>{
    return(
        <>
        <Container>
        <Topmenu />
        <Banner />
        <Home />
        </Container>
        <Footer />
        </>
    )
}
export default App;