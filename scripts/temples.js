const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	// Add more temple objects here...
  ];


const homeLink = document.getElementById("home-link");
const oldLink = document.getElementById("old-link");
const newLink = document.getElementById("new-link");
const largeLink = document.getElementById("large-link");
const smallLink = document.getElementById("small-link");
const heading = document.querySelector(" h3");

createTemple(temples);

// this code is  refering to a actual info when user click  the link
homeLink.addEventListener("click", () => {
  createTemple(temples);
  heading.textContent = " Home ";
});

newLink.addEventListener("click", () => {
  const newTemples = temples.filter((temple) => {
    const year = new Date(temple.dedicated).getFullYear();
    return year >= 2005 && year <= 2024;
  });
  createTemple(newTemples);
  heading.textContent = "New"
});

oldLink.addEventListener("click", () => {
	const newTemples = temples.filter((temple) => {
	  const year = new Date(temple.dedicated).getFullYear();
	  return  year < 2005;
	});
	createTemple(newTemples);
	heading.textContent = "Old"
  });

largeLink.addEventListener("click", () => {
  const largeTemples = temples.filter((temple) => temple.area >= 10000);
  createTemple(largeTemples);
  heading.textContent = "Large"
});

smallLink.addEventListener("click", () => {
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  createTemple(smallTemples);
  heading.textContent = "Small"
});
 
// end of code 



//this code  will display info about temples 
  function createTemple(ftemble) {
	document.querySelector(".res-grid").innerHTML ="";
	ftemble.forEach(temple =>{
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");	
		let dedicated = document.createElement("p");
		let area = document.createElement("p");
		let image = document.createElement("img");

		name.textContent = temple.templeName

		location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
		dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq. ft.`;
		image.setAttribute("src" ,temple.imageUrl);
		image.setAttribute("alt" ,`${temple.templeName} temple`);
		image.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(image);

		document.querySelector(".res-grid").appendChild(card);

		
	})
	
  }