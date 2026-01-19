Title: Blewett Pass Snow Biking & Camping
Date: 2026.01.17
Summary: Some winter fatbiking and camping to kick off a new year of microadventures
MainImage: /img/blewett.jpg
Thumbnail: /img/blewett_thumb.jpg
Tags: fatbike, winter, microadventure
Category: outdoors

It has been a few years since I have done any [#microadventure][Microadventures] but I decided to do one every month of 2026. Kicked it off with a fatbike ride and overnight camp at Blewett Pass (Wenatchee Crest trail). There wasnt a lot of snow, but enough to have some fun.


<p class="video-container"><video id="video0" width="100%" height="56%" controls autoplay muted></video></p>

<p>
<figure><img src="/img/outdoors/blewett/bike.jpg" class="largeimg" />
</figure>
</p>

<p>
<figure><img src="/img/outdoors/blewett/tent.jpg" class="largeimg" />
</figure>
</p>

<script src="//cdn.jsdelivr.net/npm/hls.js@latest"></script>
<script>

    var vids = ["/img/outdoors/blewett/playlist.m3u8"];

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
