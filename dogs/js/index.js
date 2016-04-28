
var index = document.createElement('a');
var hello = document.createElement('h1');

hello.textContent = 'Woof!'

index.href = '/';
index.textContent = 'Back to index';

document.body.appendChild(hello);
document.body.appendChild(index);
