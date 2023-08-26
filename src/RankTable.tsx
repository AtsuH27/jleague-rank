import { Table } from '@mantine/core';

const elements = [
  { rank: 1, name: '横浜Fマリノス',points: 68, match: 34,winnner:20,draw:8,lose:6,goalsScored:70},
  { rank: 2, name: '川崎フロンターレ',points: 66, match: 34,winnner:20,draw:6,lose:8,goalsScored:65},
  { rank: 3, name: 'サンフレッチェ広島',points: 55, match: 34,winnner:15,draw:10,lose:9,goalsScored:52},
  { rank: 4, name: '鹿島アントラーズ',points: 52, match: 34,winnner:13,draw:13,lose:8,goalsScored:47},
  { rank: 5, name: 'セレッソ大阪',points: 51, match: 34,winnner:13,draw:12,lose:9,goalsScored:46},
  { rank: 6, name: 'FC東京',points: 49, match:34,winnner:14,draw:7,lose:13,goalsScored:46},
  { rank: 7, name: '柏レイソル',points: 47, match: 34,winnner:13,draw:8,lose:13,goalsScored:43},
  { rank: 8, name: '名古屋グランパス',points: 46, match: 34,winnner:11,draw:13,lose:10,goalsScored:30},
  { rank: 9, name: '浦和レッズ',points: 45, match: 34,winnner:10,draw:15,lose:9,goalsScored:48},
  { rank: 10, name: '北海道コンサドーレ札幌',points: 45, match: 34,winnner:11,draw:12,lose:11,goalsScored:45},
  { rank: 11, name: 'サガン鳥栖',points: 42, match: 34,winnner:9,draw:15,lose:10,goalsScored:45},
  { rank: 12, name: '湘南ベルマーレ',points: 41, match: 34,winnner:10,draw:11,lose:13,goalsScored:31},
  { rank: 13, name: 'ヴィッセル神戸',points: 40, match: 34,winnner:9,draw:7,lose:16,goalsScored:35},
  { rank: 14, name: 'アビスパ福岡',points: 38, match: 34,winnner:9,draw:11,lose:14,goalsScored:29},
  { rank: 15, name: 'ガンバ大阪',points: 37, match: 34,winnner:9,draw:10,lose:15,goalsScored:33},
  { rank: 16, name: '京都サンガF.C.',points: 36, match: 34,winnner:8,draw:12,lose:14,goalsScored:30},
  { rank: 17, name: '清水エスパルス',points: 33, match: 34,winnner:7,draw:12,lose:15,goalsScored:44},
  { rank: 18, name: 'ジュビロ磐田',points: 30, match: 34,winnner:6,draw:12,lose:16,goalsScored:32}
  ];

function RankTable() {
  const ths = (
    <tr>
      <th>順位</th>
      <th>クラブ名</th>
      <th>勝点</th>
      <th>試合数</th>
      <th>勝</th>
      <th>負</th>
      <th>失点</th>
      <th>得点</th>
    </tr>
  );

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.rank}</td>
      <td>{element.name}</td>
      <td>{element.points}</td>
      <td>{element.match}</td>
      <td>{element.winnner}</td>
      <td>{element.draw}</td>
      <td>{element.lose}</td>
      <td>{element.goalsScored}</td>
    </tr>
  ));

  return (
    <Table captionSide="bottom">
      <caption  >ACL出場チーム　プレーオフ出場圏　Ｊ２降格枠</caption>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
export default RankTable;
