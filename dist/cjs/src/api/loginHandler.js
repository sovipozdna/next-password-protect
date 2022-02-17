"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../node_modules/tslib/tslib.es6.js"),o=require("../../node_modules/jsonwebtoken/index.js"),r=require("../../node_modules/safe-compare/index.js"),n=require("./sendJson.js"),s=require("./setCookie.js");exports.loginHandler=function(i,t){return function(d,a){return e.__awaiter(void 0,void 0,void 0,(function(){var u;return e.__generator(this,(function(l){a.setHeader("Content-Type","application/json");try{if("POST"!==d.method)throw new Error("Invalid method.");if(!d.body.password)throw new Error("Invalid request.");if(u=d.body.password,r.default(u,i))return s.setCookie(a,(null==t?void 0:t.cookieName)||"next-password-protect",o.default.sign({},i),e.__assign({domain:null==t?void 0:t.domain,httpOnly:!0,sameSite:(null==t?void 0:t.cookieSameSite)||!1,secure:void 0!==(null==t?void 0:t.cookieSecure)?null==t?void 0:t.cookieSecure:"production"===process.env.NODE_ENV,path:"/"},(null==t?void 0:t.cookieMaxAge)?{maxAge:null==t?void 0:t.cookieMaxAge}:{})),n.sendJson(a,200),[2];n.sendJson(a,400,{message:"Incorrect password."})}catch(e){n.sendJson(a,500,{message:e.message||"An error has occured."})}return[2]}))}))}};
//# sourceMappingURL=loginHandler.js.map
