const topicsContainer = document.getElementById("topics");
const searchBox = document.getElementById("searchBox");
const noResult = document.getElementById("noResult");

let topics = [];

fetch("topics.json")
.then(response => response.json())
.then(data => {

topics = data;

displayTopics(topics);

});

function displayTopics(list){

topicsContainer.innerHTML = "";

if(list.length === 0){

noResult.style.display = "block";

return;

}

noResult.style.display = "none";

list.forEach(topic=>{

const card = document.createElement("div");

card.className = "note";

card.innerHTML = `

<a href="${topic.url}">
${topic.title}
</a>

<p>${topic.description}</p>

`;

topicsContainer.appendChild(card);

});

}

searchBox.addEventListener("keyup",function(){

const keyword = this.value.toLowerCase();

const filtered = topics.filter(topic =>

topic.title.toLowerCase().includes(keyword) ||

topic.description.toLowerCase().includes(keyword)

);

displayTopics(filtered);

});
