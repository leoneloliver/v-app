var appFunctions = {
    init: function () {
        this.Basic.init();
    },
    Basic: {
        init: function () {
            this.getMaps();
        },
        getMaps: function(){
            const address = document.getElementsByTagName("input")[0];
            address.addEventListener("focusout", function (e) {
                if (address.value.length > 0) {
                        displayMap(address.value);
                }
            });
            const displayMap = (local) => {
                var componentMap = '<iframe width="90%" height="200" src="https://maps.google.com/maps?width=90%&amp;height=200px&amp;hl=en&amp;q='+local+'&amp;ie=UTF8&amp;t=&amp;z=12&amp;&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/create-google-map/">Add map to website</a></iframe>';
                var map = document.getElementById("map");
                map.innerHTML =  componentMap;
            }
        }
	}			
}	
appFunctions.init();