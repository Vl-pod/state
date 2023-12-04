import { useState } from 'react';
import './App.css'

const products = [{
	name: "Nike Metcon 2",
	price: "130",
	color: "red",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
	name: "Nike Metcon 2",
	price: "130",
	color: "green",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
	name: "Nike Metcon 2",
	price: "130",
	color: "blue",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
	name: "Nike Metcon 2",
	price: "130",
	color: "black",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
	name: "Nike free run",
	price: "170",
	color: "black",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
	name: "Nike Metcon 3",
	price: "150",
	color: "green",
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];



export const IconSwitch = ({ onSwitch }) => {
  const [isListView, setListView] = useState(true);

  const handleClick = () => {
    setListView(!isListView);
    if (onSwitch) {
      onSwitch(!isListView); 
    }
  };

  return (
    <div className="icon-switch" onClick={handleClick}>
      <span className="material-icons">
        {isListView ? 'view_list' : 'view_module'}
      </span>
    </div>
  );
};




const Card = ({ name, price, color, image }) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    display: 'flex',
		flexDirection: 'column',
  };

  return (
    
      <div className='card-content' style={cardStyle}>
        <h1 className='title'>{name}</h1>
        <p className='color'>{color}</p>
        <div className="card-footer">
          <p className='price'>${price}</p>
          <button className='card-button'>add to cart</button>
        </div>
      </div>
    
  );
};


const CardContainer = ({ viewMode }) => {
	const containerClassName = `card-container${viewMode === 'grid' ? '__grid' : '__flex'}`
	
	return (
		<>
		<div className={containerClassName}>
			{products.map((product, index) =>(
				<Card
					key={index}
					name={product.name}
					price={product.price}
					color={product.color}
					image={product.img}
				/>
			))}
		</div>
		</>
	); 
};


function App() {
	const [viewMode, setViewMode] = useState('grid');

	const handleSwitch = (isListView) => {
		setViewMode(isListView ? 'grid' : 'flex');
	};

	return (
    <>
			<IconSwitch onSwitch={handleSwitch}/>
      <CardContainer viewMode={viewMode}/>
    </>
  )
}

export default App;

