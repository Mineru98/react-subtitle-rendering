import React, { useEffect, useState } from "react";
import "./App.css";

import { useTransition, animated } from "@react-spring/web";

type TypeOfSubTitle = {
  index: number;
  timestamp: string;
  duration?: number;
  text: string;
};

const subtitles: TypeOfSubTitle[] = [
  {
    index: 1,
    timestamp: "00:00:00,000 --> 00:00:01,568",
    text: "<span style='color: #0A0A0AFF'>안녕하세요 여러분</span>",
  },
  {
    index: 2,
    timestamp: "00:00:01,568 --> 00:00:03,436",
    text: "<span style='color: #0A0A0AFF'>오늘은 </span><span style='color: #5876ECFF'>대출 규제 완화</span><span style='color: #0A0A0AFF'>와</span>",
  },
  {
    index: 3,
    timestamp: "00:00:03,436 --> 00:00:04,738",
    text: "<span style='color: #0A0A0AFF'>전세사기 피해자에 대한</span>",
  },
  {
    index: 4,
    timestamp: "00:00:04,738 --> 00:00:08,074",
    text: "<span style='color: #5876ECFF'>특별 대출 지원 방안</span><span style='color: #0A0A0AFF'>에 대해 이야기해 보려고 합니다</span>",
  },
  {
    index: 5,
    timestamp: "00:00:08,074 --> 00:00:10,777",
    text: "<span style='color: #0A0A0AFF'>최근 금융당국이 전세사기 피해자를 위한</span>",
  },
  {
    index: 6,
    timestamp: "00:00:10,777 --> 00:00:13,680",
    text: "<span style='color: #5876ECFF'>금융지원 프로그램</span><span style='color: #0A0A0AFF'>을 시작한다고 밝혔습니다</span>",
  },
  {
    index: 7,
    timestamp: "00:00:13,680 --> 00:00:15,815",
    text: "<span style='color: #0A0A0AFF'>피해자들이 정상적인 금융생활을</span>",
  },
  {
    index: 8,
    timestamp: "00:00:15,815 --> 00:00:17,817",
    text: "<span style='color: #0A0A0AFF'>이어가도록 돕기 위한 조치인데요</span>",
  },
  {
    index: 9,
    timestamp: "00:00:17,817 --> 00:00:21,721",
    text: "<span style='color: #0A0A0AFF'>첫째로 은행과 같은 전세대출 취급금융기관에서</span>",
  },
  {
    index: 10,
    timestamp: "00:00:21,721 --> 00:00:24,224",
    text: "<span style='color: #0A0A0AFF'>전세사기 피해자들의 연체정보 등록을</span>",
  },
  {
    index: 11,
    timestamp: "00:00:24,224 --> 00:00:26,559",
    text: "<span style='color: #0A0A0AFF'>일정기간 유예해줄 예정입니다</span>",
  },
  {
    index: 12,
    timestamp: "00:00:26,559 --> 00:00:28,628",
    text: "<span style='color: #0A0A0AFF'>이렇게 함으로써 전세대출 상환에</span>",
  },
  {
    index: 13,
    timestamp: "00:00:28,628 --> 00:00:30,897",
    text: "<span style='color: #0A0A0AFF'>어려움을 겪던 피해자들의 금융생활이</span>",
  },
  {
    index: 14,
    timestamp: "00:00:30,897 --> 00:00:33,266",
    text: "<span style='color: #0A0A0AFF'>좀 더 원활해질 것으로 기대됩니다</span>",
  },
  {
    index: 15,
    timestamp: "00:00:33,266 --> 00:00:35,502",
    text: "<span style='color: #0A0A0AFF'>둘째로  보증사와 함께 피해자들의</span>",
  },
  {
    index: 16,
    timestamp: "00:00:35,502 --> 00:00:38,538",
    text: "<span style='color: #0A0A0AFF'>전세대출 채무에 대한 분할 상환약정을 체결해</span>",
  },
  {
    index: 17,
    timestamp: "00:00:38,538 --> 00:00:40,907",
    text: "<span style='color: #5876ECFF'>보증사</span><span style='color: #0A0A0AFF'>가 은행에 </span><span style='color: #5876ECFF'>우선 상환</span><span style='color: #0A0A0AFF'>한 뒤</span>",
  },
  {
    index: 18,
    timestamp: "00:00:40,907 --> 00:00:42,942",
    text: "<span style='color: #0A0A0AFF'>피해자들이 </span><span style='color: #5876ECFF'>최장 20년</span><span style='color: #0A0A0AFF'> 동안</span>",
  },
  {
    index: 19,
    timestamp: "00:00:42,942 --> 00:00:45,412",
    text: "<span style='color: #5876ECFF'>무이자로 분할 상환</span><span style='color: #0A0A0AFF'>할 수 있게 됩니다</span>",
  },
  {
    index: 20,
    timestamp: "00:00:45,412 --> 00:00:48,281",
    text: "<span style='color: #0A0A0AFF'>당장의 상환이 어려운 피해자 분들의 경우</span>",
  },
  {
    index: 21,
    timestamp: "00:00:48,281 --> 00:00:51,851",
    text: "<span style='color: #0A0A0AFF'>최대 2년간 </span><span style='color: #5876ECFF'>상환 유예기간도 설정</span><span style='color: #0A0A0AFF'>할 수 있다고 하니</span>",
  },
  {
    index: 22,
    timestamp: "00:00:51,851 --> 00:00:54,187",
    text: "<span style='color: #0A0A0AFF'>자세한 내용이 필요하신 분들은</span>",
  },
  {
    index: 23,
    timestamp: "00:00:54,187 --> 00:00:55,588",
    text: "<span style='color: #0A0A0AFF'>전세대출을 이용한</span>",
  },
  {
    index: 24,
    timestamp: "00:00:55,588 --> 00:00:57,924",
    text: "<span style='color: #0A0A0AFF'>금융회사 창구나 보증기관에서</span>",
  },
  {
    index: 25,
    timestamp: "00:00:57,924 --> 00:01:00,460",
    text: "<span style='color: #0A0A0AFF'>상세한 안내를 받으시면 좋겠습니다</span>",
  },
  {
    index: 26,
    timestamp: "00:01:00,460 --> 00:01:04,164",
    text: "<span style='color: #0A0A0AFF'>세 번째로 전세사기 피해자들의 주거안정을 위해</span>",
  },
  {
    index: 27,
    timestamp: "00:01:04,164 --> 00:01:08,635",
    text: "<span style='color: #0A0A0AFF'>주택담보대출비율과 총부채원리금상환비율 등의 규제가</span>",
  },
  {
    index: 28,
    timestamp: "00:01:08,635 --> 00:01:11,004",
    text: "<span style='color: #0A0A0AFF'>1년 동안 한시적으로 완화 됩니다</span>",
  },
  {
    index: 29,
    timestamp: "00:01:11,004 --> 00:01:12,272",
    text: "<span style='color: #0A0A0AFF'>이를 통해 피해자들이</span>",
  },
  {
    index: 30,
    timestamp: "00:01:12,272 --> 00:01:14,741",
    text: "<span style='color: #0A0A0AFF'>새로운 주택을 구입하는 데 있어서도</span>",
  },
  {
    index: 31,
    timestamp: "00:01:14,741 --> 00:01:17,444",
    text: "<span style='color: #0A0A0AFF'>좀더 유리한 조건을 얻을 수 있게 됩니다</span>",
  },
  {
    index: 32,
    timestamp: "00:01:17,444 --> 00:01:20,914",
    text: "<span style='color: #0A0A0AFF'>더 나아가 </span><span style='color: #5876ECFF'>전세사기 피해자 특례 보금자리론</span><span style='color: #0A0A0AFF'>이라는 </span>",
  },
  {
    index: 33,
    timestamp: "00:01:20,914 --> 00:01:23,016",
    text: "<span style='color: #0A0A0AFF'>새로운 대출방안도 출시됩니다</span>",
  },
  {
    index: 34,
    timestamp: "00:01:23,016 --> 00:01:25,452",
    text: "<span style='color: #0A0A0AFF'>이는 전세사기 피해자가 해당 주택을</span>",
  },
  {
    index: 35,
    timestamp: "00:01:25,452 --> 00:01:27,387",
    text: "<span style='color: #0A0A0AFF'>경매나 공매로 취득하거나</span>",
  },
  {
    index: 36,
    timestamp: "00:01:27,387 --> 00:01:29,889",
    text: "<span style='color: #0A0A0AFF'>다른 일반 주택을 구입할 경우</span>",
  },
  {
    index: 37,
    timestamp: "00:01:29,889 --> 00:01:31,891",
    text: "<span style='color: #0A0A0AFF'>주택가격의 일정비율까지</span>",
  },
  {
    index: 38,
    timestamp: "00:01:31,891 --> 00:01:34,561",
    text: "<span style='color: #0A0A0AFF'>대출을 받을 수 있게 해주는 방안입니다</span>",
  },
  {
    index: 39,
    timestamp: "00:01:34,561 --> 00:01:35,528",
    text: "<span style='color: #0A0A0AFF'>이 모든 지원이</span>",
  },
  {
    index: 40,
    timestamp: "00:01:35,528 --> 00:01:38,198",
    text: "<span style='color: #0A0A0AFF'>전세 사기 피해자들의 금융적 부담을 줄이고</span>",
  },
  {
    index: 41,
    timestamp: "00:01:38,198 --> 00:01:41,000",
    text: "<span style='color: #0A0A0AFF'>더 안정적인 주거생활을 이어갈 수 있도록</span>",
  },
  {
    index: 42,
    timestamp: "00:01:41,000 --> 00:01:42,836",
    text: "<span style='color: #0A0A0AFF'>도와줄 것으로 예상됩니다</span>",
  },
  {
    index: 43,
    timestamp: "00:01:42,836 --> 00:01:44,737",
    text: "<span style='color: #0A0A0AFF'>오늘의 내용이 도움이 되셨다면</span>",
  },
  {
    index: 44,
    timestamp: "00:01:44,737 --> 00:01:48,541",
    text: "<span style='color: #0A0A0AFF'>좋아요와 구독 부탁드리며</span>",
  },
];

function convertToMillisecondsFormat(time: string): number {
  const parts = time.split(":");
  const hour = parseInt(parts[0]);
  const minute = parseInt(parts[1]);
  const second = parseInt(parts[2].split(",")[0]);
  const millisecond = parseInt(parts[2].split(",")[1]);

  const totalMilliseconds = hour * 3600000 + minute * 60000 + second * 1000 + millisecond;

  return totalMilliseconds;
}

function convertToMilliseconds(subtitles: TypeOfSubTitle[]): TypeOfSubTitle[] {
  const convertedSubtitles = [];
  for (let i = 0; i < subtitles.length; i++) {
    const subtitle = subtitles[i];
    const start = subtitle.timestamp.split(" --> ")[0];
    const end = subtitle.timestamp.split(" --> ")[1];

    const startMilliseconds = convertToMillisecondsFormat(start);
    const endMilliseconds = convertToMillisecondsFormat(end);

    const convertedSubtitle = {
      index: subtitle.index,
      timestamp: subtitle.timestamp,
      duration: endMilliseconds - startMilliseconds,
      text: subtitle.text,
    };

    convertedSubtitles.push(convertedSubtitle);
  }

  return convertedSubtitles;
}

const FadeIn = ({ style, children }: any) => {
  return (
    <animated.span style={{ ...style, background: "white", borderRadius: "4px", padding: children.length !== 0 ? "4px" : 0 }}>
      <span style={{ color: "black" }} dangerouslySetInnerHTML={{ __html: children }}></span>
    </animated.span>
  );
};

function App() {
  const [index, setIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [texts, setTexts] = useState<TypeOfSubTitle[]>([]);

  useEffect(() => {
    if (isLoading) {
      setTexts(convertToMilliseconds(subtitles));
      setIsLoading(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      const intervalId = setInterval(() => setIndex((index) => index + 1), texts[index % texts.length].duration);
      return () => clearTimeout(intervalId);
    }
  }, [isLoading, index, texts]);

  const transitions = useTransition(index % texts.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    enter: { opacity: 1 },
    config: {},
  });

  return (
    <div className="App">
      <header className="App-header">
        {!isLoading &&
          transitions((style, i) => {
            if (i === index % texts.length) {
              return <FadeIn style={style}>{texts[index % texts.length].text}</FadeIn>;
            } else {
              return null;
            }
          })}
      </header>
    </div>
  );
}

export default App;
