const PASSWORD = "2026";

const structures = [
  {
    cat:"Ossos e acidentes ósseos",
    name:"Clavícula",
    task:"Identificar extremidade esternal, extremidade acromial e relação com cintura escapular.",
    topo:"Entre esterno e acrômio; transmite força do membro superior ao esqueleto axial.",
    func:"Estabilização do ombro e suporte para movimentos amplos do membro superior."
  },
  {
    cat:"Ossos e acidentes ósseos",
    name:"Escápula",
    task:"Localizar espinha da escápula, acrômio, processo coracoide, cavidade glenoidal e bordas.",
    topo:"Parede posterior do tórax; base para músculos do ombro e manguito rotador.",
    func:"Movimentos escapulares: elevação, depressão, protração, retração e rotação."
  },
  {
    cat:"Ossos e acidentes ósseos",
    name:"Úmero proximal",
    task:"Identificar cabeça do úmero, tubérculo maior, tubérculo menor e sulco intertubercular.",
    topo:"Articula-se com a cavidade glenoidal; recebe tendões do manguito rotador.",
    func:"Base óssea dos movimentos de ombro."
  },
  {
    cat:"Ombro e cintura escapular",
    name:"Músculo deltoide",
    task:"Identificar porções anterior, média e posterior.",
    topo:"Recobre lateralmente o ombro; próximo ao nervo axilar e colo cirúrgico do úmero.",
    func:"Abdução, flexão, extensão e rotação do ombro conforme a porção."
  },
  {
    cat:"Ombro e cintura escapular",
    name:"Músculo supraespinhal",
    task:"Localizar na fossa supraespinhal da escápula.",
    topo:"Passa sob o acrômio até o tubérculo maior do úmero.",
    func:"Inicia a abdução do ombro; importante no impacto subacromial."
  },
  {
    cat:"Ombro e cintura escapular",
    name:"Músculo infraespinhal",
    task:"Localizar na fossa infraespinhal.",
    topo:"Posterior da escápula; insere-se no tubérculo maior.",
    func:"Rotação lateral do braço; estabiliza a cabeça do úmero."
  },
  {
    cat:"Ombro e cintura escapular",
    name:"Músculo subescapular",
    task:"Identificar na face anterior/costal da escápula.",
    topo:"Fica profundo na parede posterior da axila; insere-se no tubérculo menor.",
    func:"Rotação medial e estabilização glenoumeral."
  },
  {
    cat:"Ombro e cintura escapular",
    name:"Músculo redondo menor",
    task:"Localizar junto à borda lateral da escápula.",
    topo:"Forma limite do espaço quadrangular com o redondo maior e tríceps.",
    func:"Rotação lateral; relacionado ao nervo axilar."
  },
  {
    cat:"Ombro e cintura escapular",
    name:"Peitoral maior",
    task:"Identificar porções clavicular e esternocostal.",
    topo:"Parede anterior do tórax; forma prega axilar anterior.",
    func:"Adução, rotação medial e flexão do ombro; importante no supino."
  },
  {
    cat:"Ombro e cintura escapular",
    name:"Latíssimo do dorso",
    task:"Identificar a prega axilar posterior.",
    topo:"Vai do dorso ao úmero; próximo ao redondo maior.",
    func:"Extensão, adução e rotação medial; importante na barra fixa."
  },
  {
    cat:"Braço",
    name:"Bíceps braquial — cabeça longa",
    task:"Localizar o tendão no sulco intertubercular.",
    topo:"Origina-se no tubérculo supraglenoidal; atravessa o ombro.",
    func:"Flexão do cotovelo, supinação e auxílio na flexão do ombro."
  },
  {
    cat:"Braço",
    name:"Bíceps braquial — cabeça curta",
    task:"Localizar origem no processo coracoide.",
    topo:"Junto ao coracobraquial na região anterior do braço.",
    func:"Flexão do cotovelo e supinação."
  },
  {
    cat:"Braço",
    name:"Músculo coracobraquial",
    task:"Identificar profundo e medial ao bíceps.",
    topo:"É perfurado pelo nervo musculocutâneo.",
    func:"Flexão e adução do braço."
  },
  {
    cat:"Braço",
    name:"Músculo braquial",
    task:"Localizar profundo ao bíceps.",
    topo:"Face anterior do úmero; insere-se na ulna.",
    func:"Principal flexor do cotovelo."
  },
  {
    cat:"Braço",
    name:"Tríceps braquial — cabeça longa",
    task:"Identificar origem no tubérculo infraglenoidal.",
    topo:"Passa entre redondo menor e redondo maior; participa dos espaços axilares.",
    func:"Extensão do cotovelo e extensão do ombro."
  },
  {
    cat:"Braço",
    name:"Tríceps braquial — cabeça lateral",
    task:"Localizar na região posterior lateral do braço.",
    topo:"Acima do sulco do nervo radial.",
    func:"Extensão potente do cotovelo."
  },
  {
    cat:"Braço",
    name:"Tríceps braquial — cabeça medial",
    task:"Localizar profundamente na região posterior do braço.",
    topo:"Abaixo do sulco do nervo radial.",
    func:"Extensão contínua e estabilizadora do cotovelo."
  },
  {
    cat:"Antebraço anterior",
    name:"Flexor radial do carpo",
    task:"Identificar tendão no punho, lateral ao palmar longo quando presente.",
    topo:"Compartimento anterior superficial; segue em direção ao lado radial.",
    func:"Flexão e abdução radial do punho."
  },
  {
    cat:"Antebraço anterior",
    name:"Flexor superficial dos dedos",
    task:"Identificar como camada intermediária dos flexores.",
    topo:"Tendões passam pelo túnel do carpo até os dedos.",
    func:"Flexiona interfalângicas proximais e auxilia flexão do punho."
  },
  {
    cat:"Antebraço anterior",
    name:"Flexor profundo dos dedos",
    task:"Localizar camada profunda do antebraço anterior.",
    topo:"Origina-se na ulna e membrana interóssea; tendões chegam às falanges distais.",
    func:"Flexiona interfalângicas distais."
  },
  {
    cat:"Antebraço anterior",
    name:"Flexor ulnar do carpo",
    task:"Localizar no lado medial/ulnar do antebraço.",
    topo:"Próximo ao nervo ulnar no antebraço distal.",
    func:"Flexão e adução ulnar do punho."
  },
  {
    cat:"Antebraço anterior",
    name:"Pronador redondo",
    task:"Identificar na região proximal anterior do antebraço.",
    topo:"O nervo mediano passa entre suas cabeças.",
    func:"Pronação do antebraço."
  },
  {
    cat:"Antebraço posterior",
    name:"Extensor radial longo do carpo",
    task:"Localizar no compartimento posterior/lateral.",
    topo:"Região lateral do antebraço; próximo ao braquiorradial.",
    func:"Extensão e abdução radial do punho."
  },
  {
    cat:"Antebraço posterior",
    name:"Extensor dos dedos",
    task:"Identificar tendões no dorso da mão.",
    topo:"Compartimento posterior superficial; atravessa retináculo dos extensores.",
    func:"Extensão dos dedos."
  },
  {
    cat:"Antebraço posterior",
    name:"Extensor ulnar do carpo",
    task:"Localizar no lado ulnar posterior.",
    topo:"Posterior/medial do antebraço.",
    func:"Extensão e adução ulnar do punho."
  },
  {
    cat:"Antebraço posterior",
    name:"Supinador",
    task:"Identificar profundamente na região proximal posterior.",
    topo:"O ramo profundo do nervo radial atravessa o músculo supinador.",
    func:"Supinação do antebraço."
  },
  {
    cat:"Mão",
    name:"Músculos tenares",
    task:"Identificar eminência tenar.",
    topo:"Base do polegar; relação com ramo recorrente do nervo mediano.",
    func:"Oposição, abdução e flexão do polegar; afetados na síndrome do túnel do carpo."
  },
  {
    cat:"Mão",
    name:"Abdutor curto do polegar",
    task:"Localizar na região tenar superficial.",
    topo:"Inervação pelo nervo mediano.",
    func:"Abdução do polegar; pode perder força no túnel do carpo."
  },
  {
    cat:"Mão",
    name:"Oponente do polegar",
    task:"Identificar na profundidade da região tenar.",
    topo:"Região lateral da palma.",
    func:"Oposição do polegar; essencial para pinça fina."
  },
  {
    cat:"Mão",
    name:"Flexor curto do polegar",
    task:"Localizar na eminência tenar.",
    topo:"Cabeça superficial relacionada ao nervo mediano.",
    func:"Flexão do polegar."
  },
  {
    cat:"Mão",
    name:"Lumbricais laterais",
    task:"Localizar relacionados aos tendões flexores dos dedos.",
    topo:"1º e 2º lumbricais são inervados pelo nervo mediano.",
    func:"Flexionam metacarpofalângicas e estendem interfalângicas."
  },
  {
    cat:"Nervos",
    name:"Nervo axilar",
    task:"Localizar sua passagem pelo espaço quadrangular.",
    topo:"Próximo ao colo cirúrgico do úmero e artéria circunflexa posterior do úmero.",
    func:"Inerva deltoide e redondo menor; lesão compromete abdução."
  },
  {
    cat:"Nervos",
    name:"Nervo radial",
    task:"Identificar trajeto no sulco do nervo radial.",
    topo:"Posterior ao úmero com artéria braquial profunda.",
    func:"Inerva extensores; lesão pode causar mão caída."
  },
  {
    cat:"Nervos",
    name:"Nervo musculocutâneo",
    task:"Localizar perfurando o coracobraquial.",
    topo:"Segue entre bíceps braquial e braquial.",
    func:"Inerva compartimento anterior do braço."
  },
  {
    cat:"Nervos",
    name:"Nervo mediano",
    task:"Localizar no braço, entre cabeças do pronador redondo e túnel do carpo.",
    topo:"Acompanha artéria braquial no braço; passa dentro do túnel do carpo.",
    func:"Flexores do antebraço e músculos tenares; túnel do carpo."
  },
  {
    cat:"Nervos",
    name:"Nervo ulnar",
    task:"Localizar atrás do epicôndilo medial.",
    topo:"Passa no canal de Guyon no punho.",
    func:"Músculos intrínsecos da mão; pinça e movimentos finos."
  },
  {
    cat:"Vasos e topografia",
    name:"Artéria axilar",
    task:"Identificar como referência central da axila.",
    topo:"Fascículos do plexo braquial se organizam ao redor dela.",
    func:"Irrigação do membro superior proximal."
  },
  {
    cat:"Vasos e topografia",
    name:"Artéria braquial",
    task:"Localizar no braço medial ao bíceps.",
    topo:"Acompanha nervo mediano; palpável na fossa cubital.",
    func:"Principal vaso arterial do braço."
  },
  {
    cat:"Vasos e topografia",
    name:"Túnel do carpo",
    task:"Identificar limites e conteúdo.",
    topo:"Profundo ao retináculo dos flexores.",
    func:"Passagem do nervo mediano e tendões flexores."
  }
];

const cases = [
  {
    title:"Caso 1 — Dor no saque do vôlei",
    text:"Atleta sente dor ao elevar o braço acima da cabeça e piora durante o saque.",
    questions:["Qual músculo pode estar lesionado?","Qual movimento está comprometido?","Qual nervo está relacionado?","Qual exercício pode piorar?"],
    answer:"Suspeita: supraespinhal/manguito rotador. Movimento: abdução inicial e estabilização do ombro. Nervo: supraescapular. Pode piorar com movimentos acima da cabeça, desenvolvimento, saque e natação sem controle escapular."
  },
  {
    title:"Caso 2 — Mão caída após queda",
    text:"Aluno caiu apoiando o braço e não consegue estender o punho.",
    questions:["Qual nervo foi lesionado?","Onde ele passa?","Qual compartimento foi afetado?","Qual movimento ficou prejudicado?"],
    answer:"Nervo radial. Passa no sulco do nervo radial, posterior ao úmero. Afeta compartimento posterior/extensor. Prejudica extensão do punho e dedos."
  },
  {
    title:"Caso 3 — Síndrome do túnel do carpo",
    text:"Personal trainer relata formigamento no polegar, indicador e dedo médio após uso repetitivo de punho.",
    questions:["Qual nervo está comprimido?","Onde ocorre a compressão?","Quais músculos podem perder função?","Qual movimento fino é prejudicado?"],
    answer:"Nervo mediano comprimido no túnel do carpo. Podem ser afetados músculos tenares, principalmente abdutor curto do polegar, oponente do polegar e flexor curto do polegar. A oposição do polegar e a pinça fina ficam prejudicadas."
  },
  {
    title:"Caso 4 — Luxação anterior do ombro",
    text:"Aluno sofre luxação anterior durante atividade esportiva e apresenta fraqueza para abdução.",
    questions:["Qual nervo deve ser investigado?","Qual músculo perde força?","Qual região anatômica é importante?"],
    answer:"Nervo axilar. Músculo deltoide e redondo menor. Região: espaço quadrangular e colo cirúrgico do úmero."
  },
  {
    title:"Caso 5 — Cotovelo do tenista",
    text:"Aluno com dor lateral no cotovelo após treino de raquete e exercícios de pegada.",
    questions:["Quais músculos estão envolvidos?","Qual compartimento do antebraço?","Qual movimento provoca dor?"],
    answer:"Extensores do punho e dedos, principalmente origem comum dos extensores no epicôndilo lateral. Compartimento posterior do antebraço. Dor em extensão resistida do punho e preensão."
  }
];

const answers = [
  {
    title:"Gabarito geral — ombro",
    text:"Deltoide: abdução principal após início pelo supraespinhal. Supraespinhal: inicia abdução. Infraespinhal e redondo menor: rotação lateral. Subescapular: rotação medial. Peitoral maior e latíssimo do dorso: adução e rotação medial."
  },
  {
    title:"Gabarito geral — braço",
    text:"Bíceps braquial: flexão do cotovelo e supinação. Cabeça longa passa pelo sulco intertubercular. Cabeça curta vem do processo coracoide. Coracobraquial é perfurado pelo nervo musculocutâneo. Braquial é flexor forte do cotovelo. Tríceps estende o cotovelo."
  },
  {
    title:"Gabarito geral — antebraço",
    text:"Compartimento anterior: flexores/pronadores, principalmente nervo mediano e ulnar para flexor ulnar do carpo e parte medial do flexor profundo dos dedos. Compartimento posterior: extensores/supinadores, nervo radial."
  },
  {
    title:"Gabarito geral — mão e túnel do carpo",
    text:"Na síndrome do túnel do carpo ocorre compressão do nervo mediano sob o retináculo dos flexores. Pode haver dor, parestesia em polegar, indicador, médio e metade lateral do anelar, além de fraqueza tenar e dificuldade de oposição do polegar."
  },
  {
    title:"Gabarito geral — nervos",
    text:"Axilar: espaço quadrangular, deltoide e redondo menor. Radial: sulco radial, extensores. Musculocutâneo: perfura coracobraquial, flexores do braço. Mediano: pronador redondo e túnel do carpo. Ulnar: epicôndilo medial e canal de Guyon."
  }
];

const structureGrid = document.getElementById("structureGrid");
const caseGrid = document.getElementById("caseGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function renderStructures(){
  const search = searchInput.value.toLowerCase();
  const cat = categoryFilter.value;
  structureGrid.innerHTML = "";
  structures
    .filter(s => cat === "todas" || s.cat === cat)
    .filter(s => `${s.name} ${s.task} ${s.topo} ${s.func}`.toLowerCase().includes(search))
    .forEach(s => {
      const el = document.createElement("article");
      el.className = "card";
      el.innerHTML = `
        <span class="tag">${s.cat}</span>
        <h3>${s.name}</h3>
        <p><strong>Identificar:</strong> ${s.task}</p>
        <p><strong>Topografia:</strong> ${s.topo}</p>
        <p><strong>Função aplicada:</strong> ${s.func}</p>
      `;
      structureGrid.appendChild(el);
    });
}

function renderCases(){
  caseGrid.innerHTML = "";
  cases.forEach(c => {
    const el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `
      <span class="tag">Caso clínico</span>
      <h3>${c.title}</h3>
      <p>${c.text}</p>
      <ul>${c.questions.map(q=>`<li>${q}</li>`).join("")}</ul>
    `;
    caseGrid.appendChild(el);
  });
}

searchInput.addEventListener("input", renderStructures);
categoryFilter.addEventListener("change", renderStructures);

document.getElementById("saveNotes").addEventListener("click", () => {
  localStorage.setItem("studentNotesMS", document.getElementById("studentNotes").value);
  alert("Anotações salvas neste aparelho.");
});
document.getElementById("studentNotes").value = localStorage.getItem("studentNotesMS") || "";

document.getElementById("unlockBtn").addEventListener("click", () => {
  const pass = document.getElementById("passwordInput").value;
  const msg = document.getElementById("lockMessage");
  if(pass === PASSWORD){
    document.getElementById("lockBox").classList.add("hidden");
    const box = document.getElementById("answersBox");
    box.classList.remove("hidden");
    box.innerHTML = answers.map(a => `
      <article class="card answer-card">
        <h3>${a.title}</h3>
        <p>${a.text}</p>
      </article>
    `).join("") + cases.map(c => `
      <article class="card answer-card">
        <h3>Resposta — ${c.title}</h3>
        <p>${c.answer}</p>
      </article>
    `).join("");
  } else {
    msg.textContent = "Senha incorreta.";
  }
});

// IndexedDB para fotos
let db;
const request = indexedDB.open("MembroSuperiorFotosDB", 1);
request.onupgradeneeded = e => {
  db = e.target.result;
  db.createObjectStore("photos", {keyPath:"id", autoIncrement:true});
};
request.onsuccess = e => {
  db = e.target.result;
  renderGallery();
};

function addPhoto(file){
  const tx = db.transaction("photos","readwrite");
  const store = tx.objectStore("photos");
  store.add({file, createdAt:Date.now()});
  tx.oncomplete = renderGallery;
}

document.getElementById("photoInput").addEventListener("change", e => {
  [...e.target.files].forEach(file => addPhoto(file));
  e.target.value = "";
});

function renderGallery(){
  if(!db) return;
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  const tx = db.transaction("photos","readonly");
  const store = tx.objectStore("photos");
  const req = store.openCursor();
  req.onsuccess = e => {
    const cursor = e.target.result;
    if(cursor){
      const {id,file} = cursor.value;
      const url = URL.createObjectURL(file);
      const card = document.createElement("div");
      card.className = "photo-card";
      card.innerHTML = `<img src="${url}" alt="Foto anatômica"><button data-id="${id}">Excluir</button>`;
      card.querySelector("button").addEventListener("click", () => deletePhoto(id));
      gallery.prepend(card);
      cursor.continue();
    }
  };
}

function deletePhoto(id){
  const tx = db.transaction("photos","readwrite");
  tx.objectStore("photos").delete(id);
  tx.oncomplete = renderGallery;
}

document.getElementById("clearPhotos").addEventListener("click", () => {
  if(confirm("Apagar todas as fotos salvas neste aparelho?")){
    const tx = db.transaction("photos","readwrite");
    tx.objectStore("photos").clear();
    tx.oncomplete = renderGallery;
  }
});

// Instalação PWA
let deferredPrompt;
const installBtn = document.getElementById("installBtn");
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove("hidden");
});
installBtn.addEventListener("click", async () => {
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installBtn.classList.add("hidden");
});

if("serviceWorker" in navigator){
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}

renderStructures();
renderCases();
