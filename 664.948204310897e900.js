"use strict";(self.webpackChunkbierrallye_frontend=self.webpackChunkbierrallye_frontend||[]).push([[664],{8664:(I,l,o)=>{o.r(l),o.d(l,{LoginComponent:()=>F});var f=o(4755),r=o(9401),c=o(1728),u=o(9114),m=o(8097),s=(()=>((s=s||{}).ADMIN="ADMIN",s.USER="USER",s.EMPLOYEE="EMPLOYEE",s))(),g=o(3900),t=o(2223),v=o(5045),p=o(3144);let y=(()=>{class n{constructor(e){this.http=e}authenticate(e){return this.http.post(v.M+"authenticate",e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(p.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var E=o(2018),h=o(9155),L=o(5846),S=o(7621);let F=(()=>{class n{constructor(e,i,d,U,A,C){this.authService=e,this.toastr=i,this.router=d,this.tokenService=U,this.userService=A,this.route=C,this.loginForm=new r.cw({username:new r.NI("",{validators:[r.kI.required]}),password:new r.NI("",{validators:[r.kI.required]})})}ngOnInit(){this.route.queryParams.subscribe(e=>{this.loginForm.controls.username.patchValue(e.username),this.loginForm.controls.password.patchValue(e.uuid)})}ngOnDestroy(){this.sub?.unsubscribe()}authenticate(){this.sub=this.authService.authenticate(this.loginForm.getRawValue()).pipe((0,g.w)(e=>(this.tokenService.storeToken(e.token),this.userService.loginUser(),this.userService.user))).subscribe(e=>{if(e?.role){const i=this.getRouteByRole(e?.role);console.log(i),this.router.navigate([i]),this.toastr.success("Login erfolgreich","Erfolgreich")}},e=>{this.toastr.error("Username/Passwort falsch","Fehler")})}getRouteByRole(e){switch(e){case s.ADMIN:return"/onboarding";case s.USER:return"/race";case s.EMPLOYEE:return"/penalty";default:return"/"}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(y),t.Y36(E._W),t.Y36(h.F0),t.Y36(L.B),t.Y36(S.K),t.Y36(h.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],standalone:!0,features:[t.jDz],decls:12,vars:2,consts:[[3,"formGroup"],[1,"form-container"],["formControlName","username","id","username","matInput",""],["type","password","formControlName","password","id","password","matInput",""],["color","primary","mat-raised-button","","type","submit",3,"disabled","click"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"mat-form-field")(3,"mat-label"),t._uU(4,"Username"),t.qZA(),t._UZ(5,"input",2),t.qZA(),t.TgZ(6,"mat-form-field")(7,"mat-label"),t._uU(8,"Passwort"),t.qZA(),t._UZ(9,"input",3),t.qZA(),t.TgZ(10,"button",4),t.NdJ("click",function(){return i.authenticate()}),t._uU(11," Login "),t.qZA()()()),2&e&&(t.Q6J("formGroup",i.loginForm),t.xp6(10),t.Q6J("disabled",!i.loginForm.valid))},dependencies:[f.ez,r.u5,r._Y,r.Fj,r.JJ,r.JL,c.ot,c.lW,u.lN,u.KE,u.hX,m.c,m.Nt,r.UX,r.sg,r.u],styles:[".form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:#fdf1cd;padding:15px}"]}),n})()}}]);