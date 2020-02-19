<template>
  <div class="exampleDemo">
    <div class="item">
      <aggregate />
    </div>
    <div class="item">
      <elButtonIconMe icon="el-icon-edit" @click="btClick">999999</elButtonIconMe>
    </div>
    <div class="item">
      <!-- <elPaginationMe
        :currentPage="page.page"
        :pageSize="page.pageSize"
        :total="page.total"
        @onChange="handlePageChange"
      /> -->
    </div>
    <div class="item">
      <el-form ref="form" :model="form" label-width="80px">
        <elInputMe label="名称" v-model="roleName" />
      </el-form>
    </div>
  </div>
</template>

<script>
import { test, elButtonIconMe, elPaginationMe, elInputMe } from '@zech126/aggregate'

export default {
  name: 'exampleDemo',
  components: {
    aggregate: test,
    elButtonIconMe,
    elPaginationMe,
    elInputMe
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      page: {
        page: 1,
        pageSize: 20,
        total: 200
      },
      roleName: '123',
      form: {}
    }
  },
  mounted () {},
  methods: {
    handlePageChange () {
      console.log('handlePageChange')
    },
    btClick () {
      console.log('btClick')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.exampleDemo{
  padding: 20px 50px;
  text-align: left;
}
.exampleDemo .item{
  margin: 10px;
}
</style>
