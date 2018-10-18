<template>
    <div>
        <van-row>
            <van-col span="12">
                <van-field label="请输入度：" error :required="true" v-model="gameLen" />
            </van-col>
            <van-col>
                <van-button type="primary" @click="gameStatr">开始</van-button>
                <van-button type="primary" @click="clickEvent(1)">up</van-button>
                <van-button type="primary" @click="clickEvent(2)">down</van-button>
                <van-button type="primary" @click="clickEvent(3)">left</van-button>
                <van-button type="primary" @click="clickEvent(4)">right</van-button>
            </van-col>
        </van-row>
        <div class="span-line van-hairline--bottom"></div>
        <div class="game-box">
            <van-row v-for="(row,rowIdx) in gameList" :key="rowIdx">
                <van-col class="box van-hairline--right van-hairline--bottom" v-for="(col,colIdx) in row" :key="colIdx">
                   <span>{{col}}</span> 
                </van-col>
            </van-row>
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
    computed:{
        // gameListSource(){
        //     return this.gameList
        // }
    },
    methods: {
        gameStatr() {
            //初始化游戏盘
            this.initGame()
        },

        initGame() {

            this.gameList = []
            for (let i =0;i< this.gameLen;i++) {
                console.log(111)

                let col = []
                for (let j =0;j< this.gameLen;j++) {
                    col.push(0)
                }
            
                this.gameList.push(col)
            }
        
        },
        test(){
            let tmp=[0,0,0,0]
            this.gameList[0][1]=22
           this. gameList.push(tmp)
           this. gameList.pop()
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
    
    text-align: center;
    vertical-align: middle;

}
.box span{
    line-height: 80px;
}
</style>