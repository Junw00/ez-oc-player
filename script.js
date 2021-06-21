var existCondition = setInterval(function () {
    if (document.getElementById("player").src.length > 0) {
        var oc_video = document.getElementById("player").src

        console.log(oc_video)

        var url = new URL(
            oc_video
        );

        var m_url = (url.searchParams.get('content-url')) // => 'https://www.youtube.com/watch?v=xxxxx'
        console.log(m_url)

        var url = new URL(m_url);

        const video_id = url.searchParams.get('v')

        var furl = url.protocol + "//" + url.hostname + '/embed/'+video_id;

        document.getElementById("player").src = furl

        clearInterval(existCondition);
    }
}, 100);