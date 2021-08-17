var Body = {
    setFontColor: function(color){
        document.querySelector('body').style.color = color; 
    },
    setBgColor: function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = {
    setColor: function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i<alist.length){
            alist[i].style.color = color;
            i = i+1;
        }
    }
}

function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setBgColor('black');
        Body.setFontColor('white');
        Links.setColor('powderblue');
        self.value = 'day';
    }
    else{
        Body.setBgColor('white');
        Body.setFontColor('black');
        Links.setColor('blue');
        self.value = 'night';
    }
}