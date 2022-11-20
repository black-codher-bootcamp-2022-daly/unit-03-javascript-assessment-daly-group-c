import { dates } from "./data.js";

function modalContainer(targetDate) {
  const modalBox = document.querySelector("#modal-container");
  modalBox.innerHTML = `
  <h1 class="modal" id="modal-title"> ${targetDate.title}</h1>  
  <h2 class="modal" id="modal-date"> ${targetDate.date} </h2> 
  <img class="modal" id="modal-image" src="${targetDate.image}"></img>
  <p class="modal" id="modal-full-description"> ${targetDate.fullDescription}</p>
  `;
  const modalCloseButton = document.createElement("button");
  modalBox.appendChild(modalCloseButton);
  modalCloseButton.id = "modal-close-button";
  modalCloseButton.textContent = "Close";


  modalCloseButton.addEventListener("click", function() {
    modalBox.style.display = "none";

    });
}

for (let i = 0; i < dates.length; i++) {
  const timelineItem = document.createElement("div");
  timelineItem.className = "timeline-item";

  const modalButton = document.createElement("button");
  modalButton.className = "timeline-item-more-info";
  modalButton.textContent = "More Info";

  modalButton.addEventListener("click", function(){
    modalContainer(dates[i]);
    modalBox.style.removeProperty('display');  
  });

  timelineItem.innerHTML = `<h2 class="timeline-item-title"> ${dates[i].title}</h2> 
   <span class="timeline-item-date"> ${dates[i].date} </span> 
   <p class="timeline-item-summary"> ${dates[i].summary}</p>`;
  timelineItem.appendChild(modalButton);
  document.querySelector(".timeline").appendChild(timelineItem);
}

const fullModalDescription = dates;

const modalBox = document.createElement("div");
modalBox.setAttribute("id", "modal-container");
document.querySelector(".timeline").appendChild(modalBox);

const verticalLine = document.createElement("div");
verticalLine.className = "vl";
document.body.appendChild(verticalLine);

console.log(fullModalDescription);
