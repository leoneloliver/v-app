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
            const map = document.getElementById("map");
            address.addEventListener("focusout", function (e) {
                hasAddress();
            });
            address.addEventListener("focusin", function (e) {
                if(address.value == ""){
                    address.value = "45 Dunfield Avenue";
                }
                hasAddress();
            });
            const hasAddress = () => {
                if (address.value.length > 5) {
                    displayMap(address.value);
                }else{
                    map.classList.remove('open');
                    map.innerHTML = "";
                }
            }
            const displayMap = (local) => {
                var componentMap = '<iframe width="80%" height="160" src="https://maps.google.com/maps?width=80%&amp;height=160px&amp;hl=en&amp;q='+local+'&amp;ie=UTF8&amp;t=&amp;z=12&amp;&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/create-google-map/">Add map to website</a></iframe>';
                map.innerHTML =  componentMap;
                map.classList.add('open');
            }
        }
     }			
}	
appFunctions.init();
