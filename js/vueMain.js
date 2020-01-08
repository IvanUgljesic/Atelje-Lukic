//slider
var v1=new Vue({
  el:"#app1", 
  data: function(){
  return{
    sliderRow: 3,
    sliderRowImgs: 7,
    opisiSlika :{
      1 : "Pejzaž, akril na dasci, 40x60",
      2 : "Patrijarh Pavle, akril na dasci, 30x40",
      3 : "Bogorodica, akril na dasci, 30x40",
      4 : "Akvarel, ,20x30",
      5 : "Sveti Nikola sa žitijem, jajčana tempera na dasci, 40x60",
      6 : "Sveti georgije, akril na dasci, 50x60",
      7 : "Mlekarica, tempera na platnu, 70x90",
      8 : "Mrtva priroda, akril na dasci, 40x60",
      9 : "Kralj Aleksandar, akril na dasci, 26x36",
      10 : "Breze, akril na dasci, 15x25",
      11 : "Isus, ulje na platnu, 50x70",
      12 : "Plač Jeremijin, kombinovana tehnika, 50x70",
      13 : "Salvator mundi, ulje na platnu, 50x70",
      14 : "Igra, akril na platnu, 60x70",
      15 : "Apstrakcija 1, akril na platnu, 30x40",
      16 : "Isus, akril na lipi, 30x40",
      17 : "Sveti Nikola, akril na dasci, 50x60",
      18 : "Sveti Jovan Krstitelj, akril na dasci, 50x60",
      19 : "Apstraktni pejzaž, akril na platnu, 30x40",
      20 : "Apstrakcija 2, akril na platnu, 30x40",
      21 : "Portret, akril na dasci, 20x30"
    },
    dir :{
      1 : "galerija/pejzazi/1.jpg",
      2 : "slider/2.jpg",
      3 : "galerija/ikone/4.jpg",
      4 : "galerija/akvareli/1.jpg",
      5 : "galerija/ikone/10.jpg",
      6 : "galerija/ikone/11.jpg",
      7 : "slider/7.jpg",
      8 : "galerija/mrtvaPriroda/2.jpg",
      9 : "galerija/portretiVelikana/2.jpg",
      10 : "galerija/pejzazi/6.jpg",
      11 : "galerija/ikone/17.jpg",
      12 : "slider/12.jpg",
      13 : "galerija/ikone/20.jpg",
      14 : "galerija/apstrakcija/1.jpg",
      15 : "galerija/apstrakcija/2.jpg",
      16 : "galerija/ikone/21.jpg",
      17 : "galerija/ikone/26.jpg",
      18 : "galerija/ikone/27.jpg",
      19 : "galerija/pejzazi/7.jpg",
      20 : "galerija/apstrakcija/3.jpg",
      21 : "slider/21.jpg"
    }
    };
  },
  methods:{
    
  },
  filters:{
    nazivSlike:function(value){
      var parts = value.split(',');
      return parts[0];
    },
    opis:function(value){
      var parts = value.split(',');
      return parts[1];
    },
    dimenzije:function(value){
      var parts = value.split(',');
      return parts[2];
    }
  },
  computed:{
  },
  beforeDestroy () {
  },
  mounted(){

  }
});

// galerija
var v2=new Vue({
  el:"#galerija", 
  data: function(){
  return{
    kategorije : {// naziv : br slika
      portretiVelikana : 6,
      freske : 8,
      akvareli : 4,
      apstrakcija : 6,
      mrtvaPriroda : 5,
      pejzazi : 7,
      ikone : 30    
    }
    };
  },
  methods:{ 
  },
  computed:{
  },
  beforeDestroy () {
  },
  mounted(){
  }
});

//contact form
var v2=new Vue({
  el:"#contactForm", 
  data: function(){
  return{ 
    name: null,
    email: null,
    message: null,
    sum: null 
    };
  },
  methods:{ 
    removeBorder: function(e){
      console.log(e.target);
      $(e.target).removeClass('is-invalid');
    },
    sendMail: function(e){
      //feedback
    var  send	= true;
		this.name = $('input[name=name]').val();
		if(this.name ==  '' || this.name == null){
			$('input[name=name]').addClass('is-invalid');
      send	= false;
		}
		this.email = $('input[name=email]').val();
		if(this.email ==  ' ' || this.email == null || !this.email.includes('@') || !this.email.includes('.')){
			$('input[name=email]').addClass('is-invalid');
      send	= false;
		}
		this.message = $('textarea[name=message]').val();
		if(this.message ==  '' || this.message == null){
			$('textarea[name=message]').addClass('is-invalid');
      send	= false;
		}
		this.sum =  $('input[name=sum]').val();
		if(this.sum == '' || this.sum == null || this.sum != total){			
			$('input[name=sum]').addClass('is-invalid');
      send	= false;
		}
    console.log(this.name + this.email+ this.message);
    if(send){
      axios.post('https://slikarskiateljeuroslukic.rs/js/contact', {
      name:this.name,
      email:this.email,
      message:this.message}).then(() => {        
        location = location;
      });      
      alert('Vaš e-mejl je uspešno poslat!');
    }    
    }
  },
  computed:{
  },
  beforeDestroy () {
  },
  mounted(){
  }
});