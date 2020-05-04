document.addEventListener("visibilitychange", ev => {
	const LI = document.createElement("LI");
	LI.innerHTML = "<b>" + new Date().toLocaleTimeString() + "</b> ==> " + document.visibilityState;
	document.getElementById("eventlist").appendChild(LI);
	document.title = document.visibilityState;
});
const LI = document.createElement("LI");
LI.innerHTML = "<b>" + new Date().toLocaleTimeString() + "</b> ==> " + document.visibilityState;
document.getElementById("eventlist").appendChild(LI);
