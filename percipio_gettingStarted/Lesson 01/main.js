var app = new Vue({
  el: "#the_food_app",
  data: {
    title: 'The food app',
    subtitle: 'This app is about food',
    foods: [
      {name: 'Apple', description: 'Reeed', src:"./images/apple.jpg"},
      {name: 'Banana', description: 'Yeeellow', src: "./images/banana.jpg"},
      {name: 'Eggs', description: 'Just crack them', src: "./images/eggs.jpg"}
    ]
  }
});