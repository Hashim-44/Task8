function randomQute() {
    var qutes = 
        [
           "You Don't Get To Live A Bad Life And Have Good Things Happen To You.",
           "We Can’t Change What's Done, We Can Only Move On.",
           "Just Do One Thing Or The Other, Don’t Try To Be Two People At Once.",
           "Everything is permitted, Nothing is true.",
           "Our Creed does not command us to be free. It commands us to be wise.",
           "We are what we choose to be.",
           "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
           "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        ]
    
        var num = Math.floor(  Math.random() * qutes.length);
        document.getElementById("random-Qute").innerHTML = qutes[num];
    
}
