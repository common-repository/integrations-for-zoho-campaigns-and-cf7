"use strict";(self.webpackChunk_frm_in=self.webpackChunk_frm_in||[]).push([[90,193,801],{4356:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(4637);function i(e){var t=e.size,n=void 0===t?14:t,i=e.stroke,s=void 0===i?3:i,o=e.className;return(0,a.jsx)("svg",{className:o,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 30 30",children:(0,a.jsx)("polyline",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:s,points:"26 15.2 4 15.2 12.38 23.69 4 15.2 12.77 6.31"})})}},9193:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(8063),i=n(9496),s=n(4222),o=n(9708),l=n(1675),c=n(5723),r=n(4637);function d(e){var t,n,d,f,m=e.step,h=e.saveConfig,u=e.edit,g=e.disabled,p=e.isLoading,x=e.dataConf,v=void 0===x?null:x,b=e.setDataConf,j=void 0===b?null:b,_=e.formFields,C=void 0===_?[]:_;(0,i.useEffect)((function(){if(v&&(null==v||!v.condition)){var e=(0,a.Z)({},v);e.condition={action_behavior:"",actions:[{field:"",action:"value"}],logics:[{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]},j(e)}}),[]);var N=function(e,t){var n=(0,a.Z)({},v);n.condition.action_behavior=t?e:"",j(n)};return(0,r.jsxs)("div",{children:[(null==v?void 0:v.condition)&&u&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"flx",children:(0,r.jsx)(c.Z,{onChange:function(e){return N(e.target.value,e.target.checked)},checked:"cond"===(null==v||null==(t=v.condition)?void 0:t.action_behavior),className:"wdt-200 mt-4 mr-2",value:"cond",title:(0,s.__)("Conditional Logics","integration-for-zoho-campaigns-and-cf7")})}),(0,r.jsx)("br",{}),"cond"===(null==v||null==(n=v.condition)?void 0:n.action_behavior)&&(0,r.jsx)(o.Z,{formFields:C,dataConf:v,setDataConf:j})]}),(null==v?void 0:v.condition)&&2===m&&!u&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"flx pl-2",children:(0,r.jsx)(c.Z,{onChange:function(e){return N(e.target.value,e.target.checked)},checked:"cond"===(null==v||null==(d=v.condition)?void 0:d.action_behavior),className:"wdt-200 mt-4 mr-2",value:"cond",title:(0,s.__)("Conditional Logics","integration-for-zoho-campaigns-and-cf7")})}),(0,r.jsx)("br",{}),"cond"===(null==v||null==(f=v.condition)?void 0:f.action_behavior)&&(0,r.jsx)(o.Z,{formFields:C,dataConf:v,setDataConf:j})]}),u?(0,r.jsx)("div",{className:"txt-center w-9 mt-3",children:(0,r.jsxs)("button",{onClick:h,className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:p||g,children:[(0,s.__)("Update"),p&&(0,r.jsx)(l.Z,{size:20,clr:"#022217",className:"ml-2"})]})}):(0,r.jsxs)("div",{className:"btcd-stp-page txt-center",style:{width:3===m&&"100%",height:3===m&&"auto"},children:[(0,r.jsx)("h2",{className:"ml-3",children:(0,s.__)("Successfully Integrated")}),(0,r.jsxs)("button",{onClick:h,className:"btn btcd-btn-lg green sh-sm",type:"button",disabled:p,children:[(0,s.__)("Finish & Save "),"✔",p&&(0,r.jsx)(l.Z,{size:20,clr:"#022217",className:"ml-2"})]})]})]})}},5090:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(9496),i=(n(2120),n(3442)),s=n(4356),o=n(4222),l=n(1890),c=n(4637);const r=function(e){var t=e.step,n=e.active,i=e.className;return(0,c.jsx)("div",{className:"d-in-b "+i,children:(0,c.jsxs)("div",{className:"flx flx-center",children:[Array(n).fill(0).map((function(e,t){return(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)("div",{className:"btcd-stp flx flx-center stp-a  txt-center",children:t+1}),n-1!==t&&(0,c.jsx)("div",{className:"btcd-stp-line stp-line-a"})]},"stp-"+(t+21))})),t-n!==0&&(0,c.jsx)("div",{className:"btcd-stp-line"}),Array(t-n).fill(0).map((function(e,i){return(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)("div",{className:"btcd-stp flx flx-center txt-center",children:i+n+1}),t-n-1!==i&&(0,c.jsx)("div",{className:"btcd-stp-line "})]},"stp-"+(i+23))}))]})})};var d=n(5672),f=n(9193),m=n(5210),h=n(6327),u=n(7498);const g=function(e){var t=e.formFields,n=e.setFlow,g=e.flow,p=e.allIntegURL,x=(0,i.k6)(),v=(0,i.UO)().formID,b=(0,a.useState)(!1),j=b[0],_=b[1],C=(0,a.useState)(1),N=C[0],z=C[1],k=(0,a.useState)({show:!1}),w=k[0],y=k[1],F=(0,a.useState)({name:"Zoho Campaigns",type:"Zoho Campaigns",clientId:"",clientSecret:"",list:"",field_map:[{formField:"",zohoFormField:""}]}),I=F[0],Z=F[1];return(0,a.useEffect)((function(){window.opener&&(0,d.setGrantTokenResponse)("zohoCampaigns")}),[]),(0,c.jsxs)("div",{children:[(0,c.jsx)(l.Z,{snack:w,setSnackbar:y}),(0,c.jsx)("div",{className:"txt-center mt-2",children:(0,c.jsx)(r,{step:3,active:N})}),(0,c.jsx)(m.default,{formID:v,campaignsConf:I,setCampaignsConf:Z,step:N,setstep:z,isLoading:j,setIsLoading:_,setSnackbar:y}),(0,c.jsxs)("div",{className:"btcd-stp-page",style:{width:2===N&&900,height:2===N&&"auto"},children:[(0,c.jsx)(u.default,{formID:v,formFields:t,handleInput:function(e){return(0,h.handleInput)(e,v,I,Z,_,y)},campaignsConf:I,setCampaignsConf:Z,isLoading:j,setIsLoading:_,setSnackbar:y}),(0,c.jsxs)("button",{onClick:function(){return setTimeout((function(){document.getElementById("btcd-settings-wrp").scrollTop=0}),300),void((0,h.checkMappedFields)(I)?""!==I.list&&""!==I.table&&I.field_map.length>0&&z(3):y({show:!0,msg:(0,o.__)("Please map mandatory fields","integration-for-zoho-campaigns-and-cf7")}))},disabled:""===I.list||""===I.table||I.field_map.length<1,className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",children:[(0,o.__)("Next","integration-for-zoho-campaigns-and-cf7"),(0,c.jsx)(s.Z,{className:"ml-1 rev-icn"})]})]}),(0,c.jsx)(f.default,{step:N,saveConfig:function(){return(0,d.saveIntegConfig)(g,n,p,I,x,"","",_)},isLoading:j,dataConf:I,setDataConf:Z,formFields:t})]})}},5210:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(8063),i=n(9496),s=n(9892),o=n(4222),l=n(7464),c=n(1675),r=n(6327),d=n(4356),f=n(3681),m=n(5672),h=n(4637);function u(e){var t=e.formID,n=e.campaignsConf,u=e.setCampaignsConf,g=e.step,p=e.setstep,x=e.isLoading,v=e.setIsLoading,b=e.setSnackbar,j=e.redirectLocation,_=e.isInfo,C=(0,i.useState)(!1),N=C[0],z=C[1],k=(0,i.useState)({dataCenter:"",clientId:"",clientSecret:""}),w=k[0],y=k[1],F=(0,s.sJ)(f.qn),I=function(e){var t=(0,a.Z)({},n),i=(0,a.Z)({},w);i[e.target.name]="",t[e.target.name]=e.target.value,y(i),u(t)};return(0,h.jsxs)("div",{className:"btcd-stp-page",style:(0,a.Z)({},{width:1===g&&900},{height:1===g&&"auto"}),children:[(0,h.jsx)("div",{className:"mt-3",children:(0,h.jsx)("b",{children:(0,o.__)("Integration Name:","integration-for-zoho-campaigns-and-cf7")})}),(0,h.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:I,name:"name",value:n.name,type:"text",placeholder:(0,o.__)("Integration Name...","integration-for-zoho-campaigns-and-cf7"),disabled:_}),(0,h.jsx)("div",{className:"mt-3",children:(0,h.jsx)("b",{children:(0,o.__)("Data Center:","integration-for-zoho-campaigns-and-cf7")})}),(0,h.jsxs)("select",{onChange:I,name:"dataCenter",value:n.dataCenter,className:"btcd-paper-inp w-6 mt-1",disabled:_,children:[(0,h.jsx)("option",{value:"",children:(0,o.__)("--Select a data center--","integration-for-zoho-campaigns-and-cf7")}),(0,h.jsx)("option",{value:"com",children:"zoho.com"}),(0,h.jsx)("option",{value:"eu",children:"zoho.eu"}),(0,h.jsx)("option",{value:"com.cn",children:"zoho.com.cn"}),(0,h.jsx)("option",{value:"in",children:"zoho.in"}),(0,h.jsx)("option",{value:"com.au",children:"zoho.com.au"})]}),(0,h.jsx)("div",{style:{color:"red"},children:w.dataCenter}),(0,h.jsx)("div",{className:"mt-3",children:(0,h.jsx)("b",{children:(0,o.__)("Homepage URL:","integration-for-zoho-campaigns-and-cf7")})}),(0,h.jsx)(l.Z,{value:""+window.location.origin,className:"field-key-cpy w-6 ml-0",setSnackbar:b,readOnly:_}),(0,h.jsx)("div",{className:"mt-3",children:(0,h.jsx)("b",{children:(0,o.__)("Authorized Redirect URIs:","integration-for-zoho-campaigns-and-cf7")})}),(0,h.jsx)(l.Z,{value:j||F.api.base+"/redirect",className:"field-key-cpy w-6 ml-0",setSnackbar:b,readOnly:_}),(0,h.jsxs)("small",{className:"d-blk mt-5",children:[(0,o.__)("To get Client ID and SECRET , Please Visit","integration-for-zoho-campaigns-and-cf7")," ",(0,h.jsx)("a",{className:"btcd-link",href:"https://api-console.zoho."+((null==n?void 0:n.dataCenter)||"com")+"/",target:"_blank",rel:"noreferrer",children:(0,o.__)("Zoho API Console","integration-for-zoho-campaigns-and-cf7")})]}),(0,h.jsx)("div",{className:"mt-3",children:(0,h.jsx)("b",{children:(0,o.__)("Client id:","integration-for-zoho-campaigns-and-cf7")})}),(0,h.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:I,name:"clientId",value:n.clientId,type:"text",placeholder:(0,o.__)("Client id...","integration-for-zoho-campaigns-and-cf7"),disabled:_}),(0,h.jsx)("div",{style:{color:"red"},children:w.clientId}),(0,h.jsx)("div",{className:"mt-3",children:(0,h.jsx)("b",{children:(0,o.__)("Client secret:","integration-for-zoho-campaigns-and-cf7")})}),(0,h.jsx)("input",{className:"btcd-paper-inp w-6 mt-1",onChange:I,name:"clientSecret",value:n.clientSecret,type:"text",placeholder:(0,o.__)("Client secret...","integration-for-zoho-campaigns-and-cf7"),disabled:_}),(0,h.jsx)("div",{style:{color:"red"},children:w.clientSecret}),!_&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("button",{onClick:function(){return(0,m.handleAuthorize)("zohoCampaigns","zcampaigns","ZohoCampaigns.contact.READ,ZohoCampaigns.contact.CREATE,ZohoCampaigns.contact.UPDATE",n,u,y,z,v,b,F)},className:"btn btcd-btn-lg green sh-sm flx",type:"button",disabled:N||x,children:[N?(0,o.__)("Authorized ✔","integration-for-zoho-campaigns-and-cf7"):(0,o.__)("Authorize","integration-for-zoho-campaigns-and-cf7"),x&&(0,h.jsx)(c.Z,{size:20,clr:"#022217",className:"ml-2"})]}),(0,h.jsx)("br",{}),(0,h.jsxs)("button",{onClick:function(){setTimeout((function(){document.getElementById("btcd-settings-wrp").scrollTop=0}),300),p(2),(0,r.refreshLists)(t,n,u,v,b)},className:"btn f-right btcd-btn-lg green sh-sm flx",type:"button",disabled:!N,children:[(0,o.__)("Next","integration-for-zoho-campaigns-and-cf7"),(0,h.jsx)(d.Z,{className:"ml-1 rev-icn"})]})]})]})}},6327:(e,t,n)=>{n.r(t),n.d(t,{checkMappedFields:()=>f,handleInput:()=>l,listChange:()=>c,refreshContactFields:()=>d,refreshLists:()=>r,setGrantTokenResponse:()=>o});var a=n(8063),i=n(4222),s=n(3105),o=function(){var e={},t=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");t&&t.forEach((function(t){var n=t.split("=");n[1]&&(e[n[0]]=n[1])})),localStorage.setItem("__zohoCampaigns",JSON.stringify(e)),window.close()},l=function(e,t,n,i,s,o){var l=(0,a.Z)({},n);if(l[e.target.name]=e.target.value,"list"===e.target.name)l=c(l,t,i,s,o);i((0,a.Z)({},l))},c=function(e,t,n,i,s){var o,l=(0,a.Z)({},e);return l.field_map=[{formField:"",zohoFormField:"Contact Email"}],null!=l&&null!=(o=l.default)&&null!=(o=o.fields)&&o[l.list]||d(t,l,n,i,s),l},r=function(e,t,n,o,l){o(!0);var c={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,s.Z)(c,"zcampaigns_refresh_lists").then((function(e){if(e&&e.success){var s=(0,a.Z)({},t);e.data.lists&&(s.default=(0,a.Z)({},s.default,{lists:e.data.lists})),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),l({show:!0,msg:(0,i.__)("Lists refreshed","integration-for-zoho-campaigns-and-cf7")}),n((0,a.Z)({},s))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?l({show:!0,msg:""+(0,i.__)("Lists refresh failed Cause:","integration-for-zoho-campaigns-and-cf7")+(e.data.data||e.data)+". "+(0,i.__)("please try again","integration-for-zoho-campaigns-and-cf7")}):l({show:!0,msg:(0,i.__)("Lists refresh failed. please try again","integration-for-zoho-campaigns-and-cf7")});o(!1)})).catch((function(){return o(!1)}))},d=function(e,t,n,o,l){var c=t.list;if(c){o(!0);var r={formID:e,list:c,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,s.Z)(r,"zcampaigns_refresh_contact_fields").then((function(e){if(e&&e.success){var s=(0,a.Z)({},t);e.data.fields?(s.default.fields||(s.default.fields={}),s.default.fields[c]=e.data,e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),l({show:!0,msg:(0,i.__)("Contact Fields refreshed","integration-for-zoho-campaigns-and-cf7")})):l({show:!0,msg:(0,i.__)("Zoho didn't provide fields names for this list","integration-for-zoho-campaigns-and-cf7")}),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),n((0,a.Z)({},s))}else l({show:!0,msg:(0,i.__)("Contact Fields refresh failed. please try again","integration-for-zoho-campaigns-and-cf7")});o(!1)})).catch((function(){return o(!1)}))}},f=function(e){return!((null!=e&&e.field_map?e.field_map.filter((function(t){var n;return!t.formField&&t.zohoFormField&&-1!==(null==e||null==(n=e.default)||null==(n=n.fields)||null==(n=n[e.list])?void 0:n.required.indexOf(t.zohoFormField))})):[]).length>0)}},7498:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(4222),i=n(9615),s=n(6327),o=n(4937),l=n(4637);function c(e){var t,n,c=e.formID,r=e.formFields,d=e.handleInput,f=e.campaignsConf,m=e.setCampaignsConf,h=e.isLoading,u=e.setIsLoading,g=e.setSnackbar;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("br",{}),(0,l.jsx)("b",{className:"wdt-100 d-in-b",children:(0,a.__)("List:","integration-for-zoho-campaigns-and-cf7")}),(0,l.jsxs)("select",{onChange:function(e){return d(e)},name:"list",value:f.list,className:"btcd-paper-inp w-7",children:[(0,l.jsx)("option",{value:"",children:(0,a.__)("Select List","integration-for-zoho-campaigns-and-cf7")}),(null==f||null==(t=f.default)?void 0:t.lists)&&Object.values(f.default.lists).map((function(e){return(0,l.jsx)("option",{value:e.listkey,children:e.listname},e.listkey)}))]}),(0,l.jsx)("button",{onClick:function(){return(0,s.refreshLists)(c,f,m,u,g)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,a.__)("Refresh Campaigns Lists","integration-for-zoho-campaigns-and-cf7")+"'"},type:"button",disabled:h,children:"↻"}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),h&&(0,l.jsx)(i.default,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),f.list&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)("b",{className:"wdt-100",children:(0,a.__)("Map Fields","integration-for-zoho-campaigns-and-cf7")}),(0,l.jsx)("button",{onClick:function(){return(0,s.refreshContactFields)(c,f,m,u,g)},className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":"'"+(0,a.__)("Refresh Campaigns Contact Fields","integration-for-zoho-campaigns-and-cf7")+"'"},type:"button",disabled:h,children:"↻"})]}),(0,l.jsx)("div",{className:"btcd-hr mt-1"}),(null==(n=f.default)||null==(n=n.fields)?void 0:n[f.list])&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flx flx-around mt-2 mb-2 fitzocacf-field-map-label",children:[(0,l.jsx)("div",{className:"txt-dp",children:(0,l.jsx)("b",{children:(0,a.__)("Form Fields","integration-for-zoho-campaigns-and-cf7")})}),(0,l.jsx)("div",{className:"txt-dp",children:(0,l.jsx)("b",{children:(0,a.__)("Zoho Fields","integration-for-zoho-campaigns-and-cf7")})})]}),f.field_map.map((function(e,t){return(0,l.jsx)(o.default,{i:t,field:e,campaignsConf:f,formFields:r,setCampaignsConf:m},"campaigns-m-"+(t+9))}))]})]})]})}}}]);