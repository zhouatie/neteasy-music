import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import Main from "@/components/Main.vue"
import Fxyy from "@/components/fxyy/Fxyy.vue"
import Tuijian from "@/components/fxyy/Tuijian.vue"
import RankList from "@/components/fxyy/RankList.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name:'index',
      path:'/',
      redirect:'/fxyy/tuijian',
      component:Index,
      children: [
        {
          name:'fxyy',
          path:'/fxyy',
          component:Fxyy,
          children:[
            {
              name:'tuijian',
              path:"/fxyy/tuijian",
              component:Tuijian
            },
            {
              name:'rank-list',
              path:"/fxyy/rank-list",
              component:RankList
            },
            {
              name:'song-list',
              path:"/fxyy/song-list",
              component:Tuijian
            },
            {
              name:'zb-dt',
              path:"/fxyy/zb-dt",
              component:Tuijian
            },
            {
              name:'new-music',
              path:"/fxyy/new-music",
              component:Tuijian
            },
          ]
        },
        {
          name:'srfm',
          path:'/srfm',
          component:Main
        }
      ]
    }
  ],
  scrollBehavior (to,from,savePosition) {
    return {x:0,y:0};
  }
})
