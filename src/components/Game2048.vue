<template>
    <div>
        <van-row>
            <van-col span="12">
                <van-field label="请输入度：" error :required="true" v-model="gameLen" />
            </van-col>
            <van-col>
                <van-button type="primary" @click="gameStatr">开始</van-button>
            </van-col>
        </van-row>
        <div class="span-line van-hairline--bottom"></div>
        <div class="game-box">
            <div v-for="(row,rowIdx) in gameList" :key="rowIdx">
                <div class="box" v-for="(col,colIdx) in row" :key="colIdx">
                    {{col}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            gameLen: 10,
            gameList: [],
        }

    },
    methods: {
        gameStatr() {
            //初始化游戏盘
            this.initGame()
        },

        initGame() {

            this.gameList = []
            for (let i in this.gameLen) {
                console.log(111)

                let col = []
                for (let j in this.gameLen) {
                    col.push(0)
                }
                this.gameList.push(col)
            }
            console.log(this.gameLen)
            console.log(this.gameList)
        }
    }

}
</script>
<style scoped>
.van-col {
    height: 100px;
}

.game-box {}

.box {

    width: 80px;
    height: 80px;
    padding-left: 5px;
    padding-top: 5px;
    background-color: red;
    text-align: center;
    vertical-align: middle;

}
</style>