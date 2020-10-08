<template>
  <div>
    <div>
      <div class="intro">
        <h3>
          {{$t("home.protocol-name")}}
        </h3>
        <p>
          {{$t("home.protocol-desc")}}
        </p>
        <p></p>
      </div>
    </div>
    <br>
    <div class="price alert alert-success">
      1 $DEGEN = {{ priceDEGENBUSD ? priceDEGENBUSD.toFixed(4) : '--' }} $BUSD /
      0.00001 $EARTH = {{ priceEARTHBUSD ? priceEARTHBUSD.div(100000).toFixed(4) : '--' }} $BUSD /
      1 $BHC = {{ priceBHCBUSD ? priceBHCBUSD.toFixed(4) : '--' }} $BUSD
    </div>

    <br>
    <div class="row">
      <div class="col-6 cow" v-for="(cow, i) in cows" :key="i">
        <div class="card cow">
          <div class="card-body">
            <img :src="cow.image" class="tokenlogo">
            <h5 class="card-title title">{{ cow.name }}</h5>
            <!-- <div class="desc">{{ cow.stakeToken.symbol }}</div> -->
            <div class="desc">{{$t("home.card-desc", { symbol: cow.stakeToken.symbol })}}</div>
            <p class="card-text apy"> APY: {{apy[cow.id]}}% </p>
            <a :href="'/pool/' + cow.id" v-if="cow.initialized" class="btn btn-block btn-success">
              {{$t("home.select")}}
            </a>
            <a href="#" v-else class="btn btn-secondary btn-block">{{$t("home.coming-soon")}}</a>
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
  import config from '~/config'
  import { Pair, Erc20Reader, CowReader } from '~/contracts'
  import { BigNumber } from 'bignumber.js'

  export default {
    data () {
      return {
        cows: config.cows,
        priceDEGENBUSD: null,
        priceDEGENBNB: null,
        priceBHCBUSD: null,
        priceBHCBNB: null,
        priceEARTHBUSD: null,
        priceEARTHBNB: null,
        apy: {
          1: '--',
          2: '--',
          3: '--',
          4: '--',
          5: '--',
          6: '--'
        }
      }
    },
    methods: {

    },
    async mounted() {
      let pair = new Pair()
      let promises = [ pair.getPriceOfBNBBUSD(), pair.getPriceOfDEGENBNB(), pair.getPriceOfBHCBNB(), pair.getPriceOfEARTHBNB(), pair.getPriceOfBUSDBNB() ];
      let prices = await Promise.all(promises);

      this.priceDEGENBUSD = BigNumber(prices[0]).times(BigNumber(prices[1]));
      this.priceDEGENBNB =  BigNumber(prices[1]);
      this.priceBHCBUSD = BigNumber(prices[0]).times(BigNumber(prices[2]));
      this.priceBHCBNB =  BigNumber(prices[2]);
      this.priceEARTHBUSD = BigNumber(prices[0]).times(BigNumber(prices[3]));
      this.priceEARTHBNB =  BigNumber(prices[3]);
      this.priceBUSDBNB = BigNumber(prices[4]);

      console.log("priceBNBBUSD=", prices[0]);
      console.log("priceDEGENBNB=", prices[1]);
      console.log("priceBHCBNB=", prices[2]);
      console.log("priceEARTHBNB=", prices[3]);

      this.cows.map(async(cow) => {
        if(cow.initialized) {
          let erc20Reader = new Erc20Reader(cow.stakeToken.address, cow.stakeToken.symbol, cow.stakeToken.decimals)
          let cowReader = new CowReader(cow.address, cow.stakeToken, cow.yieldToken)
          let rewardRate = await cowReader.rewardRate();
          let balance = await erc20Reader.balanceOf(cow.address);
          let rewards = rewardRate.times(365 * 24 * 60 * 60).div(balance)
          console.log(cow.name, rewards.toString());
          if(cow.id == 1) {
            this.apy[1] = rewards.times(100).toFixed(2)
          } else if(cow.id == 2) {
            this.apy[2] = rewards.times(this.priceBHCBNB).div(this.priceDEGENBNB.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 3) {
            this.apy[3] = rewards.times(this.priceBHCBNB).div(this.priceBHCBNB.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 4) {
            this.apy[4] = rewards.times(this.priceBHCBNB).div(this.priceEARTHBNB.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 5) {
            this.apy[5] = rewards.times(this.priceBHCBNB).div(this.priceBUSDBNB.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 6) {
            this.apy[6] = rewards.times(this.priceDEGENBNB).div(this.priceDEGENBNB.plus(1)).times(100).toFixed(2)
          }
        }
        return cow
      });
    }
  }
</script>

<style scoped>

  .intro {
    background-color: #eee;
    padding: 1rem 1rem;
  }
  .cover {
    text-align: center;
  }
  .title {
    margin-bottom: 0.1rem !important;
  }
  .desc {
    font-size: 0.9rem;
    color: #999;
  }
  .tokenlogo {
    width: 150px;
  }
  .cover img {
    display: inline-block;
    width: 150px;
    text-align: center;
  }
  .cow {
    margin-bottom: 1rem;
  }
  .cow img {
    width: 100%;
    padding: 1rem;
    text-align: center;
    display: inline-block;
  }
  .avatar {
    text-align: center;
    font-size: 5rem;
  }
  .milk {
    width: 3rem;
  }
  .apy {
    font-size: 0.9rem;
    color: #007bff;
  }
</style>
