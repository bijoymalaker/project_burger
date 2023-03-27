let burgerlist =document.querySelector('.burgers');
let orders=document.querySelector('.orederdBurgers');
let total=document.getElementById('total');
let subtotal=document.getElementById('subtotal');
let taxtotal=document.getElementById('tax');
let itemnumber=document.getElementById('itemnumber');
let burgers = [{
    name: 'Chilli Burger',
    image:'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/2022-05/burger.jpg',
    price:55
},
{
    name: 'Kubie Burger',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZn7AxOzw2VW369-2T7XLPpvMYkLvWTt6W3b9qGfAb1w&s',
    price:68
},
{
    name: 'Fluff Burger',
    image:'https://cdn.tasteatlas.com//images/dishes/1b0571757ebb4e0ebed71fa66d74f9c4.jpg?w=905&h=510',
    price:77
},
{
    name: 'Steamed burger',
    image:'https://cdn.tasteatlas.com//images/dishes/d69065cdf6f348b6a3c40466f8182ea7.jpg?w=905&h=510',
    price:90
},
{
    name: 'Slaw Burger',
    image:'https://cdn.tasteatlas.com//images/dishes/5719938996334b529d3efc4abe36b4ec.jpg?w=905&h=510',
    price: 85

},
{
    name: 'Chimi Burger',
    image:'https://cdn.tasteatlas.com//images/dishes/3a5c4644db8a408aa56d65d66bb5ea8d.jpg?w=905&h=510',
    price:65

},
{
    name: 'Chinese burger',
    image:'https://cdn.tasteatlas.com//images/dishes/6bc0cd0130354b20b3e2f583f9dec184.jpg?w=905&h=510',
    price:84

},
]
burgers.forEach((element,index)=>{
    let newelement = ``;
    newelement = `
    <div class="burger">
             <div class="image"><img src="${element.image}" alt="Elk burger">
                    </div>
                    <div class="title">${element.name}</div>
                    <div class="bottom">
                        <div class="price">$${element.price}</div>
                        <div class="cart"><i class="fa-solid fa-cart-plus" id="${index}" onclick="ordernow(this.id)"></i></div>
                    </div>
                </div>`
    burgerlist.innerHTML+=newelement;            
})
let orderedburger=[];
function ordernow(index) {
    orderedburger.push(burgers[index]);
    orders.innerHTML="";
    orderedburger.forEach((element,index)=>{
        let neworder=``;
        neworder = `
        <div class="burger">
            <div class="icon"><img src="${orderedburger[index].image}" alt="Elk burger"></div>
            <div class="title"><h1>${orderedburger[index].name}</h1> <p>$${orderedburger[index].price}</p></div>
            <div class="delete"><i class="fa-regular fa-circle-xmark" id="${index}" onclick="removeitem(this.id)"></i></div>
        </div>`
        orders.innerHTML+=neworder;
    })
    cashcalc();
}
function removeitem(index) {
    orderedburger.splice(index,1);
    orders.innerHTML="";
    orderedburger.forEach((element,index)=>{
        let neworder=``;
        neworder = `
        <div class="burger">
            <div class="icon"><img src="${orderedburger[index].image}" alt="Elk burger"></div>
            <div class="title"><h1>${orderedburger[index].name}</h1> <p>$${orderedburger[index].price}</p></div>
            <div class="delete"><i class="fa-regular fa-circle-xmark" id="${index}" onclick="removeitem(this.id)"></i></div>
        </div>`
        orders.innerHTML+=neworder;
    })
    cashcalc();
}
function cashcalc() {
    let totalcash =0;
    orderedburger.forEach(element=>{
        totalcash = totalcash + element.price;
    });
    subtotal.innerHTML= `$`+ totalcash;
    taxtotal.innerHTML = `$`+(totalcash*10/100);
    total.innerHTML =`$` + (totalcash+(totalcash*10/100));
    itemnumber.innerHTML = orderedburger.length;
}
