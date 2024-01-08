import{l as y}from"./chunks/map._qUit9OZ.js";import{d as c,j as F,k as o,o as E,b as r,a5 as C,c as h,h as e,an as m,ae as p,f as s,i}from"./chunks/framework.nAclW6lK.js";const b=c({__name:"百度地图初始化.md.demo.5d9db6da",setup(d){const l=F();o(async()=>{await k(l.value)});async function k(n){const a=await y(),t=new a.Map(n,{enableDblclickZoom:!0,enableMapClick:!1,displayOptions:{building:!1},enableRotate:!1,enableTilt:!1}),g=new a.Point(99.657606,27.302755);t.centerAndZoom(g,18),t.enableScrollWheelZoom(!0)}return(n,a)=>(E(),r("div",{id:"container",class:"container",ref_key:"container",ref:l},null,512))}}),B=C(b,[["__scopeId","data-v-940cb8b0"]]),u=m("",4),A=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," id"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"container"'),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," class"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"container"'),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"container"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"></"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"div"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," setup"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"ts"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 'vue'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  import"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," { loadBMapGL } "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"from"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," './map.js'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," container"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," ref"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  onMounted"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"async"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," () "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=>"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    await"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," initMap"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(container.value);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  });")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"  //初始化地图")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"  async"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," function"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," initMap"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"}},"dom"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},") {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," BMapGL"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," any"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," await"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," loadBMapGL"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"();")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 创建地图实例")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," _map"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},":"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," any"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," BMapGL."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Map"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(dom, {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      enableDblclickZoom: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      enableMapClick: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      displayOptions: {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"        building: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      },")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      enableRotate: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"      enableTilt: "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"false"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},",")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    });")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 创建点坐标")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"    const"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," point"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," ="),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," new"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," BMapGL."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"Point"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"99.657606"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},", "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"27.302755"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    // 初始化地图，设置中心点坐标和地图级别")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    _map."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"centerAndZoom"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"(point, "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"18"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"    //开启鼠标滚轮缩放")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"    _map."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"enableScrollWheelZoom"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"("),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"true"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},");")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"script"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," lang"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"less"'),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," scoped"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"  .container"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    width"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"100"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"%"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"    height"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},": "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"500"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"px"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},";")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"</"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"style"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")])])])],-1),M=JSON.parse('{"title":"初始化","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/vue/bMap/百度地图初始化.md","filePath":"blogs/vue/bMap/百度地图初始化.md","lastUpdated":1704447032000}'),D={name:"blogs/vue/bMap/百度地图初始化.md"},v=Object.assign(D,{setup(d){return(l,k)=>{const n=p("demo"),a=p("git-talk");return E(),r("div",null,[u,h(n,{customClass:"",sourceCode:`<template>
  <div id="container" class="container" ref="container"></div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { loadBMapGL } from './map.js';

  const container = ref();

  onMounted(async () => {
    await initMap(container.value);
  });

  //初始化地图
  async function initMap(dom) {
    const BMapGL: any = await loadBMapGL();
    // 创建地图实例
    const _map: any = new BMapGL.Map(dom, {
      enableDblclickZoom: true,
      enableMapClick: false,
      displayOptions: {
        building: false,
      },
      enableRotate: false,
      enableTilt: false,
    });
    // 创建点坐标
    const point = new BMapGL.Point(99.657606, 27.302755);
    // 初始化地图，设置中心点坐标和地图级别
    _map.centerAndZoom(point, 18);
    //开启鼠标滚轮缩放
    _map.enableScrollWheelZoom(true);
  }
<\/script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 500px;
  }
</style>
`},{highlight:e(()=>[A]),default:e(()=>[h(B)]),_:1}),h(a)])}}});export{M as __pageData,v as default};
