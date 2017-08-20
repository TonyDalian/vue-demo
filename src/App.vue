<template>
  <div id="app">
   <!--  <img src="./assets/logo.png">
   <h1>Hello App!</h1> -->
    <v-loading v-show="loading"></v-loading>

    <v-header :title="title" :menu-display="menuDisplay" :back-display="backDisplay" :map-display="mapDisplay"></v-header>
    <div class="content" :class="{tabar: tabar}">
            <transition name="slide-left">
                <router-view></router-view>
            </transition>  
    </div>
    <v-tabar></v-tabar>
    <v-sidebar></v-sidebar>

    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- <router-link> will be rendered as an `<a>` tag by default -->
   <!--  <p>
    <router-link to="/hello">Go to Hello</router-link>
    <router-link to="/counter">Go to Counter</router-link>
    <router-link to="/user/login">Go to Login</router-link>
    </p> -->
   <router-view></router-view>
  </div>
</template>

<script>
import tabar from '@/components/tabar'
import header from '@/components/header'
import sidebar from '@/components/sidebar'
import loading from '@/components/loading'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    'v-tabar': tabar,
    'v-header': header,
    'v-sidebar': sidebar,
    'v-loading': loading,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'hideMenuSlide'
  },
  methods: {
      ...mapActions({ setNavState: 'setNavState' }),
      // 隐藏MenuSlide
      hideMenuSlide() {
        this.setNavState(false)
      }
  },
  computed: {
    ...mapGetters([
       'loading'
    ]),
    title () {
          switch (this.$route.path.split('/')[1]) {
              case '':
                return "Qu约"
              case 'home':
                return "Qu约"
              case 'sport':
                return "约跑"
              case 'travel':
                return "约行"
              case 'user':
                return "我的"
          }
    },
    tabar () {
        return this.$route.path.split('/').length > 2 ? false : true
    },
    menuDisplay () {
        if (this.$route.path.split('/')[1] == 'home') {
          return false
        }
        return this.$route.path.split('/').length > 2 ? false : true
    },
    backDisplay () {
      return this.$route.path.split('/').length > 2 ? true : false
    },
    mapDisplay () {
      if (this.$route.path.split('/')[1] == 'home') {
        return true
      }
      return false
    }
  } 
}

</script>

<style lang="scss">
@import './assets/css/function';

@font-face {
  font-family: 'icon';  /* project id 172436 */
  src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot');
  src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.woff') format('woff'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_w71lovnj7adobt9.svg#iconfont') format('svg');
}
.icon {
    font-family:"icon" !important;
    font-size:18px;
    font-style:normal;
    color: #ffffff;
}

html,body {
  height: 100%;
}

a.active {
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: #F5F5F5;
  .content{
    padding-top: px2rem(100px);
    background: #F5F5F5;
  }
  .tabar {
    margin-bottom: px2rem(120px);
  }
  //渐变动效
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all .1s ease-in;
    opacity: 1;
  }
  .slide-left-enter,
  .slide-left-leave-active {
    opacity: 0;
  }

  //左滑动效
  // .slide-left-enter-active {
  //   animation: slideLeft .3s;
  // }
}

@keyframes slideLeft {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

</style>
