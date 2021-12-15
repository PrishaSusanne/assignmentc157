AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "spiderman",
        title: "Spiderman",
        url: "./assets/thumbnails/spiderman.jpg",
      },
      {
        id: "star-wars",
        title: "Star Wars",
        url: "./assets/thumbnails/star_wars.jpg",
      },

      {
        id: "dr_strange",
        title: "Dr Strange",
        url: "./assets/thumbnails/dr_strange.jpg",
      },
      {
        id: "captain_america",
        title: "Captain America",
        url: "./assets/thumbnails/captain_america.jpg",
      },
    ];
    let previousXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item.id);
      // Thumbnail Element
      const thumbnail = this.createThumbNail(item);
      borderEl.appendChild(thumbnail);
      // Title Text Element
      const titleEl = this.createTitleEl(position,item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },
  
  createThumbNail: function(item){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("geometry",{
      primitive: "box",height: 30,width: 15
    });
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("material",{src: item.url})
    return entityEl;
  },
  createBorder: function(position,id){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id",id);
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("position",position);
    entityEl.setAttribute("material",{color:"#0077CC",opacity: 1});
    return entityEl;
  },
  createTitleEl: function(position,item){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text",{
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#E65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("position",elPosition)
    return entityEl;
  },
});
