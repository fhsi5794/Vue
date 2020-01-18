<template>
  <div class="allCard">
    <h1>This is an All Cards page</h1>
    <h2>Left side are all name cards,and right side you can select paticular card.</h2>
    <div class="cards">
      <div class="left"><Card :cardData="cardData" /></div>
      <div class="right"><selectCard :cardData="cardData" /></div>
    </div>
  </div>
</template>
<script>
  import Card from '../components/Card'
  import selectCard from '../components/selectCard'
  export default {
    name: 'allCard',
    components: {
      Card,
      selectCard
    },
    data() {
      return {
        cardData:[
          {
            index:0,
            name:'Adam',
            birthday:'1985.08.12',
            mail:'adam@xxx.com'
          },
          {
            index:1,
            name:'Jack',
            birthday:'1980.02.23',
            mail:'jack@xxx.com'
          },
          {
            index:2,
            name:'Candy',
            birthday:'1982.05.06',
            mail:'candy@xxx.com'
          },
          {
            index:3,
            name:'Louis',
            birthday:'1984.11.21',
            mail:'loui@xxx.com'
          },
          {
            index:4,
            name:'Lurry',
            birthday:'1982.01.17',
            mail:'lurry@xxx.com'
          }
        ]
      }
    } 
  }
</script>
  
<style scoped>
 
  .left 
  {
    float: left;
    position: absolute;
    left: 25%;
  }
  .right 
  {
    margin-left: 310px;
    position: absolute;
    right: 25%;
  }
 
</style>