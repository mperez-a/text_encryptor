const message = document.querySelector('.text-area');
const messageShowed = document.querySelector('.message');

function btnEncrypt() {
	const encriptedText = encrypt(message.value);
	messageShowed.value = encriptedText;

	if (messageShowed.value !== '') {
		document.querySelector('.message').style.backgroundImage = "none";
		let btnCopy = document.createElement('button');
		btnCopy.innerHTML = 'Copiar';
		btnCopy.className = 'btn-copy';
		document.querySelector('.copy').appendChild(btnCopy);
		btnCopy.addEventListener('click', copy);
	} else {
		document.querySelector('.message').style.backgroundImage = "url('/img/doll.png')";
		document.querySelector('.btn-copy').remove();
	}
}

function btnDecrypt() {
	const decriptedText = decrypt(message.value);
	messageShowed.value = decriptedText;

	if (messageShowed.value !== '') {
		document.querySelector('.message').style.backgroundImage = "none";
		let btnCopy = document.createElement('button');
		btnCopy.innerHTML = 'Copiar';
		btnCopy.className = 'btn-copy';
		document.querySelector('.copy').appendChild(btnCopy);
		btnCopy.addEventListener('click', copy);
	} else {
		document.querySelector('.message').style.backgroundImage = "url('/img/doll.png')";
		document.querySelector('.btn-copy').remove();
	}
}

function encrypt(encriptedMessage) {
	let keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	encriptedMessage = encriptedMessage.toLowerCase();
	for (let i = 0; i < keys.length; i++) {
		if (encriptedMessage.includes(keys[i][0])) {
			encriptedMessage = encriptedMessage.replaceAll(keys[i][0], keys[i][1]);
		}
	}
	return encriptedMessage;
}

function decrypt(encriptedMessage) {
	let keys = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
	encriptedMessage = encriptedMessage.toLowerCase();
	for (let i = 0; i < keys.length; i++) {
		if (encriptedMessage.includes(keys[i][0])) {
			encriptedMessage = encriptedMessage.replaceAll(keys[i][0], keys[i][1]);
		}
	}
	return encriptedMessage;
}

function copy() {
	navigator.clipboard.writeText(messageShowed.value)
	.then(() => {
		alert('Texto copiado');
	})
	.catch(err => {
		alert('Error al copiar el texto');
	});
}