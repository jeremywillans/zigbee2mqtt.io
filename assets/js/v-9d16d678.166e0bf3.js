"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[7771],{864857:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-9d16d678","path":"/devices/TS0601_dimmer_knob.html","title":"TuYa TS0601_dimmer_knob control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0601_dimmer_knob control via MQTT","description":"Integrate your TuYa TS0601_dimmer_knob via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-01-01T08:59:10.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Min/max brightness","slug":"min-max-brightness","link":"#min-max-brightness","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Light_type (enum)","slug":"light-type-enum","link":"#light-type-enum","children":[]},{"level":3,"title":"Indicator_mode (enum)","slug":"indicator-mode-enum","link":"#indicator-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1683049369000},"filePathRelative":"devices/TS0601_dimmer_knob.md"}')},923755:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var o=i(166252);const d=(0,o._)("h1",{id:"tuya-ts0601-dimmer-knob",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#tuya-ts0601-dimmer-knob","aria-hidden":"true"},"#"),(0,o.Uk)(" TuYa TS0601_dimmer_knob")],-1),a=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"TS0601_dimmer_knob")],-1),l=(0,o._)("td",null,"Vendor",-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Zigbee smart knob dimmer")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"light (state, brightness, min_brightness), light_type, indicator_mode, linkquality")],-1),h=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_dimmer_knob.jpg",alt:"TuYa TS0601_dimmer_knob"})])],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"White-label"),(0,o._)("td",null,"Moes WS-SY-EURD, Moes WS-SY-EURD-WH-MS")],-1),u=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="min-max-brightness" tabindex="-1"><a class="header-anchor" href="#min-max-brightness" aria-hidden="true">#</a> Min/max brightness</h3><p>Only &#39;min_brightness&#39;, but not &#39;max_brightness&#39; is provided.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair the device, the knob must be pressed for 5 sec. Sometimes, the pairing mode works only, if the light is on. Additionally, it seems the device can only be paired directly to the coordinator, but not to routers.</p>',5),m=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>min_brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h3 id="light-type-enum" tabindex="-1"><a class="header-anchor" href="#light-type-enum" aria-hidden="true">#</a> Light_type (enum)</h3><p>Type of light attached to the device. Value can be found in the published state on the <code>light_type</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_type&quot;: NEW_VALUE}</code>. The possible values are: <code>led</code>, <code>incandescent</code>, <code>halogen</code>.</p><h3 id="indicator-mode-enum" tabindex="-1"><a class="header-anchor" href="#indicator-mode-enum" aria-hidden="true">#</a> Indicator_mode (enum)</h3><p>Mode of the indicator light. Value can be found in the published state on the <code>indicator_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>none</code>, <code>relay</code>, <code>pos</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),g={},p=(0,i(983744).Z)(g,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),d,(0,o._)("table",null,[a,(0,o._)("tbody",null,[n,(0,o._)("tr",null,[l,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=TuYa"},{default:(0,o.w5)((()=>[(0,o.Uk)("TuYa")])),_:1})])]),s,r,h,c])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,o.kq)(" Notes END: Do not edit below this line "),m])}]])}}]);