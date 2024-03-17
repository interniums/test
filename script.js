let array = []

const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const button = document.getElementById("button")
button.addEventListener("click", function(event) {
	if (event) {getValue()}
})

function getValue () {

	let input1Value = input1.value
	let input2Value = input2.value

	function object (name, surname) {
		this.name = name
		this.surnamne = surname
	}

	const newBook = new object(input1Value, input2Value)

	function push() {array.push(newBook)}

	for (let i = 0; i < array.length; i++) {
		create()
	}

	function create() {
		const div = document.getElementById("div")
		const newP = document.createElement("p")
		newP.textContent = "text"
		newP.id = "p"
		div.appendChild("p")
	}
}