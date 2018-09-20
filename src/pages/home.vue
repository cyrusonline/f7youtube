<template>
<f7-page>
    <f7-navbar sliding title="Home"></f7-navbar>
    <f7-block-title>{{ title }}</f7-block-title>
      <video width="400" controls controlsList="nodownload">
  <source src="https://ckmobile.000webhostapp.com/tvb.mp4" type="video/mp4">
  
</video>
    <f7-block inner>
    
        <f7-button round @click="playvideo">Play</f7-button>
        <f7-button round @click="playstream">Play Stream</f7-button>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LdgoeVqZuFo?showinfo='0'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
    methods: {
        playstream() {
            var options = {
                bgColor: "#FFFFFF",

                initFullscreen: false, // true is default. iOS only.
                keepAwake: false, // prevents device from sleeping. true is default. Android only.
                successCallback: function () {
                    console.log("Player closed without error.");
                },
                errorCallback: function (errMsg) {
                    console.log("Error! " + errMsg);
                }
            };
            var videoUrl = 'https://firebasestorage.googleapis.com/v0/b/cloudfunction-9d075.appspot.com/o/tvb.mp4?alt=media&token=dada8e7b-c106-45aa-b7f0-d7af23e3c951';
            // var videoUrl = 'https://ckmobile.000webhostapp.com/tvb.mp4';
            console.log('streaming above')
            // Just play a video
            window.plugins.streamingMedia.playVideo(videoUrl, options);
            console.log('streaming below')
        },
        playvideo() {

            try {
                window.InAppYouTube.openVideo('LdgoeVqZuFo', {
                    fullscreen: true
                }, function (result) {
                    console.log(JSON.stringify(result));
                }, function (reason) {
                    console.log(reason);
                });
            } catch (e) {
                console.log(e)
            }
        }
    },
    created() {

        // var videoUrl = 'http://techslides.com/demos/sample-videos/small.mp4';

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
