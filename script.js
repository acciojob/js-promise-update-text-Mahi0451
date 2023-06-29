//your JS code here. If required.
function generatePromise(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Hello, world!")
		}, 1000)
	})
}

generatePromise().then((data) => {
	const ele = document.getElementById("output");
	ele.innerText = data;
})