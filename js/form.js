const form = document.getElementById("habitForm");

const createP = ( text ) => {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = form.name.value;

  const messageDiv = document.createElement("div");
  messageDiv.id = "messageDiv";

  let welcome = createP("Kedves " + user + "!");;
  let message = createP("Köszönjük, hogy kitöltötted a kérdőívünket! :)");

  messageDiv.appendChild(welcome);
  messageDiv.appendChild(message);

  const messageBox = document.getElementById("messageBox");
  if( messageBox.childNodes.length != 0 ){
    messageBox.removeChild( messageBox.firstChild );
  }

  messageBox.appendChild(messageDiv);

  form.reset();
})