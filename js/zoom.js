const html = document.getElementsByTagName("html")[0];
const zoom = document.getElementById("zoom");
const myUniqueCookie = "oienfuoecomwq";

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let username = getCookie(myUniqueCookie);
  if (username != "") {
    let value = getCookie(myUniqueCookie);
    if (value == "normal") {
      zoom.textContent = "zoom_in";
    } else /* value == zoom*/ {
      html.classList.add("zoom");
      zoom.textContent = "zoom_out";
    }
  } else {
    setCookie(myUniqueCookie, "normal", 7);
  }
}
window.onload = () => {
  checkCookie();
}

zoom.addEventListener("click", (e) => {
  let value = getCookie(myUniqueCookie);
  if (value == "normal") {
    setCookie(myUniqueCookie, "bigger", 7);
    html.classList.add("zoom");
    zoom.textContent = "zoom_out";
  } else {
    setCookie(myUniqueCookie, "normal", 7);
    html.classList.remove("zoom");
    zoom.textContent = "zoom_in";
  }
})