/*******************************************************************************
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 ******************************************************************************/
package org.apache.sling.scripting.sightly.apps.reactcompass.clientlibs.clientlib__002d__react.resources;

import java.io.PrintWriter;
import java.util.Collection;
import javax.script.Bindings;

import org.apache.sling.scripting.sightly.render.RenderUnit;
import org.apache.sling.scripting.sightly.render.RenderContext;

public final class index__002e__html extends RenderUnit {

    @Override
    protected final void render(PrintWriter out,
                                Bindings bindings,
                                Bindings arguments,
                                RenderContext renderContext) {
// Main Template Body -----------------------------------------------------------------------------

out.write("<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"/><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/><meta name=\"theme-color\" content=\"#000000\"/><meta name=\"description\" content=\"AEM React Compass\"/><link rel=\"icon\" href=\"/etc.clientlibs/reactcompass/clientlibs/clientlib-react/resources/favicon.ico\"/><link rel=\"apple-touch-icon\" href=\"/etc.clientlibs/reactcompass/clientlibs/clientlib-react/resources/logo192.png\"/><link rel=\"manifest\" href=\"/etc.clientlibs/reactcompass/clientlibs/clientlib-react/resources/manifest.json\"/><title>AEM React Compass</title><meta property=\"cq:pagemodel_root_url\" content=\"\"/><link rel=\"stylesheet\" href=\"/etc.clientlibs/reactcompass/clientlibs/clientlib-base.css\"/><script>0</script><link href=\"/etc.clientlibs/reactcompass/clientlibs/clientlib-react/resources/static/css/main.935b7109.chunk.css\" rel=\"stylesheet\"/></head><body class=\"page basicpage\"><noscript>You need to enable JavaScript to run this app.</noscript><div id=\"spa-root\"></div><script>!function(e){function t(t){for(var n,o,u=t[0],i=t[1],s=t[2],l=0,p=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(f&&f(t);p.length;)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={1:0},a={1:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{4:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n=\"static/css/\"+({}[e]||e)+\".\"+{3:\"31d6cfe0\",4:\"61b50e66\",5:\"31d6cfe0\",6:\"31d6cfe0\"}[e]+\".chunk.css\",a=u.p+n,c=document.getElementsByTagName(\"link\"),i=0;i<c.length;i++){var s=(f=c[i]).getAttribute(\"data-href\")||f.getAttribute(\"href\");if(\"stylesheet\"===f.rel&&(s===n||s===a))return t()}var l=document.getElementsByTagName(\"style\");for(i=0;i<l.length;i++){var f;if((s=(f=l[i]).getAttribute(\"data-href\"))===n||s===a)return t()}var p=document.createElement(\"link\");p.rel=\"stylesheet\",p.type=\"text/css\",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error(\"Loading CSS chunk \"+e+\" failed.\\n(\"+n+\")\");c.code=\"CSS_CHUNK_LOAD_FAILED\",c.request=n,delete o[e],p.parentNode.removeChild(p),r(c)},p.href=a,document.getElementsByTagName(\"head\")[0].appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var c,i=document.createElement(\"script\");i.charset=\"utf-8\",i.timeout=120,u.nc&&i.setAttribute(\"nonce\",u.nc),i.src=function(e){return u.p+\"static/js/\"+({}[e]||e)+\".\"+{3:\"c2d583fd\",4:\"a6cf42ca\",5:\"801192dc\",6:\"826391ef\"}[e]+\".chunk.js\"}(e);var s=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&(\"load\"===t.type?\"missing\":t.type),o=t&&t.target&&t.target.src;s.message=\"Loading chunk \"+e+\" failed.\\n(\"+n+\": \"+o+\")\",s.name=\"ChunkLoadError\",s.type=n,s.request=o,r[1](s)}a[e]=void 0}};var l=setTimeout((function(){c({type:\"timeout\",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,\"a\",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p=\"/etc.clientlibs/reactcompass/clientlibs/clientlib-react/resources/\",u.oe=function(e){throw console.error(e),e};var i=this.webpackJsonpreactcompass=this.webpackJsonpreactcompass||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var f=s;r()}([])</script><script src=\"/etc.clientlibs/reactcompass/clientlibs/clientlib-react/resources/static/js/2.489bb2f6.chunk.js\"></script><script src=\"/etc.clientlibs/reactcompass/clientlibs/clientlib-react/resources/static/js/main.c5f478e4.chunk.js\"></script></body></html>");


// End Of Main Template Body ----------------------------------------------------------------------
    }



    {
//Sub-Templates Initialization --------------------------------------------------------------------



//End of Sub-Templates Initialization -------------------------------------------------------------
    }

}

