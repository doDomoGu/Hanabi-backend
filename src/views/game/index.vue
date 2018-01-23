<template>
  <div class="app-container">
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label='房间ID' width="95">
        <template slot-scope="scope">
          {{scope.row.room_id}}
        </template>
      </el-table-column>
      <el-table-column label="回合数" width="180" align="center">
        <template slot-scope="scope">
          {{scope.row.round_num}}
        </template>
      </el-table-column>
      <el-table-column label="当前回合玩家" width="180" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.round_player_is_host==1?'房主':'访客'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="提示数" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.cue_num}}
        </template>
      </el-table-column>
      <el-table-column label="机会数" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.chance_num}}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <!--<el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>-->
          {{scope.row.status==1?'游戏中':'N/A'}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="updated_at" label="最后修改时间" width="200">
        <template slot-scope="scope">
          <!--<i class="el-icon-time"></i>-->
          <span>{{scope.row.updated_at}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" >
        <template slot-scope="scope">

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/game'

export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.$store.getters['token']).then(response => {
        this.list = response
        this.listLoading = false
      })
    }
  }
}
</script>
