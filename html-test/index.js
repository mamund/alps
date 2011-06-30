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
        shift();
    }
    
    function shift() {
        var t, elm;
        t = 14;
        elm = document.getElementById('p1');
        if(elm) {
            elm.innerHTML = t;
            t = 14 << 2; 
            elm.innerHTML = elm.innerHTML+ ', '+t;
        }
    }
    
    var that = {};
    that.init = init;
    return that;
};