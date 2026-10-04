const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const store={get:(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v===null||v===undefined?d:v}catch(e){return d}},set:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
/* ---- Data (APS values and subject requirements are INDICATIVE: verify with each institution) ---- */
const U={uct:["University of Cape Town","UCT","https://www.uct.ac.za"],wits:["University of the Witwatersrand","Wits","https://www.wits.ac.za"],up:["University of Pretoria","UP","https://www.up.ac.za"],sun:["Stellenbosch University","SU","https://www.sun.ac.za"],uj:["University of Johannesburg","UJ","https://www.uj.ac.za"],ukzn:["University of KwaZulu-Natal","UKZN","https://www.ukzn.ac.za"],ufs:["University of the Free State","UFS","https://www.ufs.ac.za"],ul:["University of Limpopo","UL","https://www.ul.ac.za"],nwu:["North-West University","NWU","https://www.nwu.ac.za"],uwc:["University of the Western Cape","UWC","https://www.uwc.ac.za"],nmu:["Nelson Mandela University","NMU","https://www.mandela.ac.za"],ru:["Rhodes University","Rhodes","https://www.ru.ac.za"],ufh:["University of Fort Hare","UFH","https://www.ufh.ac.za"],wsu:["Walter Sisulu University","WSU","https://www.wsu.ac.za"],tut:["Tshwane University of Technology","TUT","https://www.tut.ac.za"],dut:["Durban University of Technology","DUT","https://www.dut.ac.za"],cput:["Cape Peninsula University of Technology","CPUT","https://www.cput.ac.za"],unisa:["University of South Africa","UNISA","https://www.unisa.ac.za"]};
const C={"BCom Accounting":{uct:42,wits:40,up:34,sun:40,uj:32,ukzn:30,ufs:30,nwu:30,nmu:28,unisa:24},
"BSc Computer Science":{uct:42,wits:40,up:34,sun:36,uj:30,ukzn:28,ufs:28,nwu:28,ru:30},
"BSc Engineering (Electrical)":{uct:42,wits:42,up:34,sun:38,uj:32,ukzn:34,nwu:32},
"BSc Engineering (Civil)":{uct:42,wits:42,up:34,sun:38,uj:32,ukzn:34,nmu:30},
"MBChB Medicine":{uct:50,wits:48,up:46,sun:46,ukzn:44,ufs:42,ul:36},
"LLB Law":{uct:40,wits:40,up:36,sun:38,uj:30,ukzn:30,ufs:30,nwu:30,uwc:28,ufh:26},
"BEd Foundation Phase":{up:30,sun:30,uj:26,ukzn:26,ufs:26,nwu:26,nmu:24,wsu:24,unisa:20},
"BSc Nursing":{ukzn:30,wits:34,uj:28,ul:26,wsu:26,ufh:26},
"BA Psychology":{uct:36,wits:36,up:30,sun:32,uj:26,ufs:26,uwc:26,nwu:26,unisa:22},
"BSocSci Social Work":{ukzn:26,uj:26,uwc:24,ul:24,ufh:24,wsu:22,nwu:26},
"BSc Information Technology":{up:30,uj:28,nwu:26,nmu:26,ufs:26,ul:24},
"BCom Economics":{uct:40,wits:38,up:32,sun:38,uj:30,ukzn:28,ru:30},
"BSc Agriculture":{sun:34,up:30,ufs:28,ukzn:28,ul:26,ufh:24},
"Diploma ICT":{tut:24,dut:24,cput:24},
"Diploma Civil Engineering":{tut:24,dut:24,cput:24},
"Diploma Business Management":{tut:22,dut:22,cput:22,wsu:20}};
const SUBJS={math:"Mathematics",mlit:"Maths Literacy",phys:"Physical Sciences",life:"Life Sciences",acc:"Accounting",eco:"Economics",bus:"Business Studies",geo:"Geography",his:"History",it:"Information Technology",egd:"Engineering Graphics & Design"};
const STREAMS={Science:["math","phys","life"],Commerce:["math","acc","eco","bus"],Humanities:["mlit","his","geo"],Technical:["math","phys","egd"]};
const R={"BCom Accounting":["math"],"BSc Computer Science":["math"],"BSc Engineering (Electrical)":["math","phys"],"BSc Engineering (Civil)":["math","phys"],"MBChB Medicine":["math","phys","life"],"BSc Nursing":["math|mlit","life"],"BSc Information Technology":["math"],"BCom Economics":["math"],"BSc Agriculture":["math|mlit","phys|life"],"Diploma ICT":["math|mlit"],"Diploma Civil Engineering":["math","phys"]};
const BURS=[["Funza Lushaka","Teaching degrees (BEd/PGCE) in priority subjects","https://www.funzalushaka.doe.gov.za"],["Sasol Bursary","Engineering, science and technology","https://www.sasol.com"],["ISFAP","Missing-middle students in scarce-skill fields","https://www.isfap.org.za"],["Transnet Bursary","Engineering, logistics and finance","https://www.transnet.net"],["Allan Gray Orbis Fellowship","Entrepreneurial leaders","https://www.allangrayorbis.org"],["Provincial & municipal bursaries","Check your province’s education department","https://www.gov.za"]];
const SUBJ=["Home Language","First Additional Language","Mathematics / Maths Lit","Subject 4","Subject 5","Subject 6","Life Orientation"];
const QUIZ=[["What do you enjoy most?",[["Solving problems with numbers","stem"],["Helping or teaching people","people"],["Building or fixing things","build"],["Business and money","biz"]]],["Pick a project:",[["Design an app","stem"],["Run a community programme","people"],["Plan a bridge","build"],["Start a small business","biz"]]],["Your best subject group:",[["Maths / Science","stem"],["Languages / Life Sciences","people"],["Technical / Physical Science","build"],["Accounting / Economics","biz"]]],["Where would you like to work?",[["Tech company or lab","stem"],["School or clinic","people"],["On site outdoors","build"],["Office or own company","biz"]]],["Your friends say you are…",[["Curious","stem"],["Caring","people"],["Practical","build"],["Ambitious","biz"]]]];
const FIELDS={stem:["Computer Science / IT","Data Science","Engineering (Electrical)"],people:["Education (BEd)","Nursing","Social Work / Psychology"],build:["Civil Engineering","Construction Management","Electrical or Mechanical Diploma"],biz:["Accounting (BCom)","Business Management","Economics / Finance"]};
/* ---- i18n (have native speakers review) ---- */
const T={zu:{skip:"Yeqela kokuqukethwe",n_home:"Ikhaya",n_inst:"Izikhungo",n_aps:"I-APS",n_quiz:"Ikhwizi",n_bur:"Izibonelelo",n_guides:"Imihlahlandlela",n_dash:"Uhlelo lwami",h_title:"Ikusasa lakho liqala lapha. Ake sithole indlela yakho.",h_sub:"Amathuluzi mahhala okubala i-APS, ukukhetha isifundo nokufaka isicelo sosizo lwezimali.",c_aps:"Bala i-APS yami",c_nsfas:"Faka isicelo se-NSFAS",c_quiz:"Thola isifundo sami",c_inst:"Sesha izikhungo",ubuntu:"Umuntu ngumuntu ngabantu – siyakhula ndawonye."},
st:{skip:"Tlola ho ya litabeng",n_home:"Lehae",n_inst:"Litsi",n_aps:"APS",n_quiz:"Quiz",n_bur:"Libasari",n_guides:"Litataiso",n_dash:"Morero oa ka",h_title:"Bokamoso ba hau bo qala mona. Ha re fumaneng tsela ea hau.",h_sub:"Lisebelisoa tsa mahala tsa ho ethela APS, ho khetha thuto le ho kopa tšehetso ea ditjhelete.",c_aps:"Bala APS ea ka",c_nsfas:"Kopa NSFAS",c_quiz:"Fumana thuto ea ka",c_inst:"Batla litsi",ubuntu:"Motho ke motho ka batho – re hola hammoho."},
af:{skip:"Slaan oor na inhoud",n_home:"Tuis",n_inst:"Instellings",n_aps:"APS",n_quiz:"Vasvra",n_bur:"Beurse",n_guides:"Gidse",n_dash:"My plan",h_title:"Jou toekoms begin hier. Kom ons vind jou pad.",h_sub:"Gratis hulpmiddels om jou APS te bereken, ’n kursus te kies en vir befondsing aansoek te doen.",c_aps:"Bereken my APS",c_nsfas:"Doen aansoek vir NSFAS",c_quiz:"Vind my kursus",c_inst:"Soek instellings",ubuntu:"Umuntu ngumuntu ngabantu – ons groei saam."}};
const en={};$$("[data-i18n]").forEach(e=>en[e.dataset.i18n]=e.textContent);T.en=en;
function setLang(l){document.documentElement.lang=l;$$("[data-i18n]").forEach(e=>e.textContent=(T[l]||{})[e.dataset.i18n]||en[e.dataset.i18n]);store.set("lang",l);$("#lang").value=l}
/* ---- State ---- */
let aps=store.get("aps",0),favs=store.get("favs",[]),apps=store.get("apps",[]),mine=store.get("subj",[]),other=store.get("other",[]);
/* ---- Routing ---- */
function route(){const h=(location.hash||"#home").slice(1);const el=document.getElementById(h);const v=el&&el.classList.contains("view")?h:"home";
$$(".view").forEach(s=>s.hidden=s.id!==v);$$("nav a").forEach(a=>a.classList.toggle("on",a.hash==="#"+v));
if(v==="dashboard")renderDash();window.scrollTo(0,0)}
addEventListener("hashchange",route);
/* ---- APS: adds the level of EVERY subject entered ---- */
const pts=p=>p>=80?7:p>=70?6:p>=60?5:p>=50?4:p>=40?3:p>=30?2:1;
$("#subjects").innerHTML=`<div class="subhead"><span></span><span>Mark %</span><span>Level</span></div>`+SUBJ.map((s,i)=>`<label>${s}<span class="pair"><input type="number" inputmode="numeric" min="0" max="100" aria-label="${s} mark in percent" data-p="${i}" placeholder="%"><input type="number" inputmode="numeric" min="1" max="7" aria-label="${s} level from 1 to 7" data-l="${i}" placeholder="1-7"></span></label>`).join("");
function calcAPS(){const lv=$$("#subjects [data-l]").map(i=>parseInt(i.value,10)).filter(n=>n>=1&&n<=7);
aps=lv.reduce((a,b)=>a+b,0);$("#apsout").textContent=aps;store.set("aps",aps);
$("#apsmsg").textContent=lv.length?lv.join(" + ")+" = "+aps:"Enter a mark or a level (1–7) for each subject.";renderInst()}
$("#subjects").addEventListener("input",e=>{const t=e.target;
if(t.dataset.p!==undefined){const p=parseInt(t.value,10),l=$('[data-l="'+t.dataset.p+'"]');l.value=(!isNaN(p)&&p>=0&&p<=100)?pts(p):""}
calcAPS()});
/* ---- Subject streams ---- */
const need=c=>R[c]||[],lab=g=>g.split("|").map(s=>SUBJS[s]).join(" or ");
const missing=c=>mine.length?need(c).filter(g=>!g.split("|").some(s=>mine.includes(s))):[];
function renderSubj(){$("#streams").innerHTML=Object.keys(STREAMS).map(s=>`<button type="button" class="cta ghost" data-st="${s}">${s} stream</button>`).join("");
$("#subjpick").innerHTML=Object.entries(SUBJS).map(([k,v])=>`<label><input type="checkbox" value="${k}" ${mine.includes(k)?"checked":""}>${v}</label>`).join("")}
$("#streams").onclick=e=>{const s=e.target.dataset.st;if(s){mine=[...STREAMS[s]];store.set("subj",mine);renderSubj();renderInst()}};
$("#subjpick").onchange=()=>{mine=$$("#subjpick input:checked").map(i=>i.value);store.set("subj",mine);renderInst()};
/* ---- Other subjects (add 2 or more) ---- */
const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
function renderOther(){$("#otherlist").innerHTML=other.map((o,i)=>`<label>${esc(o)} <button type="button" data-rm="${i}" aria-label="Remove ${esc(o)}" class="x">✕</button></label>`).join("")}
function addOther(){const v=$("#othername").value.trim().slice(0,40);if(!v)return;
if(!other.some(o=>o.toLowerCase()===v.toLowerCase())){other.push(v);store.set("other",other)}
$("#othername").value="";$("#othername").focus();renderOther();renderInst()}
$("#addother").onclick=addOther;$("#othername").onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();addOther()}};
$("#otherlist").onclick=e=>{const r=e.target.dataset.rm;if(r!=null){other.splice(r,1);store.set("other",other);renderOther();renderInst()}};
/* ---- Institutions + favourites ---- */
const key=(u,c)=>u+"|"+c;
const row=(u,c,p)=>{const m=missing(c),n=need(c),f=favs.includes(key(u,c));return`<div class="item${m.length?" dim":""}"><a class="grow" href="${U[u][2]}" target="_blank" rel="noopener"><strong>${c}</strong><small>${U[u][0]} · visit website ↗</small><small class="${m.length?"miss":""}">${n.length?"Needs: "+n.map(lab).join(", "):"No specific subjects required"}${m.length?" — you are missing "+m.map(lab).join(", "):""}</small></a><span class="badge ${aps>=p?"ok":""}">APS ${p}</span><button data-fav="${key(u,c)}" aria-pressed="${f}" class="${f?"on":""}" aria-label="Save ${c} at ${U[u][1]}">${f?"★":"☆"}</button></div>`};
function renderInst(){const q=$("#q").value.trim().toLowerCase(),only=$("#onlyqual").checked&&aps;$("#myaps").textContent=aps||"–";
$("#subjnote").textContent=mine.length||other.length?"Subjects selected: "+mine.map(s=>SUBJS[s]).concat(other).join(", "):"Choose your subjects on the APS page to see which courses you qualify for.";
const ok=(c,u)=>!only||(aps>=C[c][u]&&!missing(c).length);let h="";
Object.keys(U).filter(u=>q&&(U[u][0]+" "+U[u][1]).toLowerCase().includes(q)).forEach(u=>{
h+=`<div class="card feature"><h3>${U[u][0]}</h3><p><a class="cta gold" href="${U[u][2]}" target="_blank" rel="noopener">Go to ${U[u][1]} website ↗</a></p><p><small>Find the application portal on the official site.</small></p></div>`+Object.keys(C).filter(c=>C[c][u]!=null&&ok(c,u)).map(c=>row(u,c,C[c][u])).join("")});
Object.keys(C).filter(c=>!q||c.toLowerCase().includes(q)).forEach(c=>{const us=Object.keys(C[c]).filter(u=>ok(c,u)).sort((a,b)=>C[c][a]-C[c][b]);if(!us.length)return;
h+=`<h3>${c} <small>(${us.length} institutions)</small></h3>`+us.map(u=>row(u,c,C[c][u])).join("")});
$("#instlist").innerHTML=h||"<p>No matches. Try a shorter search, like “law” or “UJ”.</p>"}
$("#q").oninput=renderInst;$("#onlyqual").onchange=renderInst;
document.addEventListener("click",e=>{const f=e.target.closest("[data-fav]");if(!f)return;const k=f.dataset.fav;favs=favs.includes(k)?favs.filter(x=>x!==k):[...favs,k];store.set("favs",favs);renderInst();renderDash()});
/* ---- Quiz ---- */
let qi=0,sc={};
function quiz(){const b=$("#quizbox");if(qi>=QUIZ.length){const top=Object.entries(sc).sort((a,b)=>b[1]-a[1]).slice(0,2);
b.innerHTML=`<h3>Courses to explore</h3>`+top.map(([k])=>FIELDS[k].map(f=>`<div class="item"><strong>${f}</strong></div>`).join("")).join("")+`<p><a class="cta" href="#institutions">See institutions</a> <button class="cta ghost" id="redo">Retake</button></p>`;$("#redo").onclick=()=>{qi=0;sc={};quiz()};return}
const [q,o]=QUIZ[qi];b.innerHTML=`<p>Question ${qi+1} of ${QUIZ.length}</p><h3>${q}</h3>`+o.map(x=>`<button class="opt" data-k="${x[1]}">${x[0]}</button>`).join("")}
$("#quizbox").onclick=e=>{const k=e.target.dataset.k;if(k){sc[k]=(sc[k]||0)+1;qi++;quiz()}};
/* ---- Bursaries ---- */
$("#burlist").innerHTML=BURS.map(b=>`<a class="card" href="${b[2]}" target="_blank" rel="noopener"><h3>${b[0]}</h3><p>${b[1]}</p></a>`).join("");
/* ---- Videos: tap to load. Add data-id="YOUTUBE_ID" on a .vid to embed it ---- */
$$(".vid").forEach(v=>{const q=v.dataset.q,id=v.dataset.id;v.innerHTML=`<button>${id?"▶ Play video":"▶ Watch on YouTube"}</button>`;
v.firstChild.onclick=()=>{if(id)v.innerHTML=`<iframe title="${q}" loading="lazy" allowfullscreen src="https://www.youtube-nocookie.com/embed/${id}?rel=0"></iframe>`;else window.open("https://www.youtube.com/results?search_query="+encodeURIComponent(q),"_blank","noopener")}});
/* ---- Dashboard ---- */
const ST=["Planning","Documents ready","Submitted","Offer received"];
function renderDash(){$("#favs").innerHTML=favs.filter(k=>U[k.split("|")[0]]).map(k=>{const [u,c]=k.split("|");return`<div class="item"><a class="grow" href="${U[u][2]}" target="_blank" rel="noopener"><strong>${c}</strong><small>${U[u][0]} ↗</small></a><button data-fav="${k}" class="on" aria-label="Remove ${c}">★</button></div>`}).join("")||"<p>Tap ☆ on a course to save it here.</p>";
$("#apps").innerHTML=apps.map((a,i)=>`<div class="item"><div class="grow"><strong>${a.n.replace(/</g,"&lt;")}</strong></div><select data-s="${i}" aria-label="Status">${ST.map(s=>`<option ${s===a.s?"selected":""}>${s}</option>`).join("")}</select><button data-d="${i}" aria-label="Delete">✕</button></div>`).join("")||"<p>Add the applications you are working on.</p>"}
$("#addapp").onclick=()=>{const n=$("#appname").value.trim();if(!n)return;apps.push({n,s:ST[0]});store.set("apps",apps);$("#appname").value="";renderDash()};
$("#apps").addEventListener("change",e=>{if(e.target.dataset.s!=null){apps[e.target.dataset.s].s=e.target.value;store.set("apps",apps)}});
$("#apps").addEventListener("click",e=>{const d=e.target.dataset.d;if(d!=null){apps.splice(d,1);store.set("apps",apps);renderDash()}});
/* ---- Settings ---- */
function toggle(id,k,fn){const b=$("#"+id);const set=v=>{b.setAttribute("aria-pressed",String(v));fn(v);store.set(k,v)};set(store.get(k,false));b.onclick=()=>set(b.getAttribute("aria-pressed")!=="true")}
toggle("lowdata","low",v=>document.body.classList.toggle("lowdata",v));
toggle("bigtext","big",v=>document.documentElement.style.setProperty("--fs",v?"19px":"16px"));
toggle("contrast","hc",v=>document.documentElement.dataset.contrast=v?"1":"0");
if(navigator.connection&&navigator.connection.saveData&&localStorage.getItem("low")===null)$("#lowdata").click();
$("#lang").onchange=e=>setLang(e.target.value);
/* ---- Start ---- */
setLang(store.get("lang","en"));renderSubj();renderOther();renderInst();quiz();route();
if("serviceWorker"in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{});
