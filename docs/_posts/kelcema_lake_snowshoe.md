Title: Kelcema Lake Snowshoe
Date: 2022.01.22
Summary: A fun showshoe trip to a deserted alpine lake
MainImage: /img/kelcema.jpg
Thumbnail: /img/kelcema_thumb.jpg
Tags: snowshoe, microadventure
Category: outdoors

Finally got out for my first proper [#microadventure][Microadventures] in several years and showshoed in to Kelcema Lake. I only saw a handful of other people, and I had the entire lake to myself for a beautiful (and cold!) night under the stars.


<p class="video-container"><video id="video0" width="100%" controls autoplay muted></video></p>
<p class="video-container"><video id="video1" width="100%" controls autoplay muted></video></p>

<script src="//cdn.jsdelivr.net/npm/hls.js@latest"></script>
<script>

    var vids = ["/img/outdoors/kelcema/snow_camp_hls/playlist.m3u8","/img/outdoors/kelcema/snowshoeing_hls/playlist.m3u8"];

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

[Microadventures]: http://www.microadventures.org/
