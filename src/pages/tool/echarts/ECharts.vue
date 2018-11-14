<template>
  <div class="flex-column">
    <BarChart1/>
  </div>
</template>

<script>
// import * as api from '@/api/test.js'
import BarChart1 from './BarChart1'

export default {
  name: 'ECharts',
  components: {BarChart1},
  data () {
    return {
    }
  },
  mounted () {
  },
  nextTick () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../../styles/pages.css';

  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
