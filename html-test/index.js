// index.js  
// 2011-06-30 (mca)

var pg = null;
window.onload = function() {
    pg = thisPage();
    pg.init();
};

var thisPage = function() {
    var g = {};
    g.greeting = "this is a test";
    
    function init() {
        var elm;
        
        elm = document.getElementById('h1');
        if(elm) {
            elm.innerHTML = g.greeting;
        }
        elm = document.getElementById('p1');
        if(elm) {
            elm.innerHTML = g.greeting;
        }
        
        alert(g.greeting);
    }
    
    var that = {};
    that.init = init;
    return that;
};