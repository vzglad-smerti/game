(function(_){var m = _.modules.name("test");if(m){
        
        m.alert = function(){
                alert("test");
        }

        m.init = function(location, data){
                console.log(location + "=====" + data);
        }

}})(_);