import choc, {set_content, on, DOM} from "https://rosuav.github.io/shed/chocfactory.js";
import "https://cdn.jsdelivr.net/npm/comfy.js/dist/comfy.min.js"; const ComfyJS = window.ComfyJS;
const {LI, B, SPAN} = choc;

function log(msg)
{
	DOM("#eventlist").appendChild(LI([
		B(new Date().toLocaleTimeString()),
		" " + msg,
	]));
}

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
	if (command === "ratigan")
	{
		console.log("Got a command");
		log("Got a !ratigan");
	}
}

ComfyJS.onError = err => log("Got an error: " + err);
ComfyJS.onConnected = () => log("Connected to Twitch Chat");
ComfyJS.onReconnect = () => log("Reconnected");

ComfyJS.Init("rosuav");
