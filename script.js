// select 
const msg = document.getElementById('text').trim();
const delay = document.getElementById('delay');
const btn = document.getElementById('btn');
const msgDiv = document.getElementById('output');

async function returnMsg(){
	try {
		if(msg && delay){
			await delayMsg(msg, delay);
			msgDiv.style.display = 'block';
			msgDiv.textContent = `${msg}`;
		} else {
			throw new Error("Input fields are empty!");
		}
	} catch (error) {
		console.log(error.message || error);
	}	
}

function delayMsg(msg, delay){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(msg);
		}, delay)
	})
}


btn.addEventListener('click', returnMsg);