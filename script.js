// Mobile menu
const btn=document.getElementById("menuBtn"),nav=document.getElementById("mainNav");
if(btn&&nav){const icon=btn.querySelector("i");const set=o=>{nav.classList.toggle("open",o);btn.setAttribute("aria-expanded",o);icon.className=o?"fa-solid fa-xmark":"fa-solid fa-bars"};
btn.addEventListener("click",()=>set(!nav.classList.contains("open")));nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>set(false)))}
// Photo slots: shows assets/ file if it exists, otherwise a click-to-upload placeholder.
// Uploads are previewed and remembered in this browser only; to publish, save the image into /assets.
document.querySelectorAll(".slot").forEach(slot=>{
  const img=slot.querySelector("img"),input=slot.querySelector("input"),key="slot-"+slot.dataset.key;
  const show=src=>{img.onload=()=>slot.classList.add("has");img.onerror=()=>slot.classList.remove("has");img.src=src};
  let saved=null;try{saved=localStorage.getItem(key)}catch(e){}
  show(saved||slot.dataset.src);
  slot.addEventListener("click",()=>input.click());
  slot.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();input.click()}});
  input.addEventListener("click",e=>e.stopPropagation());
  input.addEventListener("change",()=>{const f=input.files[0];if(!f||!f.type.startsWith("image/"))return;
    const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const s=Math.min(1,1000/Math.max(im.width,im.height)),c=document.createElement("canvas");
      c.width=im.width*s;c.height=im.height*s;c.getContext("2d").drawImage(im,0,0,c.width,c.height);const url=c.toDataURL("image/jpeg",.85);
      show(url);try{localStorage.setItem(key,url)}catch(e){}};im.src=r.result};r.readAsDataURL(f)});
});
// Footer year
const y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
// Contact form (opens email client; replace with PHP/Laravel endpoint for production)
const form=document.getElementById("contactForm");
if(form)form.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(form);
  location.href="mailto:your@email.com?subject="+encodeURIComponent("Project enquiry from "+d.get("name"))+"&body="+encodeURIComponent(`Name: ${d.get("name")}\nEmail: ${d.get("email")}\nProject type: ${d.get("type")}\n\n${d.get("message")}`)});

// Projects: built from data.js (window.SITE.projects). Edit images/links there.
(function(){
  const grid=document.getElementById("projectGrid");
  if(!grid||!window.SITE||!Array.isArray(SITE.projects))return;
  const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  grid.innerHTML=SITE.projects.map(p=>{
    const img=(p.image||"").trim();
    return `<article class="project">
      <div class="project-img${img?"":" empty"}">
        ${img?`<img src="${esc(img)}" alt="${esc(p.title)} website screenshot" width="1200" height="750" loading="lazy" decoding="async">`:""}
        <div class="ph"><i class="fa-solid fa-image"></i><small>Screenshot coming soon</small></div>
      </div>
      <div class="project-body"><small>${esc(p.type)}</small><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p>
        <div class="tags">${(p.tags||[]).map(t=>`<span>${esc(t)}</span>`).join("")}</div>
        ${p.link?`<a class="text-link project-link" href="${esc(p.link)}" target="_blank" rel="noopener">View project <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`:`<span class="project-link is-soon" aria-disabled="true" title="Link coming soon">View project <i class="fa-solid fa-arrow-up-right-from-square"></i> <em>link coming soon</em></span>`}
      </div></article>`}).join("");
  // If an image fails: try other extensions of the same name, then show the placeholder.
  // Add ?debug=1 to the page address to see the exact path that failed (also logged in the console).
  const debug=/[?&]debug=1/.test(location.search),exts=[".webp",".png",".jpg",".jpeg"];
  const fail=im=>{const box=im.parentElement,path=im.getAttribute("src");
    console.error("[projects] Image not found: "+path+" (page: "+location.href+")");
    box.classList.add("empty");if(debug){const s=box.querySelector(".ph small");if(s)s.textContent="Not found: "+path}im.remove()};
  const hook=im=>{im.dataset.tried=im.dataset.tried||"0";
    im.addEventListener("error",()=>{const base=im.getAttribute("src").replace(/\.[a-z]+$/i,"");
      const next=exts.map(e=>base+e).find(u=>!(im.dataset.t||"").includes(u)&&u!==im.getAttribute("src"));
      im.dataset.t=(im.dataset.t||"")+" "+im.getAttribute("src");
      if(next&&im.dataset.tried++<3)im.src=next;else fail(im)});
    if(im.complete&&im.naturalWidth===0)im.dispatchEvent(new Event("error"))};
  grid.querySelectorAll(".project-img img").forEach(hook);
})();

// Share buttons (WhatsApp, LinkedIn, X, Facebook, native share / copy link)
(function(){
  const box=document.querySelector(".share");if(!box)return;
  const u=encodeURIComponent(location.href.split("#")[0]),t=encodeURIComponent(document.title);
  const map={whatsapp:"https://wa.me/?text="+t+"%20"+u,linkedin:"https://www.linkedin.com/sharing/share-offsite/?url="+u,x:"https://twitter.com/intent/tweet?text="+t+"&url="+u,facebook:"https://www.facebook.com/sharer/sharer.php?u="+u};
  box.querySelectorAll("[data-share]").forEach(a=>a.href=map[a.dataset.share]);
  const b=box.querySelector("#shareBtn");
  if(b)b.addEventListener("click",async()=>{const url=location.href.split("#")[0];
    try{if(navigator.share){await navigator.share({title:document.title,url});return}
      await navigator.clipboard.writeText(url);b.classList.add("done");b.title="Link copied!";setTimeout(()=>b.classList.remove("done"),2000)}catch(e){}});
})();
