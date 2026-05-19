const READINGS = [
{
id:1,
unit:1,
title:"Should I Study Abroad?",
paragraphs:[
"Mariana is a seventeen-year-old student from Limón.",
"She has been offered a scholarship to study in Canada.",
"She is excited but worried.",
"Her parents support her decision."
],
vocab:[
["scholarship","beca"],
["regret","arrepentirse"]
],
question:"What is the text mainly about?",
options:[
"A girl leaving school",
"A girl deciding whether to study abroad",
"Canada weather",
"Scholarships"
],
correct:1,
explanation:"Main idea = deciding to study abroad."
},
question:"How old is Mariana?",
options:["15","16","17","18"],
correct:2,
explanation:"She is seventeen."
},
{
question:"Where is she from?",
options:["Limón","Heredia","Cartago","San José"],
correct:0,
explanation:"She is from Limón."
}
]
}
];

const state={
current:1,
answers:{}
};

READINGS.forEach(r=>{
state.answers[r.id]={
skim:null,
scan:{},
skimChecked:false,
scanChecked:false
};
});

function saveState(){
localStorage.setItem("reading_state_roberth",JSON.stringify(state));
}

function isReadingComplete(rid){
const a=state.answers[rid];
return a.skimChecked && a.scanChecked;
}

function escapeHtml(s){
return String(s).replace(/[&<>"']/g,m=>({
"&":"&amp;",
"<":"&lt;",
">":"&gt;",
'"':"&quot;",
"'":"&#39;"
}[m]));
}

function renderTabs(){
const tabs=document.getElementById("tabs");
tabs.innerHTML="";

READINGS.forEach(r=>{
const btn=document.createElement("button");
btn.className="tab-btn"+(state.current===r.id?" active":"");
if(isReadingComplete(r.id)) btn.classList.add("completed");
btn.textContent=`Reading ${r.id}`;
btn.onclick=()=>{
state.current=r.id;
render();
};
tabs.appendChild(btn);
});
}
function renderReadings(){
const container=document.getElementById("readings-container");
container.innerHTML="";

READINGS.forEach(r=>{
const card=document.createElement("div");
card.className="reading-card"+(state.current===r.id?" active":"");

card.innerHTML=`
<div class="reading-header">
<div class="unit-badge unit-${r.unit}">Unit ${r.unit}</div>
<h2>${r.title}</h2>
</div>

<div class="step">
<div class="step-header">
<div class="step-number">1</div>
<div class="step-title">Read</div>
</div>

<div class="reading-text">
${r.paragraphs.map(p=>`<p>${p}</p>`).join("")}
</div>
</div>

<div class="step">
<div class="step-header">
<div class="step-number">2</div>
<div class="step-title">Questions</div>
</div>

<div class="question">
<div class="question-text">${r.skimming.question}</div>

<div class="options">
${r.skimming.options.map((o,i)=>`
<label class="option" onclick="selectSkim(${r.id},${i})">
<input type="radio" name="skim-${r.id}">
<span>${o}</span>
</label>
`).join("")}
</div>

<button class="btn btn-primary" onclick="checkSkim(${r.id})">
Check answer
</button>

<div class="feedback" id="skim-fb-${r.id}"></div>
</div>
</div>
`;

container.appendChild(card);
});
}
function selectSkim(rid,i){
state.answers[rid].skim=i;
saveState();
}

function checkSkim(rid){
const r=READINGS.find(x=>x.id===rid);
const ans=state.answers[rid];

const fb=document.getElementById(`skim-fb-${rid}`);

if(ans.skim===null){
alert("Select an option");
return;
}

ans.skimChecked=true;

if(ans.skim===r.skimming.correct){
fb.className="feedback show correct";
fb.innerHTML="✓ Correct";
}else{
fb.className="feedback show incorrect";
fb.innerHTML="✗ Incorrect";
}

saveState();
updateProgress();
}

function updateProgress(){
const done=READINGS.filter(r=>isReadingComplete(r.id)).length;
document.getElementById("progress-text").textContent=`${done}/${READINGS.length}`;
}

function resetAll(){
localStorage.removeItem("reading_state_roberth");
location.reload();
}

function render(){
renderTabs();
renderReadings();
updateProgress();
}

render();
