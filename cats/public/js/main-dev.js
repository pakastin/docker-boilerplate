(function () {
	'use strict';

	var hello = document.createElement('h1');
	var index = document.createElement('a');

	hello.textContent = 'Meow!'

	index.href = '/';
	index.textContent = 'Back to index';

	document.body.appendChild(hello);
	document.body.appendChild(index);

}());