import{a as v,i,S as _}from"./assets/vendor-D0cagnvz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const L="48901919-31fb8722d9302fb6f0fb2505f",S="https://pixabay.com/api/";async function h(o,r,c){try{return(await v.get(S,{params:{key:L,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:c}})).data}catch(a){throw i.error({message:`Error: ${a.message}`,position:"topRight",iconUrl:"https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg"}),a}}const f=o=>{const r=document.querySelector(".gallery"),c=o.map(({webformatURL:e,largeImageURL:t,tags:l,likes:p,views:y,comments:b,downloads:w})=>`<a class="gallery-item" href="${t}">
        <div class="image-card">
          <img src="${e}" alt="${l}" loading="lazy" />
          <div class="image-info">
            <ul class="list">
                <li class="list_item">
                <h3 class="item_title">Likes</h3>
                <p class="item_text">${p}</p></li>
                <li class="list_item">
                <h3 class="item_title">Views</h3>
                <p class="item_text">${y}</p></li>
                <li class="list_item">
                <h3 class="item_title">Comments</h3>
                <p class="item_text">${b}</p></li>
                <li class="list_item">
                <h3 class="item_title">Downloads</h3>
                <p class="item_text">${w}</p></li>
            </ul>
          </div>
        </div>
      </a>`).join("");r.insertAdjacentHTML("beforeend",c),new _(".gallery-item").refresh()},C=()=>{document.querySelector(".gallery").innerHTML=""},q=document.querySelector(".search-form"),x=document.querySelector(".search-input");document.querySelector(".gallery");const m=document.querySelector(".loader"),g=15;let n=1,u="",d=0,s=null;q.addEventListener("submit",async o=>{if(o.preventDefault(),u=x.value.trim(),!u){i.error({message:"Please enter a search term!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:"https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg"});return}C(),n=1,d=0,s&&(s.remove(),s=null),m.style.display="block";try{const r=await h(u,n,g);if(m.style.display="none",r.hits.length===0){i.info({message:"No images found. Try another search!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:"https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg"});return}d=r.totalHits,f(r.hits),d>n*g&&E()}catch{m.style.display="none",i.error({title:"Error",message:"Something went wrong!",position:"topRight"})}});function E(){s=document.createElement("button"),s.textContent="Load more",s.classList.add("load-more-btn"),document.body.append(s),s.addEventListener("click",async()=>{n+=1;try{const o=await h(u,n,g);f(o.hits),P(),n*g>=d&&(s.remove(),s=null,i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:"https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg"}))}catch{i.error({title:"Error",message:"Please enter a search term!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"})}})}function P(){const o=document.querySelector(".image-card").getBoundingClientRect().height;window.scrollBy({top:o*3,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
