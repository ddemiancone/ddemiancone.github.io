window.onload = function() {

/* Tenemos que guardar todos los libros en una lista de libros
que los contenga con sus respectivos datos y caracteristicas */

const bookList = [
	{
		title: 'Octubre, un crimen',
		author: 'Norma Huidobro',
		releaseYear: '2005',
		editorial: 'SM',
		isbn: '7516',
		rentals: [
			{
				rental: '07/05/2019',
				return: '07/07/2019'
			}
		]
	},
	{
		title: 'La vida de un programador',
		author: 'Luciano Di Pasquale',
		releaseYear: '2019',
		editorial: 'Zoom',
		isbn: '1234',
		rentals: [
			{
				rental: '04/06/2019',
				return: '06/07/2019'
			},
			{
				rentals: '10/08/2019',
				return: '10/10/2019'
			},
			{
				rental: '05/02/2019',
				return: '05/04/2019'
			},
			{
				rental: '21/05/2019',
				return: '25/07/2019'
			}
		]		
	},
	{
		title: 'El alquimista',
		author: 'Paulo Cohelo',
		releaseYear: '1988',
		editorial: 'HarperCollins',
		isbn: '4590',
		rentals: [
			{
				rental: '29/05/2018',
				return: '05/07/2018'
			},
			{
				rental: '06/09/2019',
				return: '06/10/2019'
			}		
		]
	},
	{
		title: 'Una historia sencilla',
		author: 'Leila Guerriero',
		releaseYear: '2013',
		editorial: 'Anagrama',
		isbn: '1500',
		rentals: [
			{
				rental: '18/05/2018',
				return: '19/07/2018'
			},
			{
				rental: '25/07/2018',
				return: '30/08/2018'
			},
			{
				rental: '12/12/2018',
				return: '06/02/2019'
			},
			{
				rental: '09/04/2019',
				return: '19/07/2019'
			},
			{
				rental: '17/07/2019',
				return: '29/08/2019'
			},
			{
				rental: '29/08/2019',
				return: '19/10/2019'
			},
			{
				rental: '11/05/2020'
			}				
		]
	},
	{
		title: 'Once minutos',
		author: 'Paulo Cohelo',
		releaseYear: '2003',
		editorial: 'Editorial Planeta',
		isbn: '1979',
		rentals: [
			{
				rental: '17/05/2019',
				return: '23/07/2019'
			},
			{
				rental: '28/07/2019',
				return: '30/09/2019'
			},
			{
				rental: '12/10/2019',
				return: '06/12/2019'
			},
			{
				rental: '04/03/2020'
			}
		]
	},
	{
		title: 'After',
		author: 'Anna Todd',
		releaseYear: '2013',
		editorial: 'undefined',
		isbn: '8787',
		rentals: [
			{
				rental: '11/06/2018',
				return: '19/08/2018'
			},
			{
				rental: '27/06/2019',
				return: '12/09/2019'
			},
			{
				rental: '15/04/2020'
			}			
		]
	},
	{
		title: 'Bajo la misma estrella',
		author: 'John Green',
		releaseYear: '2012',
		editorial: 'Nube de tinta',
		isbn: '1996',
		rentals: [
			{
				rental: '19/08/2018',
				return: '19/10/2018'
			},
			{
				rental: '25/06/2019',
				return: '30/08/2019'
			},
			{
				rental: '12/12/2019',
				return: '09/02/2020'
			},
			{
				rental: '09/04/2020'
			}						
		]
	},
	{
		title: 'La chica del tren',
		author: 'Paula Hawkins',
		releaseYear: '2015',
		editorial: 'Booket',
		isbn: '1393',
		rentals: [
			{
				rental: '18/05/2019',
				return: '19/07/2019'
			},
			{
				rental: '25/07/2019',
				return: '30/08/2019'
			},
			{
				rental: '12/12/2019',
				return: '06/02/2020'
			},
			{
				rental: '12/04/2020'
			}
		]
	},
	{
		title: 'Pideme lo que quieras',
		author: 'Megan Maxwell',
		releaseYear: '2012',
		editorial: 'Esencia',
		isbn: '7777',
		rentals: [
			{
				rental: '18/05/2018',
				return: '19/07/2018'
			}
		]
	},
	{
		title: 'Maravilloso desastre',
		author: 'Jamie Mcguire',
		releaseYear: '2011',
		editorial: 'Nube de tinta',
		isbn: '2323',
		rentals: [
			{
				rental: '18/02/2019',
				return: '19/05/2019'
			},
			{
				rental: '25/06/2019',
				return: '30/08/2019'
			}
		]
	},
	{
		title: 'Veronika decide morir',
		author: 'Paulo Cohelo',
		releaseYear: '1998',
		editorial: 'Booket',
		isbn: '1111',
		rentals: [
		]
	}							
]


const stock = getStock(bookList)
console.log(checkAvailability(bookList, '7516'))
console.log(searchByAuthor(bookList, 'Paulo Cohelo'))
console.log(getMostRented(bookList))

}