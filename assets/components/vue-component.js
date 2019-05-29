Vue.component('v-select', VueSelect.VueSelect,{
	props: {
		placeholder: {
			type: String,
			default: ""
		},
	}
})
Vue.component('my-input',{
  template: "#my-input",
  props: {
    label: {
      type: String,
      default: ""
    }
  }
});
new Vue({
  el: '#app',
  data: {
    optYear: ['1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990'],
		optMonth: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEZ'],
		optDay: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17']
  }
})
