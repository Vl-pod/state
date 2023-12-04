import { useState } from 'react';
import './App.css'



//1st task
// ProjectList компонент, который показывает карточки с учетом фильтрации
export const ProjectList = ({ data, filter }) => {
	// Фильтрация карточек на основе текущего значения фильтра
	const filteredProjects = data.filter((item) => {
		if (filter === 0) {
		return true; // Показать все карточки, если фильтр не выбран
		} 
		return item.category === filter;
		
	});

	return (
		<div className="container">
		{filteredProjects.map((item, index) => (
			<div key={index} className='card'>
			<img src={item.img} alt={item.category} />
			</div>
		))}
		</div>
	);
};

// Toolbar компонент, который фильтрует карточки при нажатии на кнопку
export const Toolbar = ({ onSelectFilter }) => {
	const handleClick = (filter) => {
		onSelectFilter(filter);
	};

	return (
	<div className="tool-raw">
		<button onClick={() => handleClick(0)} className="all">All</button>
		<button onClick={() => handleClick("Websites")} className="websiters">Websites</button>
		<button onClick={() => handleClick("Flayers")} className="flayers">Flayers</button>
		<button onClick={() => handleClick("Business Cards")} className="buisnesCard">Business Cards</button>
	</div>
	);
};

// Portfolio компонент, который содержит Toolbar и ProjectList
export const Portfolio = ({ data }) => {
	const [filter, setFilter] = useState(0);
  
	const handleFilterChange = (filter) => {
		setFilter(filter);
	};
  
	return (
		<>
			<Toolbar onSelectFilter={handleFilterChange} />
			<ProjectList data={data} filter={filter} /> {/* Передаем значение filter в ProjectList */}
		</>
	);
  };
	
export function App() {
  const data = [{
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
	category: "Business Cards"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
	category: "Websites"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
	category: "Websites"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
	category: "Websites"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
	category: "Business Cards"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
	category: "Websites"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
	category: "Websites"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
	category: "Business Cards"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
	category: "Websites"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
	category: "Flayers"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
	category: "Websites"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
	category: "Business Cards"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
	category: "Websites"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
	category: "Websites"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
	category: "Business Cards"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
	category: "Websites"
  }, {
	img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
	category: "Flayers"
  }]



  return (
    <>
    <Portfolio data={data} />
    </>
  );
}


