function getColor(colorNumber = 0) {
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: return "red";

		case 2: return "yellow";

		case 3: return "blue";

		case 4: return "green";

		default: return "black";

	}
}

function getAllStudentColors() {
	const students = ["Lucas", "Martina", "Carlos", "Maria", "Juan", "Andrea", "Pedro", "Laura", "Pablo", "Carmen"];
	const colors = [];
	//your loop here
	for (let i = 0; i < students.length; i++) {
		const randomNum = Math.floor(Math.random() * 4) + 1;
		const color = getColor(randomNum);
		colors.push(color);
		console.log(`${students[i]}: ${color}`);
	  }
	
	  return colors;
	}
//call the function below with the number of students in the class and print on the console
getAllStudentColors();

