import{a as u}from"./chunk-4GITJ2X4.js";import{N as c,S as d,m as i,y as l}from"./chunk-DYTTO7CO.js";var p={production:!1,creditsApiUrl:"https://raw.githubusercontent.com/LightOfTheSun/front-end-coding-task-db/master/db.json"};var f=class s{constructor(n){this.http=n}apiUrl=p.creditsApiUrl;getCredits(){return this.http.get(this.apiUrl).pipe(l(n=>(console.error("Error loading credits:",n),i([]))))}calculateStats(n){let r={},e={};n.forEach(t=>{let o=new Date(t.issuance_date).toLocaleString("default",{month:"short",year:"numeric"});r[o]||(r[o]={totalCredits:0,totalAmount:0,totalPercent:0,totalReturned:0,averageAmount:0}),r[o].totalCredits+=1,r[o].totalAmount+=t.body,r[o].totalPercent+=t.percent,t.actual_return_date&&(r[o].totalReturned+=1);let a=t.user;e[a]||(e[a]={totalCredits:0,totalPercent:0,totalBody:0,totalReturned:0}),e[a].totalCredits+=1,e[a].totalBody+=t.body,e[a].totalPercent+=t.percent,t.actual_return_date&&(e[a].totalReturned+=1)}),Object.keys(r).forEach(t=>{r[t].averageAmount=r[t].totalAmount/r[t].totalCredits});let m=Object.keys(e).sort((t,o)=>e[o].totalCredits-e[t].totalCredits).slice(0,10),y=Object.keys(e).filter(t=>e[t].totalReturned>0).sort((t,o)=>e[o].totalPercent-e[t].totalPercent).slice(0,10),C=Object.keys(e).filter(t=>e[t].totalReturned>0).sort((t,o)=>e[o].totalPercent/e[o].totalBody-e[t].totalPercent/e[t].totalBody).slice(0,10);return{stats:r,topUsersByCredits:m,topUsersByPercent:y,topUsersByRatio:C}}static \u0275fac=function(r){return new(r||s)(d(u))};static \u0275prov=c({token:s,factory:s.\u0275fac,providedIn:"root"})};export{f as a};
