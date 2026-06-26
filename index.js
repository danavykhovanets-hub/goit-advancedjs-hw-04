import{a as f,S as m,i as a}from"./assets/vendor-BGqwtSVv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="56452748-acb3c6ecf21893b07db51bc11",h="https://pixabay.com/api/";function y(s){return f.get(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),p=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p><b>Likes</b><span>${t}</span></p>
        <p><b>Views</b><span>${i}</span></p>
        <p><b>Comments</b><span>${u}</span></p>
        <p><b>Downloads</b><span>${d}</span></p>
      </div>
    </li>`).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function v(){l.innerHTML=""}function S(){p.classList.add("loader--visible")}function c(){p.classList.remove("loader--visible")}const $=document.querySelector(".form");$.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();v(),S(),y(r).then(o=>{if(c(),o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{c(),a.error({message:`Something went wrong: ${o.message}`,position:"topRight"})})});
//# sourceMappingURL=index.js.map
