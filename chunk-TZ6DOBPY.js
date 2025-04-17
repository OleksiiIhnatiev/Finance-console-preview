import{a as D}from"./chunk-3CVUW2BN.js";import"./chunk-4GITJ2X4.js";import{j as y,k as x,l as I,n as B}from"./chunk-LCBKTPO3.js";import{$a as u,Ea as S,Ja as c,Qa as m,Sa as r,Ta as t,Va as E,Wa as v,Za as d,_a as p,ab as b,bb as s,cb as g,hb as f,ia as C,jb as h,ua as a,za as _}from"./chunk-DYTTO7CO.js";function F(o,i){if(o&1&&(r(0,"div",2)(1,"div",8)(2,"div",9)(3,"h5",10),u(4),t()(),r(5,"div",11)(6,"ul",12)(7,"li",13)(8,"strong"),u(9,"\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0432\u0438\u0434\u0430\u043D\u0438\u0445 \u043A\u0440\u0435\u0434\u0438\u0442\u0456\u0432:"),t(),u(10),t(),r(11,"li",13)(12,"strong"),u(13,"\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0441\u0443\u043C\u0430 \u0432\u0438\u0434\u0430\u0447\u0456 \u043A\u0440\u0435\u0434\u0438\u0442\u0456\u0432:"),t(),u(14),f(15,"number"),t(),r(16,"li",13)(17,"strong"),u(18,"\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u0432\u0438\u0434\u0430\u043D\u0438\u0445 \u043A\u0440\u0435\u0434\u0438\u0442\u0456\u0432:"),t(),u(19),f(20,"number"),t(),r(21,"li",13)(22,"strong"),u(23,"\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432:"),t(),u(24),f(25,"number"),t(),r(26,"li")(27,"strong"),u(28,"\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u0438\u0445 \u043A\u0440\u0435\u0434\u0438\u0442\u0456\u0432:"),t(),u(29),t()()()()()),o&2){let e=i.$implicit,n=p(2);a(4),b(e),a(6),s(" ",n.monthlyStats()[e].totalCredits," "),a(4),s(" ",h(15,6,n.monthlyStats()[e].averageAmount,"1.2-2")," \u0433\u0440\u043D "),a(5),s(" ",h(20,9,n.monthlyStats()[e].totalAmount,"1.0-0")," \u0433\u0440\u043D "),a(5),s(" ",h(25,12,n.monthlyStats()[e].totalPercent,"1.0-0")," \u0433\u0440\u043D "),a(5),s(" ",n.monthlyStats()[e].totalReturned," ")}}function A(o,i){if(o&1&&(E(0),c(1,F,30,15,"div",7),v()),o&2){let e=p();a(),m("ngForOf",e.objectKeys(e.monthlyStats()))}}function k(o,i){if(o&1&&(r(0,"li",13),u(1),t()),o&2){let e=i.$implicit,n=i.index;a(),g(" ",n+1,". ",e," ")}}function T(o,i){if(o&1&&(r(0,"div",14)(1,"div",9)(2,"h5",10),u(3,"\u0422\u043E\u043F-10 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432"),t()(),r(4,"div",11)(5,"ul",12),c(6,k,2,2,"li",15),t()()()),o&2){let e=p();a(6),m("ngForOf",e.filteredTopUsers)}}var U=class o{constructor(i){this.creditsService=i}credits=[];monthlyStats=C({});topUsersByCredits=[];topUsersByPercent=[];topUsersByRatio=[];filteredTopUsers=[];showMainContent=!0;ngOnInit(){this.loadData()}loadData(){this.creditsService.getCredits().subscribe(i=>{this.credits=i,this.calculateStats()})}calculateStats(){let{stats:i,topUsersByCredits:e,topUsersByPercent:n,topUsersByRatio:l}=this.creditsService.calculateStats(this.credits);this.monthlyStats.set(i),this.topUsersByCredits=e,this.topUsersByPercent=n,this.topUsersByRatio=l,this.filteredTopUsers=this.topUsersByCredits}filterStats(i){switch(this.showMainContent=!1,i){case"credits":this.filteredTopUsers=this.topUsersByCredits;break;case"percent":this.filteredTopUsers=this.topUsersByPercent;break;case"ratio":this.filteredTopUsers=this.topUsersByRatio;break;default:this.filteredTopUsers=this.topUsersByCredits;break}}resetFilter(){this.showMainContent=!0,this.filteredTopUsers=this.topUsersByCredits}objectKeys(i){return Object.keys(i)}static \u0275fac=function(e){return new(e||o)(_(D))};static \u0275cmp=S({type:o,selectors:[["app-short-information"]],decls:15,vars:2,consts:[[1,"container","py-4"],[1,"mb-4","text-center","fw-bold","text-dark"],[1,"mb-4"],["aria-label","\u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u043F\u043E \u043C\u0435\u0442\u0440\u0438\u043A\u0430\u043C",1,"d-flex","flex-wrap","gap-2","justify-content-center"],["type","button",1,"btn","btn-outline-dark",3,"click"],[4,"ngIf"],["class","card shadow-lg border-0 rounded-4 animate__animated animate__fadeInUp mt-4",4,"ngIf"],["class","mb-4",4,"ngFor","ngForOf"],[1,"card","shadow-lg","border-0","rounded-4","animate__animated","animate__fadeInUp"],[1,"card-header","bg-dark","text-white","rounded-top-4"],[1,"mb-0"],[1,"card-body","bg-light","rounded-bottom-4"],[1,"list-unstyled","mb-0"],[1,"mb-2"],[1,"card","shadow-lg","border-0","rounded-4","animate__animated","animate__fadeInUp","mt-4"],["class","mb-2",4,"ngFor","ngForOf"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"h2",1),u(2,"\u041A\u043E\u0440\u043E\u0442\u043A\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"),t(),r(3,"div",2)(4,"div",3)(5,"button",4),d("click",function(){return n.filterStats("credits")}),u(6," \u0422\u043E\u043F-10 \u043F\u043E \u043A\u0456\u043B\u044C\u043A\u043E\u0441\u0442\u0456 \u043A\u0440\u0435\u0434\u0438\u0442\u0456\u0432 "),t(),r(7,"button",4),d("click",function(){return n.filterStats("percent")}),u(8," \u0422\u043E\u043F-10 \u043F\u043E \u0441\u0443\u043C\u0456 \u0441\u043F\u043B\u0430\u0447\u0435\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 "),t(),r(9,"button",4),d("click",function(){return n.filterStats("ratio")}),u(10," \u0422\u043E\u043F-10 \u043F\u043E \u0441\u043F\u0456\u0432\u0432\u0456\u0434\u043D\u043E\u0448\u0435\u043D\u043D\u044E \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 \u0434\u043E \u0441\u0443\u043C\u0438 \u043A\u0440\u0435\u0434\u0438\u0442\u0443 "),t(),r(11,"button",4),d("click",function(){return n.resetFilter()}),u(12," \u041E\u0441\u043D\u043E\u0432\u043D\u0456 \u043C\u0435\u0442\u0440\u0438\u043A\u0438 "),t()()(),c(13,A,2,1,"ng-container",5)(14,T,7,1,"div",6),t()),e&2&&(a(13),m("ngIf",n.showMainContent),a(),m("ngIf",!n.showMainContent))},dependencies:[B,y,x,I],encapsulation:2})};export{U as ShortInformationComponent};
