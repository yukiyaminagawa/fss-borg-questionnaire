
// /* documentの中からidがmessageの要素を一個持ってくる */ 
// const message = document.getElementById("message");
// const button = document.getElementById("changeBtn");
// button.addEventListener("click" , ()=> {
//   message.textContent ="ボタンが押されました！";
// });

const mainInfo = document.getElementById("mainInfo");
mainInfo.innerHTML =`
※アンケートに関する個人情報は新潟大学で保管し，ラベルによって運営されます．こうして個
人情報の拡散を防ぎ，研究対象者から辞退希望があった場合は，研究責任者の責任のもとでその
研究対象者のアンケートが破棄されます．
`;

const borgInfo = document.getElementById("borgInfo");
borgInfo.innerHTML = `
  <h2>Borgスケール（主観的運動強度）</h2>
  <p>
    今行った実験に関してどれくらいのきつさ, 疲れ, 楽かなどを感じたかを6～20までの数字いずれかを一つ選んでください. <br>
    回答は直感的で構いません．<br>
    演奏全体を振り返って最も近いものを選択してください．

  </p>
`;

const borgTable = document.getElementById("borgTable");
borgTable.innerHTML = `
<table class="borg-table">
    <tr><td>20</td><td></td></tr>
    <tr><td>19</td><td>非常にきつい</td></tr>
    <tr><td>18</td><td></td></tr>
    <tr><td>17</td><td>かなりきつい</td></tr>
    <tr><td>16</td><td></td></tr>
    <tr><td>15</td><td>きつい</td></tr>
    <tr><td>14</td><td></td></tr>
    <tr><td>13</td><td>ややきつい</td></tr>
    <tr><td>12</td><td></td></tr>
    <tr><td>11</td><td>楽である</td></tr>
    <tr><td>10</td><td></td></tr>
    <tr><td>9</td><td>かなり楽である</td></tr>
    <tr><td>8</td><td></td></tr>
    <tr><td>7</td><td>非常に楽である</td></tr>
    <tr><td>6</td><td></td></tr>
  </table>
`;

const borgAnswer = document.getElementById("borgAnswer");
let borgOptionsHTML = "";
for (let i = 6; i <= 20; i++) {
  borgOptionsHTML += `
    <label style="margin-right: 8px;">
      <input type="radio" name="borg" value="${i}"> ${i}
    </label>
  `;
}
borgAnswer.innerHTML = `
  <div>${borgOptionsHTML}</div>
`;
let borgValue = null;
document.addEventListener("change", (event) => {
  if (event.target.name === "borg") {
    borgValue = Number(event.target.value);
    console.log("Borg値:", borgValue);
  }
});


const fssInfo = document.getElementById("fssInfo");
fssInfo.innerHTML = `
  <h2>FSS</h2>
  <p>
    今行った実験に関して, 下記の質問に1～5（1：当てはまらない, 2：あまり当てはまらない, 3：どちらともいえない, 4：少し当てはまる, 5：当てはまる）で答えてください.
  </p>
  <p>
    回答は直感的で構いません．<br>
    演奏全体を振り返って最も近いものを選択してください．
  </p>
`;


const questions =[
  {id: 1 , text: "自分は，挑戦した演奏に見合う技能を持っていると感じた．" , factor:"挑戦と能力のバランス"},
  {id: 2 , text: "演奏中，何をしようかあまり考えなくとも自然に正しい動きができていた．", factor:"行為と意識の統合"},
  {id: 3 , text: "演奏中何をしたいのかはっきりしていた．", factor:"明確な目標"},
  {id: 4 , text: "どうすれば上手く演奏できるか良い考えを持っていた．", factor:"明確なフィードバック"},
  {id: 5 , text: "私は完全に演奏に集中していた．", factor:"活動への注意意識"},
  {id: 6 , text: "自分自身のことは自分でコントロールできると感じていた．", factor:"統制感覚"},
  {id: 7 , text: "他人が自分をどう思っているかを心配することはなかった", factor:"自意識の喪失"},
  {id: 8 , text: "時間が止まっているように感じられた．", factor:"時間感覚の喪失"},
  {id: 9 , text: "演奏が本当に楽しかった．", factor:"自己目的的体験"},
  {id: 10, text: "演奏に必要とされた技能を十分持っていると感じた．", factor:"挑戦と能力のバランス"},
  {id: 11, text: "演奏中，無意識のうちに身体を動かしていた．", factor:"行為と意識の統合"},
  {id: 12, text: "自分の目標がはっきりしていた．", factor:"明確な目標"},
  {id: 13, text: "どのように上手くできているか，わかっていた．", factor:"明確なフィードバック"},
  {id: 14, text: "演奏に完全に集中していた．", factor:"活動への注意意識"},
  {id: 15, text: "行っていることが自分でコントロールできていると感じた．", factor:"統制感覚"},
  {id: 16, text: "他人が自分のことをどう思っているかなどは気にならなかった．", factor:"自意識の喪失"},
  {id: 17, text: "物事がスローモーションで起こっているように感じられた．", factor:"時間感覚の喪失"},
  {id: 18, text: "とてもいい体験だった．", factor:"自己目的的体験"},
  {id: 19, text: "演奏中，困難な状況でも対応するだけの技能を持っていた．", factor:"挑戦と能力のバランス"},
  {id: 20, text: "考えることなく，無意識的，自動的に動かしていた．", factor:"行為と意識の統合"},
  {id: 21, text: "自分のやりたいことは何か，強く感じていた．", factor:"明確な目標"},
  {id: 22, text: "どれくらい上手にできているか気づいていた．", factor:"明確なフィードバック"},
  {id: 23, text: "私のすべての意識はやっていることに集中していた．", factor:"活動への注意意識"},
  {id: 24, text: "私は思うように自分の体を動かしていた．", factor:"統制感覚"},
  {id: 25, text: "自分をよく見せようという気持ちにならなかった．", factor:"自意識の喪失"},
  {id: 26, text: "時間が遅くなったり早くなったり，変化しているように感じた．", factor:"時間感覚の喪失"},
  {id: 27, text: "演奏中の感覚が好きで，また感じてみたい．", factor:"自己目的的体験"},
  {id: 28, text: "私は演奏の難易度と同じ程度の技術を持っていると感じた．", factor:"挑戦と能力のバランス"},
  {id: 29, text: "演奏中の出来事は自然に起こっているように感じられた．", factor:"行為と意識の統合"},
  {id: 30, text: "何をしたいのかわかっていた．", factor:"明確な目標"},
  {id: 31, text: "自分が上手にできていることが分かっていた．", factor:"明確なフィードバック"},
  {id: 32, text: "努力しなくても行っていることに集中できていた．", factor:"活動への注意意識"},
  {id: 33, text: "完全に思い通りに動いているような感覚だった．", factor:"統制感覚"},
  {id: 34, text: "自分を心配することがなかった．", factor:"自意識の喪失"},
  {id: 35, text: "時間の過ぎ方が普段と違うように感じた．", factor:"時間感覚の喪失"},
  {id: 36, text: "演奏は素晴らしい喜びに導いてくれた．", factor:"自己目的的体験"},
];
const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);

const area =document.getElementById("questionArea");
/* question.id と question.text を使ってHTMLを組み立ててquestionArea の中に入れる */
// questions の中から1個ずつ質問を取り出してそれをquestionという名前で扱う
shuffledQuestions.forEach((question) => {
  let optionsHTML = "";
  for (let i = 1; i <= 5; i++){
    optionsHTML +=`
    <label><input type="radio" name="q${question.id}" value="${i}">${i}</label>
    `;
  }
  area.innerHTML +=`
  <div style ="margin-bottom: 16px;"><p>${question.id}.${question.text}</p>${optionsHTML}</div>
  `;
})

const answers ={};
document.addEventListener("change" , (event) =>{
  if(event.target.type === "radio"){
    // name="q1" → "1" を取り出す
    const questionId = event.target.name.replace("q","");
    // value は文字列なので数値に変換
    const value = Number (event.target.value);
    // 回答を保存
    answers[questionId] = value ;

    console.log("保存された回答", answers);
  }
});

function createCSV(questions, answers, borgValue){
  // 1行目
  const meta = `# borg,${borgValue ?? ""}`;
  const header ="question_id,factor,question_text,answer";
  // ２行目以降
  const rows =questions.map((q) => {
    const answer =answers[q.id] ?? "";
    return `${q.id},${q.factor},"${q.text}",${answer}`;
  });

  return meta + "\n" +header + "\n" + rows.join("\n");
}

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {
  const csv = createCSV(questions,answers,borgValue);

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;"
  });
const url = URL.createObjectURL(blob);

const a = document.createElement("a");
  a.href = url;
  a.download = "fss_borg_answers.csv";
  a.click();

  URL.revokeObjectURL(url);
});