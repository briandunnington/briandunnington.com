Title: Lily Lizard Overnight
Date: 2026.02.28
Summary: Keeping the microadventures going with a short overnight at Lizard Lake
MainImage: /img/lilylizard.jpg
Thumbnail: /img/lilylizard_thumb.jpg
Tags: hiking, microadventure
Category: outdoors

After a successful [microadventure in January][blewett] I wanted to keep the momentum going. Got down to the last day of the month, but I got out for a fun overnighter at Lily and Lizard Lakes on Blanchard Mountain.

<p>
<figure><img src="/img/outdoors/lilylizard/map.png" class="largeimg" />
</figure>
</p>

<p class="video-container"><video id="video0" width="100%" height="56%" controls autoplay muted></video></p>


<script src="//cdn.jsdelivr.net/npm/hls.js@latest"></script>
<script>

    var vids = ["/img/outdoors/lilylizard/playlist.m3u8"];

    var hlses = [];

    for (var i=0;i<vids.length;i++)
    {
        var video = document.getElementById(`video${i}`);
        if (Hls.isSupported()) {
            video.twitterSourceVid = vids[i];
            var hls = new Hls();
            hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                this.loadSource(this.media.twitterSourceVid);
                this.on(Hls.Events.MANIFEST_PARSED, function () {
                    this.media.play();
                });
            });
            hls.attachMedia(video);
            hlses[i] = hls;
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = vids[i];
        }
    }
</script>

[blewett]: blewett_pass_snow_bike
