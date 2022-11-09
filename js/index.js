import { dates } from "./data.js";

for (let i = 0; i < dates.length; i++) {
  const timelineItem = document.createElement("div");
  timelineItem.className = "timeline-item";

  timelineItem.innerHTML = `<h2 class="timeline-item-title"> ${dates[i].title}</h2>  <span class="timeline-item-date"> ${dates[i].date} </span> <p class="timeline-item-summary"> ${dates[i].summary}</p>`;

  document.querySelector(".timeline").appendChild(timelineItem);
}
 