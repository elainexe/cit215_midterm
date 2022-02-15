const games = [
    {
        img:"https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        price:"$19.99",
        name:"God of War",
        description:"Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform:"playstation"
    },
    {
        img:"https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        price:"$14.99",
        name:"Killer Instinct",
        description:"Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform:"xbox"
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        price:"$49.99",
        name:"Donkey Kong Country: Tropical Freeze",
        description:"A giant gorilla and possibly apes quest to unfeeze their island form a bunch of icey animals and collect lots of bananas.",
        platform:"switch"
    }
];

function product(name,price,image,description,platform){
    let that=this;
    this.name=name;
    this.price=price;
    this.image=image;
    this.description=description;
    this.platform=platform;

    this.ele=document.createElement("div");
    this.ele.className="product "+this.platform;

    this.ele.addEventListener("click",function(){
        popUp.style.display="flex";
        popUp.innerHTML="";
        let popUpProduct=JSON.parse(JSON.stringify(that));
        popUpProduct.eleImg=document.createElement("img");
        popUpProduct.eleImg.src=popUpProduct.image;
        popUpProduct.eleText=document.createElement("div");
        popUpProduct.eleText.innerHTML="<h2>"+popUpProduct.name+"</h2><br /><h3>"+popUpProduct.price+"</h3><br /><h4>"+popUpProduct.description+"</h4><br /><h4 style='color:"+popUpProduct.color+"'>"+popUpProduct.platform+"</h4>";
        popUpProduct.eleText.style.textAlign="center";
        popUp.appendChild(popUpProduct.eleImg);
        popUp.appendChild(popUpProduct.eleText);
    });

    this.elePlat=document.createElement("img");
    switch(this.platform){
        case "playstation":
            this.elePlat.src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png";
            this.color="blue";
            break;
        case "xbox":
            this.elePlat.src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-Xbox_logo_%282019%29.svg.png";
            this.color="green";
            break;
        case "switch":
            this.elePlat.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1024px-Nintendo_Switch_Logo.svg.png";
            this.color="red";
            break;
        default:
            this.elePlat.src="";
    }
    this.elePlat.className="plat";
    if(this.elePlat.src!==""){
        this.ele.appendChild(this.elePlat);
    }

    this.eleImg=document.createElement("img");
    this.eleImg.src=this.image;
    this.eleImg.className="prdImg";
    this.ele.appendChild(this.eleImg);

    this.eleText=document.createElement("h2");
    this.eleText.innerHTML=this.price;
    this.ele.appendChild(this.eleText);

    document.body.appendChild(this.ele);
}

let productObjects=[];
for(let i=0;i<games.length;i++){
    productObjects[i]=new product(games[i].name,games[i].price,games[i].img,games[i].description,games[i].platform);
}

let popUp=document.createElement("div");
popUp.className="popUp";
popUp.style.display="none";
popUp.addEventListener("click",function(){
    popUp.style.display="none";
});
document.body.appendChild(popUp);
