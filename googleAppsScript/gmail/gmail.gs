function getContents(){
  const header = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/****************?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';

  const body = formatBodyContents();

  const footer = [
    '<a href="https://open.spotify.com/show/3z2ybR484zaXJ2Tot27dhV?si=6ba4eea3fd8446f0" rel="noopener" target="_blank">Spotify</a>',
    '<a href="https://podcasts.apple.com/jp/podcast/btob%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A8%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E8%AB%87%E8%A9%B1-b2b-communication-b2b-business/id1545745748" rel="noopener" target="_blank">Apple Podcast</a>',
    '<a href="https://music.amazon.co.jp/search/BtoB%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A8%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E8%AB%87%E8%A9%B1%20-%20B2B%20Communication%20amp;%20B2B%20Business?filter=IsLibrary%7Cfalse&sc=none" rel="noopener" target="_blank">Amazon Podcast</a>',
    '<a href="https://podcasts.google.com/search/BtoB%E3%82%B3%E3%83%9F%E3%83%A5%E3%83%8B%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A8%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E8%AB%87%E8%A9%B1%20-%20B2B%20Communication%20%26%20B2B%20Business" rel="noopener" target="_blank">Google Podcast</a>'
  ]

  return {header, body, footer}
}

function createTextMailBody(){
  let contents = getContents();
  return `${contents.header}\n\n${contents.body.map(item => item.replace('/#/g', '\n#'))}\n\n${contents.footer[0]}\n${contents.footer[1]}\n${contents.footer[2]}`;
}

function formatBodyContents(){
  let body = '日本マーケティング協会のマーケティングの定義が刷新されました。 実に34年ぶり。今回はマーケティングの定義について話をしました。  34年振りにマーケティングの定義を刷新https://www.jma2-jp.org/home/news/916-marketing  AMA マーケティングの定義https://www.ama.org/the-definition-of-marketing-what-is-marketing/  参考文献・マーケティングの新定義（2004年）についてhttps://bunkyo.repo.nii.ac.jp/record/3604/files/BKS0000177.pdf○どうでもいい話は、「Temuで買ったSDカード」という話です。 #マーケティング #セールス #コミュニケーション #顧客視点 #コンテンツ #ビジネス #BtoB #BtoBマーケティング  （提供：株式会社コロンバスプロジェクト　https://columbusproject.co.jp）';

  splitBody = body.split(/\s{2,}|(?=https:\/\/)|(?=#)|pdf/)
                   .map(item => item.trimStart());

  return splitBody;
}

console.log(formatBodyContents());

function createHTMLMailBody(){
  let contents = getContents();
  let header = contents.header;
  let body = `<div>${contents.body.join('<br>')}</div>`;
  let footer = `<ul><li>${contents.footer[0]}</li><li>${contents.footer[1]}</li><li>${contents.footer[1]}</li><ul>`;

  return `${header}${body}${footer}`
}

function sendMail(){
  const rec = 'runnrunn400.krag@gmail.com';
  const subject = 'SpotifyPodcastEpisodeの名前';
  const htmlBody = createHTMLMailBody();
  const textBody = createTextMailBody();

  console.log(htmlBody)

  GmailApp.sendEmail(rec, subject, textBody, { htmlBody: htmlBody });
}

sendMail();