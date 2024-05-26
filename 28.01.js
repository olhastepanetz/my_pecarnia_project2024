let catalog = [
    {
        im:"photo_5357470994928884356_y.jpg",
        name:"Круассаны",
        article:"123456",
        const:3.50,
        opis:"Калорийность - 266 ккал, Белки - 8.9 г, Жиры - 3.3 г,Углеводы - 46.7 г"
    },
    {
        im:"photo_5357470994928884358_y.jpg",
        name:"Хлеб",
        article:"9846876",
        const:2.30,
        opis:"Калорийность - 424 ккал ,Белки - 5.8 , гЖиры - 24.4 г , Углеводы - 44.4 г"
    },
    {
        im:"photo_5357470994928884359_y.jpg",
        name:"Хлеб ржаной",
        article:"654678465",
        const:2.50,
        opis:"Калорийность - 424 ккал ,Белки - 5.8 г , Жиры - 24.4 г , Углеводы - 44.4 г"
    },
    {
        im:"photo_5357470994928884365_y.jpg",
        name:"Хлеб на твороге",
        article:"65846494",
        const:3.50,
        opis:"Калорийность - 424 ккал ,Белки - 5.8 , гЖиры - 24.4 г , Углеводы - 44.4 г"
    },
    {
        im:"photo_5357470994928884366_y.jpg",
        name:"К чаю от 4 рублей  ",
        article:"16165164",
        const: 4.00,
        opis:"Калорийность - 266 ккал, Белки - 8.9 г, Жиры - 3.3 г,Углеводы - 46.7 г "
        
    },
    {
        im:"photo_5357470994928884361_y.jpg",
        name:"Мафины  ",
        article:"16161312",
        const: 2.50,
        opis:"Калорийность - 424 ккал ,Белки - 5.8 , гЖиры - 24.4 г , Углеводы - 44.4 г"
        
    },
    {
        im:"photo_5357470994928884367_y.jpg",
        name:"Сладости от 2.50 ",
        article:"20081312",
        const: 2.50,
        opis:"Калорийность - 424 ккал ,Белки - 5.8 , гЖиры - 24.4 г , Углеводы - 44.4 г"
        
    },
    {
        im:"photo_5357470994928884697_y.jpg",
        name:"хлеб диетический  ",
        article:"86061312",
        const: 2.50,
        opis:"Калорийность - 424 ккал ,Белки - 5.8 , гЖиры - 24.4 г , Углеводы - 44.4 г"
        
    },
    {
        im:"photo_5357470994928884699_y.jpg",
        name:"Пирожные ",
        article:"09871312",
        const: 3.80,
        opis:"Калорийность - 424 ккал ,Белки - 5.8 , гЖиры - 24.4 г , Углеводы - 44.4 г"
        
    },
   
]
let cartName = document.getElementsByClassName("name");
let cartArticle = document.getElementsByClassName("opis");
let cartCost = document.getElementsByClassName("cost");
let cartButton = document.getElementsByClassName("buttonAddBasket");
let image = document.getElementsByClassName("image");


for(let i = 0; i< catalog.length; i++){
    cartName[i].innerHTML = catalog[i].name;
    cartArticle[i].innerHTML = cartArticle[i].innerHTML + catalog[i].opis;
    cartCost[i].innerHTML = cartCost[i].innerHTML + catalog[i].const;
    cartButton[i].setAttribute("onclick","addBasket("+catalog[i].article+")");
    image[i].src = catalog[i].im;
}
let searchField = document.getElementById("searchField");
let resultField = document.getElementById("textResultSearch");
function search(){
    if(searchField.value)
    searchField.placeholder = "Введите данные"
else{
    let result =[]; 
    document.getElementById("catalog").style.display = "none;"
    for(let i = 0; i< catalog.length; i++){
    if(searchField.value == catalog[i].name || searchField.value == catalog[i].article){
        resultField.innerHTML = catalog[i].name +"Артикул:" + catalog[i]. article;
      result.push(catalog[i]);
  } 
 }
 if(result.length==0){
    document.getElementById("textResultSearch").innerHTML = "Товары не найдены ";
 }
 else{
    for (let i=0; i<result.length;i++){
        let newDiv = document.createElement("div");
        newDiv.className = "cardTovar";
        document.getElementById("resultSearch").appendChild(newDiv);
        let newH2 = documentcument.createElement("h2");
        newH2.className="name";
        newH2.innerHTML=result[i].name;
        newDiv.appendChild(newH2);
    }
 }
}
}
let basketTovar = [];
let summaCheck =0
function addBasket(article){
     for(let i=0; i<catalog.length; i++){
        if(catalog[i].article == article){
            basketTovar.push(catalog[i].name+"  "+catalog[i].article+"  "+catalog[i].const);
            summaCheck =summaCheck+catalog[i].const;
            document.getElementById("basketSumma").innerHTML =summaCheck+"p";
        }
     }
}
function openBasket(){
    document.getElementById("spisokTovarov").innerHTML="";
    for(let i=0; i<basketTovar.length;i++){
        document.getElementById("spisokTovarov").innerHTML=document.getElementById("spisokTovarov").innerHTML+"<br>"+ basketTovar[i];
    }
    document.getElementById("dialogBasket").showModal();
    document.getElementById("summaTovarov").innerHTML="<hr>"+"<br>|"+ summaCheck +" p"
}