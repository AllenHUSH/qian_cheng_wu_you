<template>
  <div class="hello">
    <h1>前程无忧</h1>
    <p>使用指南：输入前程无忧详情页URL，回车确定；完成后，复制并粘贴至EXCEL。</p>
    <el-input v-model="addURL" @change="addURLFn" placeholder="请输入网址"></el-input>
    <el-table :data="infos" style="width: 100%">
      <el-table-column prop="position" label="工作地点"></el-table-column>
      <el-table-column prop="companyName" label="公司名称"></el-table-column>
      <el-table-column  label="链接地址">
         <template slot-scope="scope">
           <el-link :href="scope.row.url" target="_blank">{{scope.row.url}}</el-link>
         </template>
      </el-table-column>
      <el-table-column prop="jobName" label="职务名称"></el-table-column>
      <el-table-column label="是否推荐"></el-table-column>
      <el-table-column prop="companyNature" label="公司性质"></el-table-column>
      <el-table-column label="职务性质"></el-table-column>
      <el-table-column prop="eduBackground" label="教育背景"></el-table-column>
      <el-table-column prop="peoNum" label="需求人数"></el-table-column>
    </el-table>
    <el-button @click="infos=[]">清空</el-button>
    <div v-show="0">
      <iframe :src="addURL" frameborder="0" id="iframe"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      addURL: "",
      infos: []
    };
  },
  methods: {
    addURLFn() {
      let doc = document.getElementById("iframe").contentWindow.document;
      this.infos.push({
        position: doc
          .getElementsByClassName("ltype")[0]
          .innerText.split("|")[0],
        companyName: doc.getElementsByClassName("catn")[0].innerText,
        url: "https://jobs.51job.com" + this.addURL,
        jobName: doc
          .getElementsByClassName("cn")[0]
          .getElementsByTagName("h1")[0].innerText,
        companyNature: doc
          .getElementsByClassName("com_tag")[0]
          .getElementsByClassName("at")[0].innerText,
        eduBackground: doc
          .getElementsByClassName("ltype")[0]
          .innerText.split("|")[2],
        peoNum: doc.getElementsByClassName("ltype")[0].innerText.split("|")[3]
      });
      this.addURL = "";
    },
    deleteURLFn(index) {
      this.infos.splice(index, 1);
    }
  }
};
</script>
