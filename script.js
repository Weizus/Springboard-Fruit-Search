const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	results = fruit.filter((x) => x.toLowerCase().includes(str.toLowerCase()));

	return results;
}

function searchHandler(e) {
	// keyup event has key | code property represented as: 'Shift' | 'ShiftLeft'/'ShiftRight'
	// another example: a | KeyA or A | KeyA
	// clear the suggestion box and/or add suggestions
	if (input.value !== '') {
		showSuggestions(search(input.value), e);
	} else {
		suggestions.replaceChildren();
	}
}

const makeListElements = (innerText) => {
	let element = document.createElement('li');
	element.innerText = innerText;
	return element;
}

function showSuggestions(results, inputVal) {
	// We want to show a drop box in the suggestions div.
	// the code suggests a ul
	console.log(`User pressed ${inputVal.key} @ ${inputVal.code} | The current input string: ${input.value}`);
	console.log(`Current values based on current sequence of keys: ${results.join(", ")}`);
	suggestions.replaceChildren();
	// Conditional for readability:
	if (results.length > 10) {
		for (let i = 0; i < 10; i++) {
			let newElem = makeListElements(results[i]);
			suggestions.appendChild(newElem);
		}
	} else {
		results.forEach((x) => {
			let newElem = makeListElements(x);
			suggestions.appendChild(newElem);
		});	
	}
}

function useSuggestion(e) {
	console.log(e.srcElement.innerText);
	// ez function just set value in the input n' remove all the children nodes
	input.value = e.srcElement.innerText;
	suggestions.replaceChildren();	
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);


// Other notes:
// console.log(`value of the input element ${input.value.toLowerCase()}`);
// let newOl = document.createElement('ol');
// newOl.innerText = 'Petta';
// suggestions.appendChild(newOl);
// console.log(suggestions.innerHTML);
