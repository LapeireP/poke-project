(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();async function I(s=0,a=151){const n=`https://pokeapi.co/api/v2/pokemon?offset=${s}&limit=${a}`;return(await(await fetch(n)).json()).results}function w(){const s=localStorage.getItem("thema")||"licht";document.documentElement.setAttribute("data-theme",s)}function N(){const a=document.documentElement.getAttribute("data-theme")==="licht"?"donker":"licht";document.documentElement.setAttribute("data-theme",a),localStorage.setItem("thema",a)}const E=document.documentElement,j=new MutationObserver(s=>{for(const a of s)a.type==="attributes"&&a.attributeName==="data-theme"&&console.log("Thema gewijzigd naar:",E.getAttribute("data-theme"))});j.observe(E,{attributes:!0});document.getElementById("themaschakelaar").addEventListener("click",N);w();let l=[];function v(){const s=localStorage.getItem("favorieten");return s?JSON.parse(s).map(Number):[]}function B(s){localStorage.setItem("favorieten",JSON.stringify(s))}window.toggleFavoriet=function(s){const a=v();if(a.includes(s)){const n=a.indexOf(s);a.splice(n,1)}else a.push(s);B(a),y(l),$(l)};function y(s){const a=document.getElementById("pokemon-lijst"),n=v();a.innerHTML=s.map(t=>`
    <div class="pokemon-kaart">
    <div class="pokemon-kaartinfo">
    <button class="favorietenknop" data-id="${t.id}"
     style="color: ${n.includes(t.id)?"red":"grey"}">♥</button>
      <img src="${t.sprite}" alt="${t.name}">
      <img src="${t.sprite2}" alt="${t.name}">
      <h3 class="kenmerkjs">ID: ${t.id}</h3>
      <h3 class="kenmerkjs">Naam: ${t.name}</h3>
      <h3 class="kenmerkjs">Type 1: ${t.type1}</h3>
      <h3 class="kenmerkjs">Type 2: ${t.type2||"none"}</h3>
      <h3 class="kenmerkjs">Base Stats: ${t.basestats}</h3>
      <h3 class="kenmerkjs">Ability: ${t.ability}</h3>
      <h3>${t.id}</h3>
      <h3>${t.name}</h3>
      <h3>${t.type1}</h3>
      <h3>${t.type2||"none"}</h3>
      <h3>${t.basestats}</h3>
      <h3>${t.ability}</h3>
      </div>
    </div>
  `).join(""),a.querySelectorAll(".favorietenknop").forEach(t=>{t.addEventListener("click",()=>toggleFavoriet(Number(t.dataset.id)))})}function $(s){const a=document.getElementById("favorieten-lijst"),n=v(),t=s.filter(e=>n.includes(e.id));if(t.length===0){a.innerHTML="<p>Jouw lijst met favorieten is leeg.</p>";return}a.innerHTML=t.map(e=>`
    <div class="pokemon-kaart">
      <div class="pokemon-kaartinfo">
        <button 
          class="favorietenknop" 
          style="color: ${n.includes(e.id)?"red":"grey"}"
          data-id="${e.id}">
          ♥
        </button>
        <img src="${e.sprite}" alt="${e.name}">
        <img src="${e.sprite2}" alt="${e.name}">
        <h3 class="kenmerkfavo">ID: ${e.id}</h3>
        <h3 class="kenmerkfavo">Naam: ${e.name}</h3>
      </div>
    </div>
  `).join(""),a.querySelectorAll(".favorietenknop").forEach(e=>{e.addEventListener("click",()=>toggleFavoriet(Number(e.dataset.id)))})}async function T(){const s=await I(),a=document.getElementById("zoek-input"),n=document.getElementById("type-filter"),t=document.getElementById("baseStatsFilter"),e=document.getElementById("sorteer-naam"),r=document.getElementById("sorteer-baseStats"),d=s.map(async g=>{const o=await(await fetch(g.url)).json();return{id:Number(o.id),name:o.name,sprite:o.sprites.front_default,sprite2:o.sprites.front_shiny,type1:o.types[0]?.type.name||null,type2:o.types[1]?.type.name||null,basestats:o.stats.reduce((h,p)=>h+(p.base_stat||0),0),ability:o.abilities[0]?.ability.name}});l=await Promise.all(d);function m(){const g=a.value.toLowerCase(),f=n.value,o=t.value,h=e.value,p=r.value,u=l.filter(i=>{const c=i.name.toLowerCase().includes(g),L=!f||i.type1===f||i.type2===f;let b=!0;if(o){const[S,k]=o.split("-").map(Number);b=i.basestats>=S&&i.basestats<=k}return c&&L&&b});h==="az"?u.sort((i,c)=>i.name.localeCompare(c.name)):h==="za"&&u.sort((i,c)=>c.name.localeCompare(i.name)),p==="baseStatsOplopend"?u.sort((i,c)=>i.basestats-c.basestats):p==="baseStatsAflopend"&&u.sort((i,c)=>c.basestats-i.basestats),y(u)}y(l),$(l),a.addEventListener("input",m),n.addEventListener("change",m),t.addEventListener("change",m),e.addEventListener("change",m),r.addEventListener("change",m)}T();document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("pokemon-formulier"),a=document.getElementById("pokemon-id"),n=document.getElementById("formulier-fout");s&&s.addEventListener("submit",function(t){t.preventDefault();const e=Number(a.value);if(!e||e<1||e>151){n.textContent="Voer een geldige Pokémon ID in van de eerste generatie.",n.style.display="block";return}n.style.display="none",toggleFavoriet(e),a.value=""})});
