function adicionaItem(event) {
    event.preventDefault();

    const elementoPai = document.getElementById("container");

    const novoElemento = document.createElement('article');
    const novoItem = document.createTextNode('');
    novoElemento.appendChild(novoItem);

    elementoPai.insertAdjacentElement('beforeend', novoElemento);
    novoElemento.setAttribute('class', 'item');
    novoElemento.setAttribute('onclick','removeItem(event)');

}


function removeItem(event) {
    event.target.remove();
}