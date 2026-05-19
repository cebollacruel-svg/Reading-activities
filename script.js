const READINGS = [

{
id:1,
unit:1,
title:"Studying in Another Country",
paragraphs:[
"Ana is 17 years old. She lives in Limón, Costa Rica. She is in eleventh grade.",
"She has an opportunity to study in Canada. She got a scholarship.",
"The scholarship pays for university and housing. It does not pay for travel.",
"Ana feels happy but nervous. She has never traveled to another country.",
"Her parents support her decision. They want her to follow her dreams."
],
vocab:[
["scholarship","financial help for studies"],
["housing","place to live"],
["travel","go to another place"]
],
skimming:{
question:"What is the text mainly about?",
options:[
"Ana wants to stop studying.",
"Ana has a chance to study in another country.",
"Ana wants to visit Limón.",
"Ana is looking for a job."
],
correct:1,
explanation:"The text is about Ana and her opportunity to study in Canada."
},
scanning:[
{
question:"How old is Ana?",
options:["15","16","17","18"],
correct:2,
explanation:"Ana is 17 years old."
},
{
question:"Where does she live?",
options:["Cartago","Limón","Heredia","Puntarenas"],
correct:1,
explanation:"She lives in Limón."
},
{
question:"Which country will she study in?",
options:["USA","Mexico","Canada","Spain"],
correct:2,
explanation:"She will study in Canada."
},
{
question:"What does the scholarship pay?",
options:["Only food","University and housing","Only transport","Everything"],
correct:1,
explanation:"It pays for university and housing."
},
{
question:"How does Ana feel?",
options:["Happy and nervous","Angry","Sad","Tired"],
correct:0,
explanation:"She feels happy but nervous."
}
]
},

{
id:2,
unit:1,
title:"Two Friends, Two Plans",
paragraphs:[
"Carlos and Diego are best friends.",
"They are in the last year of school.",
"Carlos wants to study medicine.",
"Diego wants to open a coffee shop.",
"Both are working for their future."
],
vocab:[
["future","time after now"],
["shop","small business"],
["study","learn"]
],
skimming:{
question:"What is the text mainly about?",
options:[
"Two students with different plans",
"A medical school",
"A coffee recipe",
"A football team"
],
correct:0,
explanation:"The text talks about two friends and their future plans."
},
scanning:[
{
question:"Who are the friends?",
options:["Carlos and Diego","Ana and Diego","Luis and Carlos","Mario and Pedro"],
correct:0,
explanation:"Carlos and Diego."
},
{
question:"What does Carlos want to study?",
options:["English","Medicine","Math","Art"],
correct:1,
explanation:"He wants to study medicine."
},
{
question:"What does Diego want to open?",
options:["Restaurant","Gym","Store","Coffee shop"],
correct:3,
explanation:"A coffee shop."
},
{
question:"What year are they in?",
options:["First","Last","Tenth","University"],
correct:1,
explanation:"Last year of school."
},
{
question:"Are they working for their future?",
options:["Yes","No","Maybe","Unknown"],
correct:0,
explanation:"Yes."
}
]
},

{
id:3,
unit:2,
title:"Healthy Life",
paragraphs:[
"Sofia is a teacher from San José.",
"She had unhealthy habits before.",
"She ate fast food every day.",
"Now she drinks water and walks every morning.",
"She feels better now."
],
vocab:[
["healthy","good for the body"],
["water","drink"],
["walk","move on foot"]
],
skimming:{
question:"What is the text mainly about?",
options:[
"Sofia changes her habits",
"Sofia buys food",
"Sofia travels",
"Sofia teaches English"
],
correct:0,
explanation:"The text talks about healthy changes."
},
scanning:[
{
question:"Where is Sofia from?",
options:["Limón","Heredia","San José","Nicoya"],
correct:2,
explanation:"San José."
},
{
question:"What did she eat before?",
options:["Fruit","Fast food","Soup","Rice"],
correct:1,
explanation:"Fast food."
},
{
question:"What does she drink now?",
options:["Coffee","Soda","Juice","Water"],
correct:3,
explanation:"Water."
},
{
question:"What exercise does she do?",
options:["Run","Swim","Walk","Dance"],
correct:2,
explanation:"Walk."
},
{
question:"How does she feel now?",
options:["Bad","Better","Sad","Hungry"],
correct:1,
explanation:"She feels better."
}
]
},

{
id:4,
unit:2,
title:"Franklin Chang Díaz",
paragraphs:[
"Franklin Chang Díaz is from Costa Rica.",
"He wanted to be an astronaut.",
"He went to the United States.",
"He studied hard.",
"He traveled to space seven times."
],
vocab:[
["astronaut","person in space"],
["space","outside Earth"],
["study","learn"]
],
skimming:{
question:"What is the text mainly about?",
options:[
"A famous Costa Rican astronaut",
"A school project",
"A teacher",
"A hospital"
],
correct:0,
explanation:"The text is about Franklin Chang Díaz."
},
scanning:[
{
question:"Where is he from?",
options:["USA","Mexico","Costa Rica","Canada"],
correct:2,
explanation:"Costa Rica."
},
{
question:"What was his dream?",
options:["Teacher","Astronaut","Doctor","Engineer"],
correct:1,
explanation:"Astronaut."
},
{
question:"Where did he go?",
options:["Panama","USA","Spain","Brazil"],
correct:1,
explanation:"United States."
},
{
question:"How many times did he travel to space?",
options:["3","5","7","9"],
correct:2,
explanation:"Seven times."
},
{
question:"Was he successful?",
options:["Yes","No","Maybe","Unknown"],
correct:0,
explanation:"Yes."
}
]
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
}];
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
