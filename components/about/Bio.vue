<template>
<div class="bio">
  <table>
    <tr>
      <th>2019.03</th>
      <td>筑波大学 応用理工学類 卒業 / 学修優秀賞 受賞</td>
    </tr>
    <tr>
      <th>2019.10</th>
      <td>サービス マネジメントに関する国際学会への論文投稿<br>
      Highly Commended Award 受賞</td>
    </tr>
    <tr>
      <th>2021.01</th>
      <td>機械学習に関する国際学会への論文投稿</td>
    </tr>
    <tr>
      <th>2021.03</th>
      <td>筑波大学 システム情報工学研究科 サービス工学学位プログラム 卒業 <br> 社会工学専攻 専攻長賞 受賞</td>
    </tr>
    <tr>
      <th>2021.04</th>
      <td>日本マイクロソフト 入社</td>
    </tr>
  </table>
</div>
</template>

<style lang="scss">
@use "@/assets/css/main";

.bio {
  padding-top: main.$v-margin-16;
}

table {
  margin: main.$v-margin-16 0;
  font-weight: 200;
  width: 100%;
  text-align: left;

  & th {
    font-weight: normal;
    padding: 0.6rem;
    width: 100px;
  }
}

@media (max-width: 744px) {
  table {
    margin: 0;
  }
}

</style>
