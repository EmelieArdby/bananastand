const greet = () => {
	console.log ('välkommen')
	}


const counter = () => {
	console.log ('115')
}


const banana = '50'
const spoon = '3'
const counter1 = () => {
	console.log (banana*2 + spoon*5)
}
	

const Banana2 = {
	name: 'Bananasplit',
	price: 50

}
const Spoon2 = {
	name: 'spoon',
	price: 3

}

const DescribeBanana2 = () => {
	console.log (Banana2.name + Banana2.price)
}

const DescribeSpoon2 = () => {
	console.log (Spoon2.name + Spoon2.price)
}


const menu = [Banana2, Spoon2]
menu[2] = { name: 'Glass', price: 10}

const describeItem = (item) => {
	console.log (item.name + item.price)
}

const describeMenu = () => {
	describeItem(menu[0])
}

greet ()
counter ()


DescribeSpoon2 ()
describeMenu ()

