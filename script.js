var nummer = 0;

function getInputValue() {
    alert(nummer)
    for (let i = 0; i < nummer; i++) {
        var lengte = document.getElementById("lengte" + i+1).value;
        var breedte = document.getElementById("breedte" + i+1).value;
        var naam = document.getElementById("naam" + i+1).value;
        var antwoord = ((lengte-70)/10) * 4 + ((breedte-90)/10)*4 + 125;
        document.getElementById('output' + i+1).textContent = antwoord + ' ' + naam;
        alert(i);
    }
}
function addInputBox() {
    var inputContainer = document.getElementById('inputContainer');
    nummer += 1;
    
    // Create a new input element
    var newInput = document.createElement('input');
    var newInput1 = document.createElement('input');
    var newInput2 = document.createElement('input');
    var output = document.createElement('p');
    newInput.type = 'text';
    newInput1.type = 'text';
    newInput2.type = 'text';
    newInput.name = 'lengte';
    newInput1.name = 'breedte';
    newInput2.name = 'naam';
    newInput.placeholder = 'lengte';
    newInput1.placeholder = 'breedte';
    newInput2.placeholder = 'naam';
    newInput.id = 'lengte' + nummer;
    newInput1.id = 'breedte' + nummer;
    newInput2.id = 'naam' + nummer;
    output.id = 'output' + nummer;


    // Append the new input element to the container
    inputContainer.appendChild(newInput);
    inputContainer.appendChild(newInput1);
    inputContainer.appendChild(newInput2);
    inputContainer.appendChild(document.createElement('br'));
    inputContainer.appendChild(output);
}
addInputBox();