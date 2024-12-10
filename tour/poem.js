var i = 0;
var text = "You do not have to be good. / You do not have to walk on your knees / for a hundred miles through the desert repenting. / You only have to let the soft animal of your body/love what it loves./Tell me about despair, yours, and I will tell you mine./Meanwhile the world goes on./Meanwhile the sun and the clear pebbles of the rain/ are moving across the landscapes, /  over the prairies and the deep trees, /  the mountains and the rivers. /  Meanwhile the wild geese, high in the clean blue air, /  are heading home again. /  Whoever you are, no matter how lonely, /  the world offers itself to your imagination, /  calls to you like the wild geese, harsh and exciting - /  over and over announcing your place / in the family of things.///We all really like this poem, so it's on the wall. Our friend Anthony made a really screenprint of an otter with an excerpt of the poem, that's also on the wall.";
var speed = 100;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("poem").innerHTML += text.charAt(i) == '/' ? '<br>' : text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("cursor").innerText = ""
  }
}

typeWriter()