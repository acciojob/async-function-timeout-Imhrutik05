// select 
const msgInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const btn = document.getElementById('btn');
const msgDiv = document.getElementById('output');

async function returnMsg(){
	try {
		let msg = msgInput.value.trim();
		let delay = parseInt(delayInput.value)
		if(msg && delay >= 0){
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