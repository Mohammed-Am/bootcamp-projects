import './Car.css';

const Car = (props) => {
    let {name, carBrand} = props;
    return <h2 style={{ fontSize: '20px', 
                      fontWeight: '300', 
                      letterSpacing: '2px' }}>
            Hi, I am a Car {carBrand}! My name is {name}
           </h2>;;

}

export default Car;