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
        alert(g.greeting);
    }
    
    var that = {};
    that.init = init;
    return that;
};