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
      1 $BSWAP = {{ priceBSWAPUSDT ? priceBSWAPUSDT.toFixed(4) : '--' }} $BAI /
      10000 $LFI = {{ priceLFIBAI ? priceLFIBAI.times(10000).toFixed(4) : '--' }} $BUSD
    </div>

    <br>
    <div class="row">
      <div class="col-md-4 cow" v-for="(cow, i) in cows" :key="i">
        <div class="card mb-4 text-white bg-dark cow">
          <div class="card-body">
            <img :src="cow.image" class="tokenlogo">
            <h8 class="card-title title">{{ cow.name }}</h8>
            <!-- <div class="desc">{{ cow.stakeToken.symbol }}</div> -->
            <div class="desc">{{$t("home.card-desc", { symbol: cow.stakeToken.symbol })}}</div>
            <p class="card-text apy"> APY: {{apy[cow.id]}}% </p>
            <a :href="'/pool/' + cow.id" v-if="cow.initialized" class="btn btn-block btn-warning">
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
        priceBSWAPUSDT: null,
        priceLFIBAI: null,
        apy: {
          1: '--',
          2: '--',
          3: '--',
          4: '--',
          5: '--',
          6: '--',
          7: '--',
          8: '--',
          9: '--',
          10: '--',
          11: '--',
          12: '--',
          13: '--',
          14: '--',
          15: '--',
          16: '--',
          17: '--',
          18: '--',
          19: '--',
          20: '--',
          21: '--',
          22: '--',
          23: '--',
          24: '--',
          25: '--',
          26: '--',
          27: '--',
          28: '--',
          29: '--',
          30: '--',
          31: '--',
          32: '--'
        }
      }
    },
    methods: {

    },
    async mounted() {
      let pair = new Pair()
      let promises = [ pair.getPriceOfBNBBUSD(), pair.getPriceOfDEGENBNB(), pair.getPriceOfBHCBNB(), pair.getPriceOfEARTHBNB(), pair.getPriceOfBUSDBNB(), pair.getPriceOfMOONUSDT(), pair.getPriceOfRABBITUSDT(), pair.getPriceOfBSWAPUSDT(), pair.getPriceOfCAKEBNB(), pair.getPriceOfBURGERBNB(), pair.getPriceOfTHUGSBNB(), pair.getPriceOfDRUGSBNB(), pair.getPriceOfLFIBNB() ];
      let prices = await Promise.all(promises);

      this.priceDEGENBUSD = BigNumber(prices[0]).times(BigNumber(prices[1]));
      this.priceDEGENBNB =  BigNumber(prices[1]);
      this.priceBHCBUSD = BigNumber(prices[0]).times(BigNumber(prices[2]));
      this.priceBHCBNB =  BigNumber(prices[2]);
      this.priceEARTHBUSD = BigNumber(prices[0]).times(BigNumber(prices[3]));
      this.priceEARTHBNB =  BigNumber(prices[3]);
      this.priceMOONUSDT =  BigNumber(prices[5]);
      this.priceRABBITUSDT = BigNumber(prices[6]);
      this.priceBSWAPUSDT = BigNumber(prices[7]);
      this.priceBUSDBNB = BigNumber(prices[4]);
      this.priceBNBBUSD = BigNumber(prices[0]);
      this.priceBSWAPBNB = BigNumber(prices[7]).div(prices[0]);
      this.priceCAKEBNB = BigNumber(prices[8]);
      this.priceBURGERBNB = BigNumber(prices[9]);
      this.priceTHUGSBNB = BigNumber(prices[10]);
      this.priceDRUGSBNB = BigNumber(prices[11]);
      this.priceLFIBNB = BigNumber(prices[12]);
      this.priceLFIBAI = BigNumber(prices[0]).times(BigNumber(prices[12]));

      this.cows.map(async(cow) => {
        if(cow.initialized) {
          let erc20Reader = new Erc20Reader(cow.stakeToken.address, cow.stakeToken.symbol, cow.stakeToken.decimals)
          let cowReader = new CowReader(cow.address, cow.stakeToken, cow.yieldToken)
          let rewardRate = await cowReader.rewardRate();
          let balance = await cowReader.totalSupply();
          let rewards = rewardRate.times(365 * 24 * 60 * 60).div(balance)

          if(cow.id == 1) {
            this.apy[1] = rewards.times(100).toFixed(2)
          } else if(cow.id == 2) {
            this.apy[2] = rewards.times(this.priceLFIBNB).times(100).toFixed(2)
          } else if(cow.id == 3) {
            this.apy[3] = rewards.times(this.priceLFIBAI).times(100).toFixed(2)
          } else if(cow.id == 4) {
            this.apy[4] = rewards.times(this.priceLFIBNB).div(this.priceCAKEBNB.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 5) {
            this.apy[5] = rewards.times(100).toFixed(2)
          } else if(cow.id == 6) {
            this.apy[6] = rewards.times(this.priceBSWAPBNB).times(100).toFixed(2)
          } else if(cow.id == 7) {
            this.apy[7] = rewards.times(this.priceBSWAPUSDT).times(100).toFixed(2)
          } else if(cow.id == 8) {
            this.apy[8] = rewards.times(this.priceBSWAPBNB).div(this.priceCAKEBNB.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 9) {
            this.apy[9] = rewards.times(this.priceBSWAPBNB).div(this.priceBURGERBNB.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 10) {
            this.apy[10] = rewards.times(this.priceBSWAPBNB).div(this.priceTHUGSBNB.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 11) {
            this.apy[11] = rewards.times(this.priceBSWAPBNB).div(this.priceDRUGSBNB.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 12) {
            this.apy[12] = new BigNumber(0)
          } else if(cow.id == 13) {
            this.apy[13] = new BigNumber(0)
          } else if(cow.id == 14) {
            this.apy[14] = new BigNumber(0)
          } else if(cow.id == 15) {
            this.apy[15] = new BigNumber(0)
          } else if(cow.id == 16) {
            this.apy[16] = new BigNumber(0)
          } else if(cow.id == 17) {
            this.apy[17] = new BigNumber(0)
          } else if(cow.id == 18) {
            this.apy[18] = new BigNumber(0)
          } else if(cow.id == 19) {
            this.apy[19] = new BigNumber(0)
          } else if(cow.id == 20) {
            this.apy[20] = new BigNumber(0)
          } else if(cow.id == 21) {
            this.apy[21] = new BigNumber(0)
          } else if(cow.id == 22) {
            this.apy[22] = rewards.times(this.priceMOONUSDT).times(100).toFixed(2)
          } else if(cow.id == 23) {
            this.apy[23] = rewards.times(this.priceEARTHBUSD).times(100).toFixed(2)
          } else if(cow.id == 24) {
            this.apy[24] = rewards.times(this.priceMOONUSDT).div(this.priceMOONUSDT.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 25) {
            this.apy[25] = rewards.times(this.priceMOONUSDT).div(this.priceEARTHBUSD.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 26) {
            this.apy[26] = rewards.times(this.priceMOONUSDT).div(this.priceBNBBUSD.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 27) {
            this.apy[27] = rewards.times(this.priceBHCBNB).div(this.priceDEGENBNB.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 28) {
            this.apy[28] = rewards.times(this.priceBHCBNB).div(this.priceBHCBNB.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 29) {
            this.apy[29] = rewards.times(this.priceBHCBNB).div(this.priceEARTHBNB.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 30) {
            this.apy[30] = rewards.times(this.priceBHCBNB).div(this.priceBUSDBNB.plus(1)).times(100).toFixed(2)
          } else if(cow.id == 31) {
            this.apy[31] = new BigNumber(0)
          } else if(cow.id == 32) {
            this.apy[32] = rewards.times(this.priceDEGENBNB).div(this.priceDEGENBNB.plus(1)).times(100).toFixed(2)
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
  @media (max-width:767px){
    .col-md-4.cow {
      width: 100%;
    }
    .cow.card img.tokenlogo{
      max-width: 100px;
    }
  }
  .cow.card img.tokenlogo {
    display:block;
    margin: 0 auto;
    max-width:150px;
  }
  .cover img {
    display: inline-block;
    width: 50px;
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
