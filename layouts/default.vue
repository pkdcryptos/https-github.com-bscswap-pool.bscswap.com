<template>
  <div>

    <div class="header">
      <div class="container">
      <div class="row">
        <div class="col-md-2 col-sm-5 nav-link text-center">
          <router-link to="/">
            <img src="~/static/logo.png" class="logo"/> LaunchField
          </router-link>
        </div>
        <div class="col-md-6 text-center nav-container">
          <b-nav class="justify-content-center">
            <b-nav-item>
              <router-link to="/">
                {{$t("navbar.home")}}
              </router-link>
            </b-nav-item>

            <li class="nav-item">
              <a href="https://degenswap.io/#/swap?outputCurrency=0xb37B51C5C4C934468B49b55FeC15e76c9b538fF3" class="nav-link">
                {{$t("navbar.exchange")}}
              </a>
            </li>

            <li class="nav-item">
              <a href="https://medium.com/@bscswapprotocol/announcing-degenswap-project-a-new-innovation-zone-for-bscswap-5b3922c16310" class="nav-link">
                {{$t("navbar.about")}}
              </a>
            </li>
        </div>
        <div class="col-md-4 col-sm-5 text-right nav-link right">
          <div class="wallet" v-if="walletInstalled">
            <span v-if="checkChainId">
              <span class="addr" v-if="$store.state.connectedAccount">
              <b-icon-wallet></b-icon-wallet>
              {{ shortAddr($store.state.connectedAccount) }}</span>
            </span>
            <a href="https://docs.binance.org/smart-chain/wallet/metamask.html" target="_blank" v-else>{{$t("navbar.change-to-bsc")}}</a>
          </div>
          <div v-else><a href="https://metamask.io/" target="_blank">{{$t("navbar.install-wallet")}}</a></div>
          <b-dropdown class="dropdown" :text="currentLang == 'en' ? language.en : language.zh_CN">
              <b-dropdown-item @click="checkLanguage('en')" :active="currentLang == 'en'">{{language.en}}</b-dropdown-item>
              <b-dropdown-item @click="checkLanguage('zh_CN')" :active="currentLang == 'zh_CN'">{{language.zh_CN}}</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      </div>
    </div>

    <div class="container main">
      <b-row>
        <b-col cols="2" class="d-none d-sm-block"></b-col>
        <b-col md="8" sm="12" >
          <nuxt />
        </b-col>
        <b-col cols="2" class="d-none d-sm-block"></b-col>
      </b-row>
    </div>

    <div class="footer">
      <div class="footer-body">
        <a href="https://twitter.com/BSCswapProtocol" class="link" target="_blank">{{$t("footerbar.twitter")}}</a>
        <a href="https://t.me/bscswap" class="link" target="_blank">{{$t("footerbar.telegram")}}</a>
        <a href="https://github.com/bscswap" class="link" target="_blank">{{$t("footerbar.github")}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import utils from '~/mixins/utils'
  import config from '~/config'
  export default {
    data () {
      return {
        walletInstalled: true,
        language: {
          en: "English"
        }
      }
    },
    computed: {
      currentLang(){
        return  this.$store.state.locale
      },
      checkChainId() {
        if(/MathWallet/i.test(window.navigator.userAgent)){
          return true
        }
        if(this.$store.state.isMathWallet) return true;
        return config.chainId == this.$store.state.chainId
      }
    },
    methods: {
      checkLanguage(lang){
        this.$i18n.locale = lang
        this.$store.commit('updateLang', lang)
      },
      shortAddr(addr) {
        return utils.shortAddr(addr)
      },
      async onUnlock() {
        await this.$onConnect()
      }
    },
    async mounted() {
      await this.$onConnect();
    }
  }
</script>


<style>
  .header {
    background-color: #FFBB00;
    padding: 0.5rem;
    margin-bottom: 2rem;
    color: #fff;
  }
  .header a {
    color: #fff;
    font-size: 1.1rem;
  }
  .nav-container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wallet {
    /* float: right; */
  }

  .logo {
    padding: 0;
    height: 32px;
  }
  .main {
    min-height: calc(100vh - 144px);
  }

  .footer {

  }
  .footer-body{
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    height: 72px;
    width: 100%;
  }
  .support img{
    height: 16px;
  }
  .link {
    margin: 0 0.5rem;
    text-align: center;
  }
  .right{
    display:flex;
    justify-content:flex-end;
    align-items: center;
  }
  .wallet {
    font-weight: bold;
    cursor: pointer;
  }

  .dropdown .btn.dropdown-toggle{
    /* line-height:1; */
    margin-left: 20px;
    padding: 0;
    background-color: transparent;
    color: #fff;
    font-size: 1.1rem;
    border: none;
    outline: none;
  }
  .dropdown .btn, .dropdown .btn.dropdown-toggle:active, .dropdown .btn.dropdown-toggle:hover{
    border-color: transparent;
    background-color: transparent;
    box-shadow: none;
  }
  .dropdown-item.active{
    color: #FFBB00;
    background-color: transparent;
  }
  .dropdown-item:active{
    color: black;
    background-color: transparent;
  }
  .dropdown-menu a{
    color: #16181b;
  }

</style>
