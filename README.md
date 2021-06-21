# ez-oc-player
**온라인클래스의 커스텀 플레이어를 유튜브 기본 플레이어로 바꿔주는 크롬 확장앱**



## 목차

- [INFO](#INFO)
- [기능](#기능)
- [사용법](#사용법)
- [주의](#주의)


# INFO

> EZ OC PLAYER는 *https://player.ebsoc.co.kr/?content-url=https://www.youtube.com/watch?v=ezzBP9sczZo&progress-rate=100&running-time=636&lctreLrnSqno=91253&originalFileName=undefined* 형식으로 임베디드 되어있는 URL을 *https://www.youtube.com/embed/ezzBP9sczZo* 형식으로 변환하여 커스텀 플레이어에서 제한된 기능들을 사용 할 수 있도록 도와줍니다.

# 기능

제한되어있던 기능들을 사용할수있습니다.

- 타임라인 이동
- 화질 설정 등

그외에 모든 기능을 우리에게 익숙한 유튜브 플레이어로 사용 할 수 있습니다.


# 사용법

크롬확장 프로그램 등록하여 사용 할 수 있습니다.


아래 코드를 크롬 콘솔창에 붙여넣어 바로 테스트 해볼 수도 있습니다.
```js
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
```



# 주의
- 재미삼아 만들어보았습니다.
- **본 코드로 인해 일어나는 불이익은 책임지지 않습니다.**
- 코드가 지저분합니다.
