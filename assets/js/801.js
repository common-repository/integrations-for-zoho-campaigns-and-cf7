"use strict";(self.webpackChunk_frm_in=self.webpackChunk_frm_in||[]).push([[801],{6327:(e,t,a)=>{a.r(t),a.d(t,{checkMappedFields:()=>c,handleInput:()=>l,listChange:()=>r,refreshContactFields:()=>f,refreshLists:()=>d,setGrantTokenResponse:()=>o});var n=a(8063),i=a(4222),s=a(3105),o=function(){var e={},t=window.location.href.replace(window.opener.location.href+"/redirect","").split("&");t&&t.forEach((function(t){var a=t.split("=");a[1]&&(e[a[0]]=a[1])})),localStorage.setItem("__zohoCampaigns",JSON.stringify(e)),window.close()},l=function(e,t,a,i,s,o){var l=(0,n.Z)({},a);if(l[e.target.name]=e.target.value,"list"===e.target.name)l=r(l,t,i,s,o);i((0,n.Z)({},l))},r=function(e,t,a,i,s){var o,l=(0,n.Z)({},e);return l.field_map=[{formField:"",zohoFormField:"Contact Email"}],null!=l&&null!=(o=l.default)&&null!=(o=o.fields)&&o[l.list]||f(t,l,a,i,s),l},d=function(e,t,a,o,l){o(!0);var r={formID:e,id:t.id,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,s.Z)(r,"zcampaigns_refresh_lists").then((function(e){if(e&&e.success){var s=(0,n.Z)({},t);e.data.lists&&(s.default=(0,n.Z)({},s.default,{lists:e.data.lists})),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),l({show:!0,msg:(0,i.__)("Lists refreshed","integration-for-zoho-campaigns-and-cf7")}),a((0,n.Z)({},s))}else e&&e.data&&e.data.data||!e.success&&"string"===typeof e.data?l({show:!0,msg:""+(0,i.__)("Lists refresh failed Cause:","integration-for-zoho-campaigns-and-cf7")+(e.data.data||e.data)+". "+(0,i.__)("please try again","integration-for-zoho-campaigns-and-cf7")}):l({show:!0,msg:(0,i.__)("Lists refresh failed. please try again","integration-for-zoho-campaigns-and-cf7")});o(!1)})).catch((function(){return o(!1)}))},f=function(e,t,a,o,l){var r=t.list;if(r){o(!0);var d={formID:e,list:r,dataCenter:t.dataCenter,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};(0,s.Z)(d,"zcampaigns_refresh_contact_fields").then((function(e){if(e&&e.success){var s=(0,n.Z)({},t);e.data.fields?(s.default.fields||(s.default.fields={}),s.default.fields[r]=e.data,e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),l({show:!0,msg:(0,i.__)("Contact Fields refreshed","integration-for-zoho-campaigns-and-cf7")})):l({show:!0,msg:(0,i.__)("Zoho didn't provide fields names for this list","integration-for-zoho-campaigns-and-cf7")}),e.data.tokenDetails&&(s.tokenDetails=e.data.tokenDetails),a((0,n.Z)({},s))}else l({show:!0,msg:(0,i.__)("Contact Fields refresh failed. please try again","integration-for-zoho-campaigns-and-cf7")});o(!1)})).catch((function(){return o(!1)}))}},c=function(e){return!((null!=e&&e.field_map?e.field_map.filter((function(t){var a;return!t.formField&&t.zohoFormField&&-1!==(null==e||null==(a=e.default)||null==(a=a.fields)||null==(a=a[e.list])?void 0:a.required.indexOf(t.zohoFormField))})):[]).length>0)}}}]);