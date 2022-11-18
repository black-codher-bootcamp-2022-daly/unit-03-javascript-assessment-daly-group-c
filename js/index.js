import { dates } from "./data.js";

function modalContainer(targetDate) {
  const modalBox = document.querySelector("#modal-container");
  modalBox.innerHTML = `
  <h1 id="modal-title"> ${targetDate.title}</h1>  
  <h2 id="modal-date"> ${targetDate.date} </h2> 
  <img id="modal-image"> ${targetDate.image}</img>
  <p id="modal-full-description"> ${targetDate.fullDescription}</p>
  <button id="modal-close-button"></button>
  `;
}
console.log(typeof modalContainer);
for (let i = 0; i < dates.length; i++) {
  const timelineItem = document.createElement("div");
  const modalButton = document.createElement("button");
  modalButton.className = "timeline-item-more-info";
  modalButton.textContent = "More Info";
  modalButton.onclick = () => modalContainer(dates[i]);
  timelineItem.className = "timeline-item";

  timelineItem.innerHTML = `<h2 class="timeline-item-title"> ${dates[i].title}</h2> 
   <span class="timeline-item-date"> ${dates[i].date} </span> 
   <p class="timeline-item-summary"> ${dates[i].summary}</p>`;
  timelineItem.appendChild(modalButton);
  document.querySelector(".timeline").appendChild(timelineItem);
}

// function ourButton () {
//   const modalButton = document.createElement("button");
//   modalButton.className = "timeline-item-more-info";
//   modalButton.textContent = "More Info";

//   function openModal () {
//   const modalDiv = document.createElement("div");
//   modalDiv.className = "modal-container";
//   modalDiv.innerHTML = `<span id ="modal-date"> ${dates[i].date}`
//   }

//   ourButton.onclick = () => openModal(modalDiv);
//   document.querySelector(".timeline").appendChild(ourButton);
// }

const fullModalDescription = dates;

//dates.map((fullModalDescription, dates) => {
// const modalBox = document.createElement("div");
// const buttonOpen = document.createElement("button")
// const ourDate = document.createElement("span");
// const ourTitle = document.createElement("h2");
// const ourImage = document.createElement("img");
// const ourDescription = document.createElement("p");
// const buttonClose = document.createElement("span");

// modalBox.setAttribute("id", "modal-container");
// buttonOpen.setAttribute("id", "timeline-item-more-info")
// ourDate.setAttribute("id","modal-date");
// ourTitle.setAttribute("id", "modal-title");
// ourDate.setAttribute("id", "modal-image");
// ourDescription.setAttribute("id", "modal-full-description");
// buttonClose.setAttribute("id", "modal-close-button");

const modalBox = document.createElement("div");
modalBox.setAttribute("id", "modal-container");
document.querySelector(".timeline").appendChild(modalBox);

//buttonOpen.onclick

//})

console.log(fullModalDescription);
