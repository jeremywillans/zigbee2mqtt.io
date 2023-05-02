"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3677],{115056:(e,o,t)=>{t.r(o),t.d(o,{data:()=>u});const u=JSON.parse('{"key":"v-42bfb540","path":"/devices/TS0505A_led.html","title":"TuYa TS0505A_led control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0505A_led control via MQTT","description":"Integrate your TuYa TS0505A_led via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-11-01T12:47:02.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1683049369000},"filePathRelative":"devices/TS0505A_led.md"}')},752818:(e,o,t)=>{t.r(o),t.d(o,{default:()=>p});var u=t(166252);const l=(0,u._)("h1",{id:"tuya-ts0505a-led",tabindex:"-1"},[(0,u._)("a",{class:"header-anchor",href:"#tuya-ts0505a-led","aria-hidden":"true"},"#"),(0,u.Uk)(" TuYa TS0505A_led")],-1),d=(0,u._)("thead",null,[(0,u._)("tr",null,[(0,u._)("th"),(0,u._)("th")])],-1),c=(0,u._)("tr",null,[(0,u._)("td",null,"Model"),(0,u._)("td",null,"TS0505A_led")],-1),i=(0,u._)("td",null,"Vendor",-1),a=(0,u._)("tr",null,[(0,u._)("td",null,"Description"),(0,u._)("td",null,"RGB+CCT LED")],-1),s=(0,u._)("tr",null,[(0,u._)("td",null,"Exposes"),(0,u._)("td",null,"light (state, brightness, color_temp, color_hs), linkquality")],-1),r=(0,u._)("tr",null,[(0,u._)("td",null,"Picture"),(0,u._)("td",null,[(0,u._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0505A_led.jpg",alt:"TuYa TS0505A_led"})])],-1),n=(0,u._)("h2",{id:"options",tabindex:"-1"},[(0,u._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,u.Uk)(" Options")],-1),q=(0,u.uE)('<ul><li><p><code>color_sync</code>: When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>, <code>color_temp</code>, <code>color_hs</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li><li><code>color_temp</code>: To control the color temperature (in reciprocal megakelvin a.k.a. mired scale) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color_temp&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>153</code> and <code>500</code>, the higher the warmer the color. To read the color temperature send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color_temp&quot;: &quot;&quot;}</code>. Besides the numeric values the following values are accepected: <code>coolest</code>, <code>cool</code>, <code>neutral</code>, <code>warm</code>, <code>warmest</code>.</li><li><code>color_hs</code>: To control the hue/saturation (color) publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;color&quot;: {&quot;hue&quot;: HUE, &quot;saturation&quot;: SATURATION}}</code> (e.g. <code>{&quot;color&quot;:{&quot;hue&quot;:360,&quot;saturation&quot;:100}}</code>). To read the hue/saturation send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;color&quot;:{&quot;hue&quot;:&quot;&quot;,&quot;saturation&quot;:&quot;&quot;}}</code>. Alternatively it is possible to set the hue/saturation via: <ul><li>HSB space (hue, saturation, brightness): <code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;b&quot;: B}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;b&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsb&quot;: &quot;H,S,B&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsb&quot;:&quot;360,100,100&quot;}}</code></li><li>HSV space (hue, saturation, value):<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;v&quot;: V}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;v&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsv&quot;: &quot;H,S,V&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsv&quot;:&quot;360,100,100&quot;}}</code></li><li>HSL space (hue, saturation, lightness)<code>{&quot;color&quot;: {&quot;h&quot;: H, &quot;s&quot;: S, &quot;l&quot;: L}}</code> e.g. <code>{&quot;color&quot;:{&quot;h&quot;:360,&quot;s&quot;:100,&quot;l&quot;:100}}</code> or <code>{&quot;color&quot;: {&quot;hsl&quot;: &quot;H,S,L&quot;}}</code> e.g. <code>{&quot;color&quot;:{&quot;hsl&quot;:&quot;360,100,100&quot;}}</code></li></ul></li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),h={},p=(0,t(983744).Z)(h,[["render",function(e,o){const t=(0,u.up)("RouterLink");return(0,u.wg)(),(0,u.iD)("div",null,[(0,u.kq)(" !!!! "),(0,u.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,u.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,u.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,u.kq)(" !!!! "),l,(0,u._)("table",null,[d,(0,u._)("tbody",null,[c,(0,u._)("tr",null,[i,(0,u._)("td",null,[(0,u.Wm)(t,{to:"/supported-devices/#v=TuYa"},{default:(0,u.w5)((()=>[(0,u.Uk)("TuYa")])),_:1})])]),a,s,r])]),(0,u.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,u.kq)(" Notes END: Do not edit below this line "),n,(0,u._)("p",null,[(0,u._)("em",null,[(0,u.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,u.w5)((()=>[(0,u.Uk)("How to use device type specific configuration")])),_:1})])]),q])}]])}}]);