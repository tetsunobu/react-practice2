/**@jsxImportSourse @emotion/react */
import { css } from "@emotion/react";

export const Emotion = () => {
  //scss の書き方がそのまま可能な書き方
  const containerStyle = css`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <div css={containerStyle}>
      <p>Emotionです</p>
      <button>ボタン</button>
    </div>
  );
};
