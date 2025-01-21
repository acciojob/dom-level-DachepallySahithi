//your JS code here. If required.
const levelElement = document.getElementById("level");
function findDOMLevel(element, level = 0) {
	if(element === null){
		return level;
	}
	return findDOMLevel(element.parentElement, level + 1);
}
const domLevel = findDOMLevel(levelElement);
alert('The level of the element is: ${domLevel}')