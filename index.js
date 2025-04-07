import{a as w,i as d,S as v}from"./assets/vendor-D0cagnvz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const _=void 0,L=void 0;async function h(s,t,l=15){try{return(await w.get(L,{params:{key:_,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:l}})).data}catch(i){d.error({message:`Error: ${i.message}`,position:"topRight",iconUrl:"https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg"})}}const f=document.querySelector(".gallery"),C=new v(".gallery a"),p=s=>{const t=s.map(({webformatURL:l,largeImageURL:i,tags:e,likes:r,views:c,comments:y,downloads:b})=>`<a class="gallery-item" href="${i}">
        <div class="image-card">
          <img src="${l}" alt="${e}" loading="lazy" />
          <div class="image-info">
            <ul class="list">
                <li class="list_item">
                <h3 class="item_title">Likes</h3>
                <p class="item_text">${r}</p></li>
                <li class="list_item">
                <h3 class="item_title">Views</h3>
                <p class="item_text">${c}</p></li>
                <li class="list_item">
                <h3 class="item_title">Comments</h3>
                <p class="item_text">${y}</p></li>
                <li class="list_item">
                <h3 class="item_title">Downloads</h3>
                <p class="item_text">${b}</p></li>
            </ul>
          </div>
        </div>
      </a>`).join("");f.insertAdjacentHTML("beforeend",t),C.refresh()},S=()=>{f.innerHTML=""},q=document.querySelector(".search-form"),x=document.querySelector(".search-input"),E=document.querySelector(".gallery"),a=document.querySelector(".loader"),m=15;let n=1,u="",g=0,o=null;q.addEventListener("submit",async s=>{if(s.preventDefault(),u=x.value.trim(),!u){d.error({message:"Please enter a search term!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:"https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg"});return}S(),n=1,g=0,o&&(o.remove(),o=null),a.style.display="block";try{const t=await h(u,n,m);if(t.hits.length===0){a.style.display="none",d.info({message:"We're sorry, but no images match your search.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:"https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg"});return}g=t.totalHits,p(t.hits),a.style.display="none",g>n*m&&$(),lighbox.refresh()}catch{a.style.display="none"}});function $(){o=document.createElement("button"),o.textContent="Load more",o.classList.add("load-more-btn"),E.insertAdjacentElement("afterend",o),o.addEventListener("click",async()=>{n+=1,a.style.display="block";try{const s=await h(u,n,m);p(s.hits),a.style.display="none",P(),n*m>=g&&(o.remove(),o=null,d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:"https://raw.githubusercontent.com/denis-cactus/goit-js-hw-12/refs/heads/gh-pages/error.svg"}))}catch{a.style.display="none",d.error({title:"Error",message:"Something went wrong!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb"})}})}function P(){const s=document.querySelector(".image-card");if(!s)return;const t=s.getBoundingClientRect().height;window.scrollBy({top:t*3,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
