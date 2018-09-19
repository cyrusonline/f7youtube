<template>
  <f7-page>
    <f7-navbar sliding title="Home"></f7-navbar>
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
    <f7-button round @click="playvideo">Play</f7-button>

    </f7-block>
  </f7-page>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Hello World'
    };
  },
  methods:{
    playvideo(){
           try {
        window.InAppYouTube.openVideo('wRxhqhYlHBY', {
          fullscreen: true
        }, function(result) {
          console.log(JSON.stringify(result));
        }, function(reason) {
          console.log(reason);
        });
      } catch(e) {
        console.log(e)
      }
    }
  },
  created(){
      //    try {
      //   window.InAppYouTube.openVideo('iTLrhcX_v6U', {
      //     fullscreen: true
      //   }, function(result) {
      //     console.log(JSON.stringify(result));
      //   }, function(reason) {
      //     console.log(reason);
      //   });
      // } catch(e) {
      //   console.log(e)
      // }
  }
};
</script>
