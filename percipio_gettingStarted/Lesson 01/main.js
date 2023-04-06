var app = new Vue({
  el: "#the_food_app",
  data: {
    title: 'The food app',
    subtitle: 'This app is about food',
    favorites: 0,
    foods: [
      {name: 'Apple', description: 'Reeed', src:"./images/apple.jpg", perc_carbs: "93", is_fav: true},
      {name: 'Banana', description: 'Yeeellow', src: "./images/banana.jpg", perc_carbs: "80", is_fav: false},
      {name: 'Eggs', description: 'Just crack them', src: "./images/eggs.jpg", perc_carbs: "5",is_fav: true},
      {name: 'Potatoes', description: 'Better fried', src: "./images/potatoes.jpg", perc_carbs: "75", is_fav: false}
    ],
  },

  methods: {
    updateFavorites: function(name, value) {

      let f  = _.find(this.foods, function(f){return f.name === name})
      
      if(f){
        f.is_fav = value;

        let fav = 0;
        this.foods.forEach(f => {
          if (f.is_fav){
            fav++;
          }
        })

        this.favorites = fav;
      }
    }
  }
});