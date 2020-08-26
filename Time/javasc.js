const companies = [
	{name: "one" , category: "automation", start: "1990", end: "2010"},
	{name: "2" , category: "automobile", start: "1990", end: "2011"},
	{name: "3" , category: "auto", start: "1990", end: "1901"},
	{name: "4" , category: "retail", start: "1990", end: "1931"},
	{name: "5" , category: "automation", start: "1990", end: "1998"},
	{name: "6" , category: "automobile", start: "1990", end: "2011"},
	{name: "7" , category: "retail", start: "1990", end: "2001"},
	{name: "8" , category: "automation", start: "1990", end: "2008"},
	{name: "nine" , category: "automobile", start: "1990", end: "1991"},
	{name: "ten" , category: "retail", start: "1990", end: "2011"}
]


const ages = [21,22,33,44,66,23,75,22,1,55,21,14,16,23,18,10,33]

// for (var i = 0; i < companies.length; i++) {
// 	console.log(companies[i]);
// }



//FOR EACH LOOP
// companies.forEach(function(company) {
// 	console.log(company);
// })

//FILTER

// let canDrink = [];
// for (var i = 0; i < ages.length; i++) {
// 	if(ages[i] >= 25){
// 		canDrink.push(ages[i]);
// 	}
// }
// console.log(canDrink);






// const canDrink = ages.filter(function(age) {
// 	if(age >= 21){;
// 		return true;
// 	}
// });
// console.log(canDrink)




// const canDrink = ages.filter(age => age >=21);
// console.log(canDrink)



// const retailCompanies = companies.filter(function(company){
// 	if (company.category === 'automobile') {
// 		return true;
// 	}
// })
// console.log(retailCompanies);


// const retailCompanies = companies.filter(company=> company.category === 'automation');
// console.log(retailCompanies)


// const startda = companies.filter(stat=> stat.end >= 1998);
// console.log(startda);



// let time = setTimeout(fun, 2000);

// function fun(){
// 	alert('hello')
// }

let time = setInterval(d, 1000);

function d(){
	let date = new Date();
 	 document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}
