var app = new Vue({
  el: "#the_food_app",
  data: {
    title: 'The food app',
    subtitle: 'This app is about food',
    foods: [
      {name: 'Apple', description: 'Reeed', src:"./images/apple.jpg", perc_carbs: "93", is_fav: true},
      {name: 'Banana', description: 'Yeeellow', src: "./images/banana.jpg", perc_carbs: "80", is_fav: false},
      {name: 'Eggs', description: 'Just crack them', src: "./images/eggs.jpg", perc_carbs: "5",is_fav: true},
      {name: 'Potatoes', description: 'Better fried', src: "./images/potatoes.jpg", perc_carbs: "75", is_fav: false}
    ],
  }
});