import{a as _,i as n,S as m}from"./assets/vendor-D0cagnvz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const L="48901919-31fb8722d9302fb6f0fb2505f",S="https://pixabay.com/api/";async function f(s,t,c=15){try{const o=await _.get(S,{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:c}});if(o.status!==200||!o.data.hits.length)throw new Error("No images found.");return o.data}catch(o){throw n.error({message:`Error: ${o.message}`,position:"topRight",iconUrl:"https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg"}),o}}const p=document.querySelector(".gallery");let C=new m(".gallery a");const y=s=>{const t=s.map(({webformatURL:c,largeImageURL:o,tags:e,likes:r,views:d,comments:w,downloads:v})=>`<a class="gallery-item" href="${o}">
        <div class="image-card">
          <img src="${c}" alt="${e}" loading="lazy" />
          <div class="image-info">
            <ul class="list">
                <li class="list_item">
                <h3 class="item_title">Likes</h3>
                <p class="item_text">${r}</p></li>
                <li class="list_item">
                <h3 class="item_title">Views</h3>
                <p class="item_text">${d}</p></li>
                <li class="list_item">
                <h3 class="item_title">Comments</h3>
                <p class="item_text">${w}</p></li>
                <li class="list_item">
                <h3 class="item_title">Downloads</h3>
                <p class="item_text">${v}</p></li>
            </ul>
          </div>
        </div>
      </a>`).join("");p.insertAdjacentHTML("beforeend",t),C.refresh()},x=()=>{p.innerHTML=""},E=document.querySelector(".search-form"),q=document.querySelector(".search-input");document.querySelector(".gallery");const i=document.querySelector(".loader"),h=15;let l=1,u="",g=0,a=null,b=new m(".gallery a");E.addEventListener("submit",async s=>{if(s.preventDefault(),u=q.value.trim(),!u){n.error({message:"Please enter a search term!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:"https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg"});return}x(),l=1,g=0,a&&(a.remove(),a=null),i.style.display="block";try{const t=await f(u,l,h);if(t.hits.length===0){i.style.display="none",n.info({message:"We're sorry, but no images match your search.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:"https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg"});return}g=t.totalHits,y(t.hits),b.refresh(),i.style.display="none",g>l*h&&$()}catch{i.style.display="none",n.error({title:"Error",message:"Something went wrong!",position:"topRight"})}});function $(){a=document.createElement("button"),a.textContent="Load more",a.classList.add("load-more-btn"),document.body.append(a),a.addEventListener("click",async()=>{l+=1,i.style.display="block";try{const s=await f(u,l,h);y(s.hits),b.refresh(),i.style.display="none",P(),l*h>=g&&(a.remove(),a=null,n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:"https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg"}))}catch{i.style.display="none",n.error({title:"Error",message:"Something went wrong!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"})}})}function P(){const s=document.querySelector(".image-card");if(!s)return;const t=s.getBoundingClientRect().height;window.scrollBy({top:t*3,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
