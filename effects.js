
var i = 0;
const intro = "Hi, i'm Abir";

const typeWriter = () => {
   if (i < intro.length) {
        document.getElementById("greeting").innerHTML += intro.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

