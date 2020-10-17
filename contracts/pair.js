import Web3 from 'web3'
import { toBN, BN, isBN } from 'web3-utils'
import { MAX_UINT256 } from './constants'
import { BigNumber } from 'bignumber.js'
import config from  '~/config'

const UNISWAP_PAIR = require('./abis/uniswap_pair.json');

export class Pair {
	constructor() {
		this.web3 = new Web3(new Web3.providers.HttpProvider(config.web3Provider));
	}

	async getPriceOfBSWAPUSDT() {
		this.address = config.pair_BSWAP_USDT;
		this.contract = new this.web3.eth.Contract(UNISWAP_PAIR, this.address)
		let reserves = await this.contract.methods.getReserves().call();
		return reserves[0] / reserves[1]
	}

	async getPriceOfRABBITUSDT() {
		this.address = config.pair_RABBIT_USDT;
		this.contract = new this.web3.eth.Contract(UNISWAP_PAIR, this.address)
		let reserves = await this.contract.methods.getReserves().call();
		return reserves[0] / reserves[1]
	}

	async getPriceOfMOONUSDT() {
		this.address = config.pair_MOON_USDT;
		this.contract = new this.web3.eth.Contract(UNISWAP_PAIR, this.address)
		let reserves = await this.contract.methods.getReserves().call();
		return reserves[0] / reserves[1]
	}

	async getPriceOfBHCBNB() {
		this.address = config.pair_BHC_BNB;
		this.contract = new this.web3.eth.Contract(UNISWAP_PAIR, this.address)
		let reserves = await this.contract.methods.getReserves().call();
		return reserves[1] / reserves[0]
	}

	async getPriceOfEARTHBNB() {
		this.address = config.pair_EARTH_BNB;
		this.contract = new this.web3.eth.Contract(UNISWAP_PAIR, this.address)
		let reserves = await this.contract.methods.getReserves().call();
		return reserves[1] / reserves[0]
	}

	async getPriceOfDEGENBNB() {
		this.address = config.pair_DEGEN_BNB;
		this.contract = new this.web3.eth.Contract(UNISWAP_PAIR, this.address)
		let reserves = await this.contract.methods.getReserves().call();
		return reserves[1] / reserves[0]
	}

	async getPriceOfBUSDBNB() {
		this.address = config.pair_BUSD_BNB;
		this.contract = new this.web3.eth.Contract(UNISWAP_PAIR, this.address)
		let reserves = await this.contract.methods.getReserves().call();
		return reserves[0] / reserves[1]
	}

	async getPriceOfBNBBUSD() {
		this.address = config.pair_BUSD_BNB;
		this.contract = new this.web3.eth.Contract(UNISWAP_PAIR, this.address)
		let reserves = await this.contract.methods.getReserves().call();
		return reserves[1] / reserves[0]
	}

	async totalSupply() {
		return await this.contract.methods.totalSupply().call();
	}

	async estimateBNBAndMILK() {
		let reserves = await this.contract.methods.getReserves().call();
		let totalSupply = await this.totalSupply();
		let x = BigNumber(30).times(reserves[0]).div(totalSupply).toFixed(2);
		let y = BigNumber(30).times(reserves[1]).div(totalSupply).toFixed(2);
		return [x, y]
	}
}

export default Pair;
