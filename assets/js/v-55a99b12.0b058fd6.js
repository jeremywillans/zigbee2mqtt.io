"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[51660],{806581:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-55a99b12","path":"/devices/VOCKQJK11LM.html","title":"Xiaomi VOCKQJK11LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi VOCKQJK11LM control via MQTT","description":"Integrate your Xiaomi VOCKQJK11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-08-01T20:41:55.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Adapter firmware","slug":"adapter-firmware","link":"#adapter-firmware","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Voc (numeric)","slug":"voc-numeric","link":"#voc-numeric","children":[]},{"level":3,"title":"Device_temperature (numeric)","slug":"device-temperature-numeric","link":"#device-temperature-numeric","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Display_unit (enum)","slug":"display-unit-enum","link":"#display-unit-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1683049369000},"filePathRelative":"devices/VOCKQJK11LM.md"}')},468298:(e,t,i)=>{i.r(t),i.d(t,{default:()=>O});var a=i(166252);const o=(0,a._)("h1",{id:"xiaomi-vockqjk11lm",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#xiaomi-vockqjk11lm","aria-hidden":"true"},"#"),(0,a.Uk)(" Xiaomi VOCKQJK11LM")],-1),r=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"VOCKQJK11LM")],-1),d=(0,a._)("td",null,"Vendor",-1),l=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Aqara TVOC air quality monitor")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"temperature, humidity, voc, device_temperature, battery, voltage, display_unit, linkquality")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/VOCKQJK11LM.jpg",alt:"Xiaomi VOCKQJK11LM"})])],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"White-label"),(0,a._)("td",null,"Xiaomi AAQS-S01")],-1),h=(0,a._)("h2",{id:"notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Notes")],-1),p=(0,a._)("h3",{id:"adapter-firmware",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#adapter-firmware","aria-hidden":"true"},"#"),(0,a.Uk)(" Adapter firmware")],-1),m=(0,a._)("p",null,"In order for this device to work (fully), at least the following firmware is required on your adapter:",-1),f={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},v=(0,a._)("code",null,"20211115",-1),b={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},_=(0,a._)("code",null,"20211114",-1),g={href:"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592",target:"_blank",rel:"noopener noreferrer"},k=(0,a._)("code",null,"20211222",-1),y={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},w=(0,a._)("code",null,"0x26720700",-1),x=(0,a._)("p",null,[(0,a._)("em",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.")],-1),T=(0,a._)("h3",{id:"pairing",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,a.Uk)(" Pairing")],-1),C=(0,a._)("p",null,"Press and hold button on top of device until connection symbol appears",-1),q=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),V=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),N=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="voc-numeric" tabindex="-1"><a class="header-anchor" href="#voc-numeric" aria-hidden="true">#</a> Voc (numeric)</h3><p>Measured VOC value. Value can be found in the published state on the <code>voc</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppb</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device_temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="display-unit-enum" tabindex="-1"><a class="header-anchor" href="#display-unit-enum" aria-hidden="true">#</a> Display_unit (enum)</h3><p>Units to show on the display. Value can be found in the published state on the <code>display_unit</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_unit&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_unit&quot;: NEW_VALUE}</code>. The possible values are: <code>mgm3_celsius</code>, <code>ppb_celsius</code>, <code>mgm3_fahrenheit</code>, <code>ppb_fahrenheit</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),K={},O=(0,i(983744).Z)(K,[["render",function(e,t){const i=(0,a.up)("RouterLink"),K=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),o,(0,a._)("table",null,[r,(0,a._)("tbody",null,[n,(0,a._)("tr",null,[d,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Xiaomi"},{default:(0,a.w5)((()=>[(0,a.Uk)("Xiaomi")])),_:1})])]),l,u,c,s])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,p,m,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("CC2530/CC2531: "),(0,a._)("a",f,[v,(0,a.Wm)(K)])]),(0,a._)("li",null,[(0,a.Uk)("CC1352/CC2652: "),(0,a._)("a",b,[_,(0,a.Wm)(K)])]),(0,a._)("li",null,[(0,a.Uk)("CC2538: "),(0,a._)("a",g,[k,(0,a.Wm)(K)])]),(0,a._)("li",null,[(0,a.Uk)("Conbee II: "),(0,a._)("a",y,[w,(0,a.Wm)(K)])])]),x,T,C,(0,a.kq)(" Notes END: Do not edit below this line "),q,(0,a._)("p",null,[(0,a.Uk)("This device supports OTA updates, for more information see "),(0,a.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("OTA updates")])),_:1}),(0,a.Uk)(".")]),V,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),N])}]])}}]);