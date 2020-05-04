import choc, {set_content, on, DOM} from "https://rosuav.github.io/shed/chocfactory.js";
const {LI, B, SPAN} = choc;

let last_time = +new Date();
document.addEventListener("visibilitychange", ev => {
	const tm = +new Date();
	const delay = (tm - last_time) / 1000; // seconds
	last_time = tm;
	DOM("#eventlist").appendChild(LI([
		B(new Date().toLocaleTimeString()),
		` (${delay} secs) `,
		B(document.hidden ? "HIDDEN" : "VISIBLE"),
		" ==> " + document.visibilityState,
	]));
	document.title = document.visibilityState;
});
DOM("#eventlist").appendChild(LI([B(new Date().toLocaleTimeString() + " "), document.visibilityState || "(unknown)"]));
