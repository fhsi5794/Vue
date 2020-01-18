<template>
    <div class="card_wall">
        <select  v-model="selectedCard">
            <option v-for="item in cardData" :key="item.name"  v-bind:value="item">
              {{ item.name }}
            </option>
        </select>
        <div class="card">
            <div class="card_title">{{ selectedCard.name }}</div>
            <div class="card_body">
                <p>生日：{{ selectedCard.birthday }}</p>
                <p>e-mail：{{ selectedCard.mail }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardData: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
        selectedCard:'請選擇姓名'
        }
    }
}
</script>

<style scoped>
    .card {
        width: 300px;
        margin: 10px;
        background: white;
        border: 1px solid #cccccc;
        border-radius: 6px;
        box-shadow: 0 0 4px 0 rgba(0,0,0,0.2);
    }
    .card_title {
        padding: 16px;
        border-bottom: 1px solid #cccccc;
        color: black;
        font-size: 20px;
        line-height: 26px;
        font-weight: bold;
    }
    .card_body {
        padding: 16px;
        color: #555555;
        font-size: 16px;
        line-height: 22px;
    }
</style>