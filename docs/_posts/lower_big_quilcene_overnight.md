Title: Lower Big Quilcene River Overnight
Date: 2026.03.29
Summary: A quick microadventure on the Olympic penninsula's Lower Big Quilcene River trail
MainImage: /img/lowerbigquilcene.jpg
Thumbnail: /img/lowerbigquilcene_thumb.jpg
Tags: hiking, microadventure
Category: outdoors

January brought [a fun snow biking trip on Blewett Pass][blewett] and February brought [a nice hike at Lily Lizard Lakes][lilylizard], but March was quickly coming to a close and I had not gotten out yet. I waited until the very last day of the month but made a trip to the Olympic Penninsula and hiked the [Lower Big Quilcene River trail][wta]. It was a nice easy trail along a beautiful river. But I didnt even start hiking until after 5pm so I didnt stop to take many pictures. The next morning, just as I was packing up my camp to hike back out - there is nothing quite like the peacefulness of snow falling in the forest. If you have not checked out this area, I highly recommend it.

<p class="video-container"><video id="video0" width="100%" height="56%" controls autoplay muted></video></p>

<p class="video-container"><video id="video1" width="100%" height="56%" controls autoplay muted></video></p>


<script src="//cdn.jsdelivr.net/npm/hls.js@latest"></script>
<script>

    var vids = ["/img/outdoors/lowerbigquilcene/creek/playlist.m3u8","/img/outdoors/lowerbigquilcene/trail/playlist.m3u8"];

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
[lilylizard]: lily_lizard_overnight
[wta]: https://www.wta.org/go-hiking/hikes/lower-big-quilcene-river
