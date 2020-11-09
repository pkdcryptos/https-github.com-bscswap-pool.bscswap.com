<template>


  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="/">
            <img src="~/static/logo.png" class="d-inline-block align-top logo" alt="LaunchField">
            LaunchField
          </b-navbar-brand>
        </b-navbar>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="https://bscswap.com" target="_blank">{{$t("navbar.exchange")}}</b-nav-item>
            <b-nav-item href="https://stable.bscswap.com/deposit.html" target="_blank">Wrap BAI</b-nav-item>
            <b-nav-item href="https://bscswapprotocol.medium.com/announcing-the-launchfield-program-and-the-yield-farming-offering-for-bhc-and-earth-token-dae6444393a8" target="_blank">{{$t("navbar.about")}}</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item right>
              <div class="wallet" v-if="walletInstalled">
                <span v-if="checkChainId">
                  <span class="addr" v-if="$store.state.connectedAccount">
                    <b-icon-wallet></b-icon-wallet>
                    {{ shortAddr($store.state.connectedAccount) }}
                  </span>
                  </router-link>
                </span>
                <a href="https://docs.binance.org/smart-chain/wallet/metamask.html" target="_blank" v-else>{{$t("navbar.change-to-bsc")}}</a>
              </div>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>


    <div class="container main">
      <b-row>
        <b-col>
        <div class="alert alert-warning"  v-if="walletLocked">
          {{$t("home.unlockWallet")}}
        </div>
          <nuxt />
        </b-col>
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
        walletLocked: false,
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
        if(window.detectProvider && window.detectProvider.isTrust) return true;
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
    async created() {
      try{
        await this.$onConnect();
      } catch(err) {
        if(err.toString() == "Error: User rejected the signature request") {
          this.walletLocked = true
        }
      }
    }
  }
</script>


<style>
  .header {
    background-color: #4C4C4C;
    padding: 0.5rem;
    margin-bottom: 2rem;
    color: #fff;
  }
  .nav-item a {
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
  .addr{
    color: #fff;
    font-size: 1.1rem;
  }
  .main {
    min-height: calc(100vh - 80px);
    padding-top: 100px;
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
