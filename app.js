// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// const newreviews = reviews.map(function(v){
//   return` <article class="review">
//   <div class="img-container">
//     <img src="${v.img}" id="person-img" alt="" />
//   </div>
//   <h4 id="author">${v.name}</h4>
//   <p id="job">${v.job}</p>
//   <p id="info">
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
//     asperiores debitis incidunt, eius earum ipsam cupiditate libero?
//     Iste, doloremque nihil?
//   </p>
//   <div class="button-container">
//     <button class="prev-btn">
//       <i class="fas fa-chevron-left" onclick="prive()"></i>
//     </button>
//     <button class="next-btn" onclick="next();">
//       <i class="fas fa-chevron-right"></i>
//     </button>
//   </div>
//   <button class="random-btn">surprise me</button>
// </article>`})

let index=0;

function display(){
  document.getElementById("person-img").src = `${reviews[index].img}`
  document.getElementById("author").innerHTML = `${reviews[index].name}`
  document.getElementById("job").innerHTML = `${reviews[index].job}`
  document.getElementById("info").innerHTML = `${reviews[index].text}`
}
display()
function next(){
  index = index+1;
  if(index > reviews.length-1){
    index = 0;
  }
  display();
}

function prive(){

  index = index-1 ;
  if(index < 0){
    index = reviews.length-1;
  }
 
  display();
}

function clea(){
  index = 0;
  display();
}

