const fs = require("fs");
const { log } = require("util");

// Reading from JSON file --> data.json
fs.readFile("./data.json", "utf-8", (err, data) => {
	if (err) {
		console.log(`Something went wrong: ${err}`);
		return;
	}
	try {
		console.log(JSON.parse(data));
	} catch (parseError) {
		console.log(`Error parse JSON: ${parseError}`);
	}
});

// Writing to JSON file --> data.json
const content = {
	name: "Anirudha",
	age: 24,
	email: "anirudha@gmail.com",
	address: {
		street: "Sali Galli",
		city: "Koganoli",
		state: "Karnataka",
		country: "India",
	},
};
fs.writeFile("./data.json", JSON.stringify(content), (err) => {
	if (err) {
		console.log(`Something went wrong: ${err}`);
		return;
	}
	console.log(`File written successfully`);
});
