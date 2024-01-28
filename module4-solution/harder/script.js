var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim", "Reza"];

(function () {
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]); // calling byeSpeaker.speak for names starting with 'J'
    } else {
      helloSpeaker.speak(names[i]); // calling helloSpeaker.speak for other names
    }
  }
})();