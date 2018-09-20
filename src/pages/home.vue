<template>
  <f7-page>
    <f7-navbar sliding title="Home"></f7-navbar>
    <f7-block-title>{{ title }}</f7-block-title>
    <f7-block inner>
    <f7-button round @click="playvideo">Play</f7-button>
<iframe width="560" height="315" src="https://www.youtube.com/embed/LdgoeVqZuFo?showinfo='0'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>    </f7-block>
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
        window.InAppYouTube.openVideo('LdgoeVqZuFo', {
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

    var videoUrl = 'http://techslides.com/demos/sample-videos/small.mp4';
console.log('streaming above')
  // Just play a video
  window.plugins.streamingMedia.playVideo(videoUrl);
  console.log('streaming below')

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
