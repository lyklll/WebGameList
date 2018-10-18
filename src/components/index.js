import game2048 from '@/components/Game2048'

export default {
    install(vue, options) {      
    	
        vue.component('game2048', game2048);         
    	
    	// vue.component('appGoodsList', appGoodsList);       

    }
}