(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[92782],{50109:(e,t,n)=>{"use strict";n.r(t);var o=n(26722),i=n(45848),a=n(86674),r=n(72694),s=(n(55091),n(95935)),c=n(66974),d=n(49437),l=n(11905);const u=(0,l.getLogger)("Common.Evercookie");const g=(0,l.getLogger)("Common.Evercookie"),w=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;class f{constructor(){this._cookieName="tv_ecuid",this._env=null,this._ec=null,this.check=()=>{if(this._isEcNotAvailable()||d.TVLocalStorage.getItem("_tv_ec_ignore_username")===window.user.username)return;const e=window.user.id;this._getEcUids().catch(e=>{g.logWarn(`Error thrown inside getEcUids(). Leave evercookie data untouched. User: ${window.user.username} (${window.user.id})\nActual error: ${e}`)}).then(t=>{if(void 0===t)return void g.logWarn(`getEcUids() returned no data. Leave evercookie data untouched. User: ${window.user.username} (${window.user.id})`);let o=t.localEcUid;const i=t.remoteEcUids;o&&w.test(o)||(o=(0,s.guid)(),this._getEc().set(this._cookieName,o));const r=t=>{t.subscription_canceled&&Promise.all([n.e(82888),n.e(48463),n.e(18844),n.e(39961),n.e(10262),n.e(87995),n.e(18932)]).then(n.bind(n,38394)).then(e=>e.createTrialCanceledDialog()),e===window.user.id&&t.is_suspicious?d.TVLocalStorage.setItem("is_suspicious","1"):d.TVLocalStorage.removeItem("is_suspicious")};i&&0!==i.length&&-1!==i.indexOf(o)||e!==window.user.id||function(e){const t=new FormData;return t.append("ecuid",e),(0,a.fetch)("/accounts/set-ecuid/",{body:t,credentials:"include",method:"POST"}).then(e=>{if(e.ok)return e.json().catch(e=>{u.logWarn(`Error in reponse.json() of /accounts/set-ecuid/. User: ${window.user.username} (${window.user.id})\nActual error: ${e}`)});throw new Error("Unable to set remote ecuids. Response was not OK")})}(o).then(r)}).catch(e=>{g.logError(e.message+` User: ${window.user.username} (${window.user.id})`)})},this._isEcNotAvailable()||(this._env=(0,c.environment)(),(0,c.isDebug)()&&(this._cookieName+="_"+this._env))}_isEcNotAvailable(){return TradingView.onWidget&&TradingView.onWidget()||!window.user}_getEc(){return this._ec||(this._ec=new window.evercookie({domain:(0,c.isProd)()?".tradingview.com":location.hostname,lso:!1})),this._ec}_getLocalEcUid(){return new Promise(e=>{this._getEc().get(this._cookieName,t=>{e(t)})})}_getEcUids(){return new Promise((e,t)=>{let n;this._getLocalEcUid().then(e=>(n=e,function(e){return new Promise((t,n)=>{const o=new FormData;e&&o.append("local_ecuid",e),(0,a.fetch)("/accounts/get-ecuid/",{body:o,credentials:"include",method:"POST"}).then(e=>{if(e.ok)return e.json().catch(e=>{u.logWarn(`Error in reponse.json() of /accounts/get-ecuid/. User: ${window.user.username} (${window.user.id})\nActual error: ${e}`)});throw new Error("Unable to get remote ecuids. Response was not OK")}).then(e=>{t(e)}).catch(e=>{n(e)})})}(e))).then(t=>{if(void 0===t)throw new Error(`getRemoteEcUids() returned no response. User: ${window.user.username} (${window.user.id})`);e({localEcUid:n,remoteEcUids:t.ecuids})
}).catch(e=>{t(e)})})}}n(23127);var h=n(87236),v=n(32317),m=n(46279),p=n(33255),_=n(25226),y=n(81865),S=n(23127);S("body").on("click",".js-follow-user",(function(e){const t=S(e.currentTarget),o=t.data("id"),i=t.is(".js-follow-user--followed")?"Unfollow":"Follow",a={authorId:o};window.runOrSignIn(async()=>{if(!t.is(".self")){const e=t.is(".js-follow-user--followed")?0:1;(await Promise.all([n.e(53680),n.e(57853)]).then(n.bind(n,42941))).protectedFetch("/social/follow-the-user/",{follow:e,targetId:o},"follow").then(e=>{"max_followings_exceed"!==e.error_code?e.error?(0,p.showNoticeDialog)({content:e.error,title:e.errorTitle||(0,h.t)("Error")}):(S(".js-follow-user-"+o).toggleClass("js-follow-user--followed").toggleClass("i-checked"),(0,v.trackActionFollow)("User",i,a)):Promise.all([n.e(31205),n.e(16061),n.e(23450),n.e(84575),n.e(80509),n.e(66708),n.e(25977),n.e(86297),n.e(93682),n.e(34834)]).then(n.bind(n,82649)).then(({createDialog:e})=>{const t=e({type:"modal",closeOnEsc:!1,closeOnOutsideClick:!1,closeButton:!1,width:546,contentWrapTemplate:'\n\t\t\t\t\t\t\t\t\t\t<div class="tv-dialog__section tv-dialog__section--no-border">\n\t\t\t\t\t\t\t\t\t\t\t<div class="tv-text"></div>\n\t\t\t\t\t\t\t\t\t\t</div>',content:`\n\t\t\t\t\t\t\t\t\t\t<div class="tv-dialog__header">\n\t\t\t\t\t\t\t\t\t\t\t<div class="tv-dialog__header-logo">${y}</div>\n\t\t\t\t\t\t\t\t\t\t\t<h2 class="tv-dialog__header-title">${(0,h.t)("Unfollow some authors")}</h2>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<p class="tv-text__font tv-text__font--size_semilarge">\n\t\t\t\t\t\t\t\t\t\t\t\t${(0,h.t)("Sorry, follow limit reached and you cannot follow more authors without removing some first.")}\n\t\t\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t\t</div>`,actions:[{name:"goToProfile",type:"primary",text:(0,h.t)("Go to Profile"),key:13},{addClass:"tv-button--no-padding i-float_left",name:"cancel",type:"link",text:(0,h.t)("No thanks"),method:"close"}]});t.on("action:goToProfile",e=>{window.location.replace((0,m.getUserProfilePath)(window.user,{page:m.ProfilePages.FollowingPeople})),e.destroy()}),t.open()})}).catch(e=>{(0,p.showNoticeDialog)({content:e.message,title:(0,h.t)("Oops!")})})}},{source:"Follow user",verifiedPhoneRequired:!(0,_.isFeatureEnabled)("disable_phone_verification_sms")})}));var b=n(68919);document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("click",e=>{const t=e.target.closest(".js-profile-message");t instanceof HTMLElement&&(e.preventDefault(),function(e){const t=Number(e.dataset.id),n=e.dataset.username;window.runOrSignIn(()=>(0,b.openPMDialog)(t,n),{source:"Private message from broker popup",verifiedPhoneRequired:!0})}(t))})});var E=n(31039),T=n(38456),k=n(14802),C=(n(50532),n(97639)),P=n.n(C),V=n(98796),A=n(77748);n(23127)(document).ajaxSend((e,t,n)=>{n.crossDomain&&!n.forceLanguageHeader||(window.locale?t.setRequestHeader("X-Language",window.locale):console.warn("window.locale is not defined"))});var D=n(73286);var O=n(14520),N=n(41261),L=n(65343);let I,M;function U(){
if(window.initData.lfs){const e=document.getElementsByClassName("js-admin-warning")[0];document.body.removeChild(e)}let e=!0;[/^\/chart\//,/^\/share-your-love\//].forEach(t=>{t.test(window.location.pathname)&&(e=!1)}),e&&window.location.reload()}function R(e,t){window.TVDialogs&&window.TVDialogs.signModal&&window.TVDialogs.signModal.close(),window.user=(0,V.deepExtend)({},e),window.TradingView.changeLoginState(!0),"function"==typeof t&&window.TVDialogs&&window.TVDialogs.signModal?window.TVDialogs.signModal.on("signinSuccess",()=>{t()}):"function"==typeof t&&t()}function F(e){window.iframeAuthWidget&&!1===window.user.profile_data_filled&&(window.iframeAuthWidget.preventClose=!0);const t=window.user.available_offers||{};{const e=document.documentElement;e.classList.toggle("is-authenticated",window.is_authenticated),e.classList.toggle("is-not-authenticated",!window.is_authenticated)}window.TVSettings&&window.TVSettings.sync(window.user.settings),window.is_authenticated?(e&&!1!==window.user.profile_data_filled||void 0===M||M.check(),e||(Promise.all([n.e(87995),n.e(19158)]).then(n.bind(n,44139)).then(e=>e.offerButtonLoginStateChangeInit()),(0,T.onGoPro)()&&window.user.is_pro&&window.location.reload()),!1===window.user.profile_data_filled&&((0,T.checkPageType)("mobile")||(0,k.isOnMobileAppPage)("any")||(0,A.whenDocumentReady)(()=>{(0,E.showSignModal)({mode:"create-account",noCloseButton:!!window.user.social_registration,dontCloseOnEsc:!!window.user.social_registration,nameFields:!window.user.social_registration,noUsernameField:!window.user.social_registration}).then(e=>{window.iframeAuthWidget&&(window.iframeAuthWidget.preventClose=!1,e.on("destroy",()=>{window.iframeAuthWidget.postClose()}))}),window.user.social_registration?(n.e(22947).then(n.bind(n,90677)).then(({default:e})=>{e("Social")}),(0,N.trackGTagAdsEvent)(N.GTagEvent.RegistrationCompleted),(0,L.trackTwitterEvent)(L.TwitterEvent.RegistrationCompleted),delete window.user.social_registration):o.TVXWindowEvents.emit("loginStateChange",JSON.stringify({is_authenticated:window.is_authenticated,user:window.user}))},!0),(0,i.trackEvent)("Conversion","First login"),delete window.user.profile_data_filled),window.TradingView.setTrialAvailiable(void 0!==t[r.OFFERS.trial])):(Object.keys(t).forEach(e=>{const n=e;t[n].available_for_anons||delete t[n]}),window.user={username:"Guest",following:"0",followers:"0",ignore_list:[],available_offers:t},d.TVLocalStorage.removeItem("trial_availiable"))}I=window.loginStateChange?window.loginStateChange:window.loginStateChange=new(P()),I.subscribe(null,F),o.TVXWindowEvents.on("loginStateChange",e=>{const t=JSON.parse(e);window.user=t.user,window.is_authenticated=!!t.is_authenticated,I.fire()}),o.TVXWindowEvents.on("signOut",()=>{U()}),(()=>{const e={};window.crossTabSyncUserAttr=e=>{const t={};e instanceof Array?e.forEach(e=>{t[e]=window.user[e]}):t[e]=window.user[e],o.TVXWindowEvents.emit("user-obj-changed",JSON.stringify(t))},o.TVXWindowEvents.on("user-obj-changed",t=>{const n=JSON.parse(t);let o;for(o in n)if(n.hasOwnProperty(o)){
window.user[o]=n[o];(e[o]||[]).forEach(e=>{e.fire(n[o])})}})})(),window.TradingView.changeLoginState=e=>{window.is_authenticated=!!e,o.TVXWindowEvents.emit("loginStateChange",JSON.stringify({is_authenticated:window.is_authenticated,user:window.user})),I.fire()},window.loginUser=R,window.addEventListener("storage",e=>{"login_user"===e.key&&null!==e.newValue&&R(JSON.parse(e.newValue))}),window.TradingView.signOut=()=>{const e={...window.user};(0,a.fetch)("/accounts/logout/",{method:"POST",headers:{accept:"html"},credentials:"same-origin"}).then(()=>{window.TradingView.changeLoginState(!1),o.TVXWindowEvents.emit("signOut"),U()}).catch(()=>{window.user=e,window.TradingView.changeLoginState(!0)})},M=new f,window.loginRequiredDelegate=new(P()),window.runOrSignIn=(e,t)=>{t||(t={});const n=[];if(t.paidAccountCheck&&n.push(()=>(0,O.paidAccountCheck)({successButtonText:t.paidAccountSuccessButtonText})),t.verifiedPhoneRequired){const e=()=>Promise.resolve((0,D.whenVerified)({showDialog:!0,source:t.source,doNotCheckSuspicious:t.doNotCheckSuspicious,doNotCheckSocialActivity:t.doNotCheckSocialActivity,customPhoneCheck:t.customPhoneCheck,doNotShowConfirmation:t.doNotShowConfirmation}));n.push(e)}window.is_authenticated?n.reduce((e,t)=>e.then(t),Promise.resolve()).then(e).catch(()=>{}):(0,E.showSignModal)({source:t.source,sourceMeta:t.sourceMeta,feature:t.feature,mode:t.mode,signinSuccess:e,startTrial:t.startTrial})},window.onLoginStateChange=F,window.TradingView.setTrialAvailiable=e=>{d.TVLocalStorage.setItem("trial_availiable",e?"1":"0")},window.TradingView.notificationsChanged=new(P())},31493:(e,t,n)=>{"use strict";function o(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}n.d(t,{regExpEscape:()=>o})},72694:(e,t,n)=>{"use strict";n.d(t,{OFFERS:()=>o,OfferKind:()=>i,LastChanceType:()=>a});const o={trial:"trial",early_access:"early_access",black_friday:"black_friday",cyber_monday:"cyber_monday",custom_discount:"custom_discount",longer_cycle:"longer_cycle",upgrade:"upgrade",last_chance:"last_chance",one_usd:"one_usd",six_months:"six_months"},i={early_access:"early_access",black_friday:"black_friday",last_chance:"last_chance",one_usd:"1 usd offer",six_months:"six_months",custom_discount:"custom_discount"};var a;!function(e){e.TwoWeeks="LastChance_2w",e.TwoDays="LastChance_2d",e.Hours="LastChance_24h"}(a||(a={}))},33255:(e,t,n)=>{"use strict";n.r(t),n.d(t,{createNoticeDialog:()=>a,showNoticeDialog:()=>r});var o=n(87236);const i={width:400,destroyOnClose:!0,title:(0,o.t)("Notification"),content:(0,o.t)("You are notified"),contentWrapTemplate:'<div class="tv-dialog__section tv-dialog__section--no-border"><div class="tv-text"><p></p></div></div>',actionsWrapTemplate:'<div class="tv-dialog__section tv-dialog__section--actions tv-dialog__section--no-border">',actions:[{name:"ok",type:"primary",text:(0,o.t)("Ok"),method:"close",key:[13,32]}]};async function a(e){return(await Promise.all([n.e(31205),n.e(16061),n.e(23450),n.e(84575),n.e(80509),n.e(66708),n.e(25977),n.e(86297),n.e(93682),n.e(34834)]).then(n.bind(n,82649))).createDialog({
...i,...e})}function r(e){a(e).then(e=>e.open())}},68919:(e,t,n)=>{"use strict";function o(){return Promise.all([n.e(31205),n.e(16061),n.e(23450),n.e(84575),n.e(80509),n.e(66708),n.e(24555),n.e(10108),n.e(6096),n.e(23359),n.e(5708),n.e(29814),n.e(31924),n.e(37238),n.e(88307),n.e(60777),n.e(25634),n.e(87995),n.e(86746),n.e(25977),n.e(24951),n.e(20651),n.e(69052),n.e(45807),n.e(86297),n.e(93682),n.e(1867),n.e(26612),n.e(1912),n.e(24025)]).then(n.t.bind(n,27802,19))}function i(e,t,n){o().then(o=>o.noteForAuthor(e,t,n))}function a(e,t,n){o().then(o=>o.openPMDialog(e,t,n))}function r(){o().then(e=>e.newPrivateChatDialog())}n.d(t,{noteForAuthor:()=>i,openPMDialog:()=>a,newPrivateChatDialog:()=>r})},31039:(e,t,n)=>{"use strict";n.r(t),n.d(t,{showSignModal:()=>i,isSignModalOpen:()=>a});let o=()=>!1;async function i(e){if(window.TVD&&window.TVD.signIn)return window.TVD.signIn(e);{const t=await Promise.all([n.e(31205),n.e(16061),n.e(23450),n.e(84575),n.e(80509),n.e(5708),n.e(53680),n.e(36336),n.e(95429),n.e(9956),n.e(24377),n.e(25977),n.e(35189),n.e(35582),n.e(36123)]).then(n.bind(n,478));return o=t.isSignModalOpen,t.showSignModal(e)}}function a(){return o()}},19161:(e,t,n)=>{"use strict";async function o(e){return(await Promise.all([n.e(48463),n.e(25113),n.e(31205),n.e(15998),n.e(16061),n.e(23450),n.e(69875),n.e(84575),n.e(8879),n.e(80509),n.e(66333),n.e(18844),n.e(93713),n.e(3848),n.e(17662),n.e(69565),n.e(51891),n.e(28138),n.e(87995),n.e(24377),n.e(25977),n.e(11867),n.e(78549),n.e(85518),n.e(42353),n.e(5324),n.e(68606)]).then(n.bind(n,56049))).createPhoneDialog(e)}async function i(e){return(await Promise.all([n.e(48463),n.e(25113),n.e(31205),n.e(15998),n.e(16061),n.e(23450),n.e(69875),n.e(84575),n.e(8879),n.e(80509),n.e(66333),n.e(18844),n.e(93713),n.e(3848),n.e(17662),n.e(69565),n.e(51891),n.e(28138),n.e(87995),n.e(24377),n.e(25977),n.e(11867),n.e(78549),n.e(85518),n.e(42353),n.e(5324),n.e(68606)]).then(n.bind(n,56049))).createEmailDialog(e)}n.d(t,{createPhoneDialog:()=>o,createSMSEmailDialog:()=>i})},14520:(e,t,n)=>{"use strict";n.d(t,{paidAccountCheck:()=>a});var o=n(49437);const i=(0,n(11905).getLogger)("PaidAccountCheck");async function a(e){const t=window.user,a=o.TVLocalStorage.getItem("previous_username");if(t&&window.is_authenticated&&!t.is_pro&&a){const[{getProfile:t},{showWrongAccountDialog:o}]=await Promise.all([n.e(90254).then(n.bind(n,50305)),Promise.all([n.e(540),n.e(24377),n.e(12019)]).then(n.bind(n,16187))]);try{const n=await t(a);if(Boolean(n.pro_plan))return o({userName:a,isNeedCancelButton:e.isNeedCancelButton,successButtonText:e.successButtonText})}catch(e){i.logError(e.message)}}return Promise.resolve(!0)}},73286:(e,t,n)=>{"use strict";n.d(t,{verificationIsRequired:()=>g,whenVerified:()=>w});var o=n(87236),i=n(45848),a=n(19161),r=n(49437),s=n(11688),c=n(23127);let d=c.Deferred();function l(e,t){var n=TVSettings.getBool("_phone_verif_dlg_initial",!0);TVSettings.setValue("_phone_verif_dlg_initial",!1),(0,i.trackEvent)("Phone verification",e+(n?" initial":""),t)}function u(e){const t=c.Deferred()
;return(0,a.createPhoneDialog)({featureSource:e.source,doNotShowConfirmation:e.doNotShowConfirmation}).then(n=>{n.on("afterOpen",()=>l("Show dialog",e.source)).on("verification:success",n=>{t.resolve(n),l("Verified",e.source)}).on("verification:cancel",()=>{t.reject("cancelled"),l("Cancelled",e.source)}).on("verification:codeExpired",()=>l("Show dialog",e.source)).open()}),t}function g(e={}){return new Promise(t=>{!window.is_authenticated||user.is_staff||user.is_superuser||user.is_pro||user.is_moderator?t([!1]):e.customPhoneCheck?e.customPhoneCheck()?t([!0,"date-joined"]):t([!1]):s.enabled("phone_verification")&&!user.has_phone?!0!==e.doNotCheckSocialActivity?t([!0,"date-joined"]):(!0!==e.doNotCheckSuspicious&&t([Boolean(r.TVLocalStorage.getItem("is_suspicious")),"suspicious"]),t([!0,"default"])):t([!1])})}function w(e={}){const t=c.Deferred();return g({doNotCheckSuspicious:e.doNotCheckSuspicious,doNotCheckSocialActivity:e.doNotCheckSocialActivity,customPhoneCheck:e.customPhoneCheck}).then(([n,i])=>{if(!n)return d.resolve(),t.resolve();if(n&&e.silentPhoneVerification)return t.reject("phone_verification_required");if(!e.showDialog)return d.done(()=>t.resolve());const a={source:e.source,doNotShowConfirmation:e.doNotShowConfirmation};"suspicious"!==i&&(a.topMessage=(0,o.t)("Verify your phone number and get access to more tools on TradingView.")),u(a).done(()=>t.resolve()).always(()=>t.reject("phone_verification_declined"))}).catch(e=>e),t.promise()}window.loginStateChange&&loginStateChange.subscribe(null,()=>{window.is_authenticated&&(d=c.Deferred(),g().then(([e,t])=>{e||d.resolve()}))})},46279:(e,t,n)=>{"use strict";var o;function i(e,t={}){const{page:n,query:i}=t;let a="/u/",r=!1,s=null;if(function(e){return e.is_broker||1===e.account_type}(e))switch(a="/broker/",n){case o.PublishedCharts:s="ideas/";break;case o.FollowingPeople:s="following/";break;case o.Followers:s="followers/";break;case o.Reviews:s="reviews/";break;case o.Settings:case o.SettingsProfile:case o.Notifications:case o.Billing:a="/u/",r=!0}else r=!0;return"Guest"!==e.username&&(a+=e.username+"/"),i&&(a+="?"+i),void 0!==n&&(r?a+="#"+n:null!==s&&(a+=""+s)),a}n.r(t),n.d(t,{ProfilePages:()=>o,getUserProfilePath:()=>i}),function(e){e.Settings="settings",e.SettingsProfile="settings-profile",e.Notifications="notifications",e.Billing="billing",e.PublishedCharts="published-charts",e.FollowingPeople="following-people",e.Followers="followers",e.Reviews="reviews"}(o||(o={}))},19718:(e,t,n)=>{"use strict";n.d(t,{createImage:()=>i,marketingAnalyticsEnabled:()=>a,yandexAnalyticsEnabled:()=>r});var o=n(25226);function i(e){const t=document.createElement("img");return t.src=e,t}function a(){return(0,o.isFeatureEnabled)("marketing-analytics")}function r(){return(0,o.isFeatureEnabled)("yandex_metric_enabled")}},41261:(e,t,n)=>{"use strict";n.d(t,{GTagEvent:()=>u,trackGTagAdsEvent:()=>w});var o=n(51954),i=n(61030),a=n(14802),r=n(38456),s=n(88948),c=n(91805),d=n(19718);let l=!1;var u;function g(){l||!(0,d.marketingAnalyticsEnabled)()||(0,
a.isOnMobileAppPage)("any")||r.CheckMobile.iOS()||((0,s.updateInitData)(),(0,s.getInitData)().gadwId&&(l=!0,(0,c.appendScript)("https://www.googletagmanager.com/gtag/js?id="+(0,s.getInitData)().gadwId),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("consent","default",{ad_storage:(0,i.getCookieSetting)(i.CookieSettings.Advertising)?"granted":"denied"}),window.gtag("config",(0,s.getInitData)().gadwId),o.subscribe(i.cookieSettingsChangeEvent,(e,t)=>{e===i.CookieSettings.Advertising&&window.gtag("consent","update",{ad_storage:t?"granted":"denied"})},null)))}function w(e,t={}){if(g(),!l)return;const n=(0,s.getInitData)().gadwId;window.gtag("event","conversion",{send_to:`${n}/${e}`,user_id:window.user.id,...t})}!function(e){e.PageView="kwnRCP6AwqsBEOTvvuED",e.TrialSignUp="6_gCCOyejsACEK3sq6gB",e.RegistrationCompleted="JzYhCIOr578CEK3sq6gB",e.PaidPlanAcquired="ca8iCNrG578CEK3sq6gB"}(u||(u={}))},65343:(e,t,n)=>{"use strict";n.d(t,{TwitterEvent:()=>o,trackTwitterEvent:()=>r});var o,i=n(19718),a=n(61030);!function(e){e.SiteVisit="o2eg2",e.TrialSignUp="o1wjo",e.RegistrationCompleted="o1wjq",e.PaidPlanAcquired="o1wjr"}(o||(o={}));function r(e){(0,i.marketingAnalyticsEnabled)()&&(0,a.getCookieSetting)(a.CookieSettings.Analytics)&&(e=>[`https://analytics.twitter.com/i/adsct?txn_id=${e}&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0`,`https://t.co/i/adsct?txn_id=${e}&p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0"`])(e).map(i.createImage)}},14879:(e,t,n)=>{"use strict";var o,i;n.r(t),n.d(t,{WeekDays:()=>o,Months:()=>i}),function(e){e[e.SUNDAY=1]="SUNDAY",e[e.MONDAY=2]="MONDAY",e[e.TUESDAY=3]="TUESDAY",e[e.WEDNESDAY=4]="WEDNESDAY",e[e.THURSDAY=5]="THURSDAY",e[e.FRIDAY=6]="FRIDAY",e[e.SATURDAY=7]="SATURDAY"}(o||(o={})),function(e){e[e.JANUARY=0]="JANUARY",e[e.FEBRUARY=1]="FEBRUARY",e[e.MARCH=2]="MARCH",e[e.APRIL=3]="APRIL",e[e.MAY=4]="MAY",e[e.JUNE=5]="JUNE",e[e.JULY=6]="JULY",e[e.AUGUST=7]="AUGUST",e[e.SEPTEMBER=8]="SEPTEMBER",e[e.OCTOBER=9]="OCTOBER",e[e.NOVEMBER=10]="NOVEMBER",e[e.DECEMBER=11]="DECEMBER"}(i||(i={}))},34440:(e,t,n)=>{"use strict";const o=n(11688);window.TradingView=window.TradingView||{};var i,a,r,s,c,d,l=TradingView.postMessageWrapper=(a=Object.create(null),r=Object.create(null),s=Object.create(null),c=0,d=0,window.addEventListener&&window.addEventListener("message",(function(e){var t;try{t=JSON.parse(e.data),o.enabled("charting_library_debug_mode")&&console.log("PostMessage: incoming message: "+JSON.stringify(t))}catch(e){return}if(t&&t.provider&&"TradingView"===t.provider)if("get"===t.type){if(!r[t.name])return;r[t.name].forEach((function(e){"function"==typeof e&&e.call(t,t.data,(function(e){var n={id:t.id,type:"on",name:t.name,client_id:t.client_id,data:e,provider:"TradingView"};i.postMessage(JSON.stringify(n),"*")}))}))}else if("on"===t.type)a[t.client_id]&&a[t.client_id][t.id]&&(a[t.client_id][t.id].call(t,t.data),delete a[t.client_id][t.id]);else if("post"===t.type){if(!r[t.name])return
;r[t.name].forEach((function(e){"function"==typeof e&&e.call(t,t.data,(function(){}))}))}})),function(e,t){a[t]=Object.create(null),s[t]=e,i=e;var n="";return{on:function(e,t,n){r[e]&&n||(r[e]=[]),r[e].push(t)},get:function(e,n,o){var i={id:c++,type:"get",name:e,client_id:t,data:n,provider:"TradingView"};a[t][i.id]=o,s[t].postMessage(JSON.stringify(i),"*")},post:function(e,t,o){var i={id:d++,type:"post",name:t,client_id:n,data:o,provider:"TradingView"};e&&"function"==typeof e.postMessage&&e.postMessage(JSON.stringify(i),"*")},setClientId:function(e){n=e}}});e.exports=l},62802:(e,t,n)=>{"use strict";e=n.nmd(e),n(38456);var o=n(86674).fetch,i=n(31493).regExpEscape,a=n(26722).TVXWindowEvents,r=n(49437).TVLocalStorage,s=n(97639),c=n(11688),d=n(25226).isFeatureEnabled,l=n(11905).getLogger("Lib.TVSettings"),u=["s.tradingview.com","betacdn.tradingview.com"],g=(c.enabled("use_localstorage_for_settings"),window.TVSettings=function(){var e=!1,t=null,n=!1;function w(){return!(t||window.is_authenticated)}try{e=!TradingView.onWidget()&&parent&&parent!==window&&!!parent.IS_DEMO_PAGE}catch(e){}if(e){var f={"widgetbar.layout-settings":{widgets:{},settings:{minimized:!0}},notShowMainWizard:!0},h=function(e,t,n){var o=f[e];return null==o?t:o},v=function(){};return{loaded:!1,loadedModel:!1,getValue:h,getJSON:h,getBool:h,getFloat:h,getInt:h,setValue:v,setJSON:v,remove:v,keys:function(){return Object.keys(f)},keysMask:function(){return[]},sync:v,onSync:{subscribe:function(){}}}}var m=12e4;"local"===window.environment&&(m=5e3);var p,_,y,S=TradingView.onWidget()?"tradingview-widget":"tradingview",b=S+".",E={},T=[],k=[/^widgetbar\.widget\.watchlist.+/,/.+quicks$/,/^widgetbar\.layout-settings$/,/^ChartSideToolbarWidget\.visible$/,/^onwidget\.watchlist$/,/^domepanel.visible$/,/^orderpanel.visible$/,/^chart\.favoriteDrawings$/,/^chart\.favoriteDrawingsPosition$/,/^loadChartDialog.favorites$/,/^ChartFavoriteDrawingToolbarWidget\.visible/,/^trading\.chart\.proterty$/,/^trading_floating_toolbar\.position$/,/^trading\.orderWidgetMode\./,/^symbolWatermark$/,/^pinereference\.size$/,/^pinereference\.position$/,/^hint\.+/,/^ChartDrawingToolbarWidget\.visible/];const C=["current_theme.name"];function P(e){return b+e}function V(e){return e.substring(b.length)}function A(e,t){var n=E[e];return null==n?t:n}function D(e,t,n){n=n||{};var o=""+t;return E[e]!==o&&(E[e]=o,L(e)),n.forceFlush&&!_&&(_=setTimeout((function(){_=void 0,I()}),10)),g}function O(e,t){return t=t||{},null!=E[e]&&(delete E[e],L(e)),t.forceFlush&&I(),g}function N(){p=void 0,T.length&&I()}function L(e){if(t)null==E[e]?t.removeValue(e):t.setValue(e,E[e]);else if(w())try{null==E[e]?r.removeItem(P(e)):r.setItem(P(e),E[e])}catch(e){}else T.push(e),p||(p=setTimeout(N,m));a.emit("settings",JSON.stringify({key:e,value:E[e]}))}function I(e){if(!n&&!y)if(d("disable_save_settings"))l.logWarn("Settings flashing has been skipped because of disable_save_settings featuretoggle");else if(!c.enabled("widget")&&!w()&&0!==T.length){var t=T;T=[];for(var i={},a=t.length;a--;){var r=t[a],s=E[r]
;void 0===s&&(s=null),i[r]=s}var u=new FormData;u.append("delta",JSON.stringify(i)),e&&navigator.sendBeacon?navigator.sendBeacon("/savesettings/",u):o("/savesettings/",{method:"POST",credentials:"include",body:u}).then((function(n){if(n.ok||(T=T.concat(t)),[429,503].includes(n.status)){var o=1e3*+n.headers.get("retry-after")||3e5;y=setTimeout(()=>{y=void 0,I(e)},o)}})).catch((function(){T=T.concat(t)}))}}function M(){return Object.keys(E)}function U(e){for(var t=0;t<k.length;++t)if(k[t].exec(e))return!0;return!1}function R(e){return e.substring(0,b.length)===b}function F(e){E={};const t=0===Object.keys(e).length;t||function(e){Object.keys(e).forEach((function(t){E[t]=e[t]+""}))}(e),function(e){for(var t=r.length;t--;){var n=r.key(t);n&&R(n)&&((e||C.includes(V(n)))&&D(V(n),r.getItem(n)),r.removeItem(n))}}(t)}a.on("settings",(function(e){var t=JSON.parse(e);null==t.value?delete E[t.key]:E[t.key]=t.value}));var W=new s;return document.addEventListener("visibilitychange",(function(){"hidden"!==document.visibilityState&&!0!==document.hidden||I()})),window.addEventListener("beforeunload",(function(){I(!0)})),{loaded:!1,loadedModel:!1,getValue:A,getJSON:function(e,t){var n=A(e,void 0);if(null==n)return t;try{return JSON.parse(n)}catch(n){return O(e),t}},getBool:function(e,t){var n=A(e);return null==n?t:!(!n||"false"===n||0==+n)},getFloat:function(e,t,n){var o=A(e,void 0);if(null==o)return t;var i=parseFloat(o);if(!isFinite(i))throw new TypeError('"'+o+'" is not float (key: "'+e+'")');return i},getInt:function(e,t,n){var o=A(e,void 0);if(null==o)return t;var i=parseInt(o,10);if(!isFinite(i))throw new TypeError('"'+o+'" is not int (key: "'+e+'")');return i},setValue:D,setJSON:function(e,t,n){return D(e,JSON.stringify(t),n),g},remove:O,keys:M,keysMask:function(e,t){for(var n=M(),o=[],a=(e=new RegExp("^"+i(e).replace(/\\\*\\\*/gi,".+").replace(/\\\*/gi,"[^.]+")+"$","gi"),n.length-1);a>=0;a--)e.test(n[a])&&o.push(n[a]),e.lastIndex=0;return o},sync:function(e){null!==e?(t?F(t.initialSettings||{}):w()?(function(){if(TradingView.onWidget()&&u.includes(window.location.host))for(var e=r.length;e--;){var t=r.key(e);if(0===t.indexOf("tradingview.")){var n=t.replace("tradingview.",S+".");r.setItem(n,r.getItem(t)),r.removeItem(t)}}}(),function(){for(const e of C)E[e]&&!r.getItem(P(e))&&r.setItem(P(e),E[e])}(),function(){E={};for(var e=!c.enabled("save_chart_properties_to_local_storage"),t=r.length;t--;){var n=r.key(t);if(n&&R(n)){var o=n.substring(b.length);e&&!U(o)||(E[o]=r.getItem(n))}}}()):F(e||{}),W.fire()):n=!0},onSync:W,setSettingsAdapter:function(e){t=e}}}());setTimeout((function(){n.e(30362).then(n.bind(n,76141)).then(e=>{e.clearOldSettings()})}),3e4),e&&e.exports&&(e.exports=g)},76734:(e,t,n)=>{"use strict";async function o(){if(!window.user||window.user.do_not_track)return null;{const e=(await Promise.all([n.e(32917),n.e(24081)]).then(n.bind(n,23623))).getTrackerInstance();return e||null}}n.d(t,{getTracker:()=>o})},32317:(e,t,n)=>{"use strict";n.d(t,{trackActionFollow:()=>i});var o=n(76734);function i(e,t,n){
const i=n.authorId?n.authorId.toString():"",a=n.symbol?n.symbol:"",r=n.symbolType?n.symbolType:"";(0,o.getTracker)().then(n=>{n&&n.trackFollow(e,t,i,a,r)})}},26722:(e,t,n)=>{"use strict";n.d(t,{TVXWindowEvents:()=>r});n(97116);var o=n(11905),i=n(49437);const a=(0,o.getLogger)("XWindowEvents");var r;!function(e){const t="tvxwevents.",n={};let o;window.BroadcastChannel?(o=new BroadcastChannel("tvxwevents"),o.addEventListener("message",(function(e){const{data:{event:t,value:o}}=e;n[t]&&n[t].forEach(e=>{e(o)})})),function(){const e=[],n=performance.now();for(let n=0;n<i.TVLocalStorage.length;n++){const o=i.TVLocalStorage.key(n);o.startsWith(t)&&e.push(o)}const o=i.TVLocalStorage.length;for(const t of e)i.TVLocalStorage.removeItem(t);const r=performance.now()-n;a.logNormal("Total keys amount in local storage on operation start: "+o),a.logNormal("Keys amount in local storage to be deleted: "+e.length),a.logNormal("Keys to be deleted from local storage: "+JSON.stringify(e)),a.logNormal(`Removing keys from local storage took ${r} ms`)}()):window.addEventListener("storage",(function(e){const{newValue:o,key:a}=e;if(null===o||!a||!a.startsWith(t))return;const r=a.substring(t.length);n[r]&&n[r].forEach(t=>{t(e.newValue)});i.TVLocalStorage.removeItem(a)})),e.on=function(e,t){n[e]||(n[e]=[]),n[e].push(t)},e.off=function(e,t){if(!n[e])return;const o=n[e].indexOf(t);-1!==o&&(1===n[e].length?delete n[e]:n[e].splice(o,1))},e.emit=function(e,n=Date.now()){try{o?o.postMessage({event:e,value:n}):i.TVLocalStorage.setItem(t+e,n.toString())}catch(e){a.logError(e.message)}}}(r||(r={}))},81865:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108" width="108" height="108"><path fill="#2962FF" stroke="#2962FF" stroke-linejoin="round" stroke-width="2" d="m57.29 54a15.43 15.43 0 1 1 0-30.86 15.43 15.43 0 0 1 0 30.86zm5.06 10.3C66.2 64.3 83 69.74 83 85.5v3.47H31.57V85.9a21.6 21.6 0 0 1 21.6-21.6l9.18.02z"/><path fill="#4a4a4a" d="m48.71 50.86a17.43 17.43 0 1 1 0-34.86 17.43 17.43 0 0 1 0 34.86zm0-4a13.43 13.43 0 1 0 0-26.86 13.43 13.43 0 0 0 0 26.86zM25 81.83v-1.09a19.6 19.6 0 0 1 19.6-19.6 5627.07 5627.07 0 0 1 9.09.02 2 2 0 0 0 .17-4l-4.67-.01H44.6A23.6 23.6 0 0 0 21 80.74v3.08c0 1.1.9 2 2 2h51.43a2 2 0 1 0 0-4H25zM64.14 70h20.57a2 2 0 1 0 0-4H64.14a2 2 0 1 0 0 4z"/></svg>'}}]);