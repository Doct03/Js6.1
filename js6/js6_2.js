
let vacation = {
  
    turkey: {
      price: 2800,
      img: "turkey.jpg",
      description:
        "Турция – государство на юго-востоке Европы и юго-западе Азии, культура которого сочетает древнегреческие, персидские, римские, византийские и османские традиции."
    },
    egypt: {
      price: 2000,
      img: "egipet.jpg",
      description:
        "Египет – страна в Северо-Восточной Африке и на Ближнем Востоке. О ее богатой истории, насчитывающей более пяти тысяч лет, напоминают археологические памятники в плодородной долине реки Нил, среди которых пирамиды Гизы, Большой сфинкс, а также Карнакский храм"
    },
    spain: {
      price: 4500,
      img: "spain.jpg",
      description:
        "Испания – европейская страна, расположенная на Пиренейском полуострове. Территория Испании разделена на 17 автономных регионов. В столице страны, Мадриде, находятся Королевский дворец и музей Прадо, где хранятся произведения европейских мастеров."
    },
    france: {
      price: 3500,
      img: "france.jpg",
      description:
        "Франция – это страна в Западной Европе, на территории которой находятся средневековые города, альпийские деревни и пляжи Средиземного моря."
    },
    somali: {
      price: 10,
      img: "somali.jpg",
      description:
        "Республика Сомали́ — восточноафриканское государство. В результате гражданской войны и деятельности сепаратистов Сомали на долгое время фактически прекратило своё существование и распалось на множество частей."
    }
  };
  document.write("<div class='container'>");
  for (key in vacation){
      document.write(
    "<div class='card' style='width: 18rem'><img src='Images_LR6/"+vacation[key].img+
    "'class='card-img-top' alt='...'><div class='card-body'><p class='card-text'>Цена тура"+
    vacation[key].price+
    " грн . за 1 день </p> <p>" +
    vacation[key].description+"</p></div> </div>"
    );
    
  
  }
  document.write("</div>");

  let country=prompt("Куда летите?Можем предложить следуйщие варианты: turkey,egypt,spain,france,somali");
  let people=+prompt("Сколько человек летит?");
  let days =+prompt("На сколько дней хотите полететь?");
function calc(people,days,country){
  var result =people*days*vacation[country].price;
  return result;
};
document.write(calc(people,days,country));