function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");function l(t,o){const n=Math.random()>.3;new Promise(((e,i)=>{setTimeout((()=>{n?e({position:t,delay:o}):i({position:t,delay:o})}),o)})).then((({position:t,delay:o})=>e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`))).catch((({position:t,delay:o})=>e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)))}document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();const{delay:t,step:o,amount:n}=e.currentTarget;let i=Number(t.value);const r=Number(o.value);for(let e=0;e<n.value;e++)l(e+1,i),i+=r}));
//# sourceMappingURL=03-promises.0ce21840.js.map
