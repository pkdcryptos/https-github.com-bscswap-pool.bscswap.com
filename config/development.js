'use strict'
module.exports = {
	chainId: 56,
	cows: [
		{
			id: 1,
			name: "MOON USDT Pool",
			image: "https://tokens.bscswap.com/images/0x9e90aF2Ea159190c84012b09067689ba8ac0d9B3.png",
			desc: "Halving every week, Withdrawal for MOON open October 10, 2020 3:00:00 PM",
			initialized: true,
			address: "0x73605bff9baf9797Eb6d15458108Ea9FD628Bb62",
			bscswap: "0x38C2b18e5E7f9b3D9ee1F7658cE2172058d99A69",
			stakeToken: {
				address: "0x55d398326f99059fF775485246999027B3197955",
				decimals: 18,
				symbol: "USDT"
			},
			yieldToken: {
				address: "0x9e90aF2Ea159190c84012b09067689ba8ac0d9B3",
				decimals: 18,
				symbol: "MOON"
			}
		},
		{
			id: 2,
			name: "EARTH USDT Pool",
			image: "https://tokens.bscswap.com/images/0x3BEE8422f2e6F99C43351ebe53B0b7A6c3079255.png",
			desc: "Halving every week, Withdrawal for EARTH open October 8, 2020 6:00:00 PM UTC +0",
			initialized: true,
			address: "0xED04964388Af73916fdc4Ef86ABfDb98F96D8ECb",
			bscswap: "0x38C2b18e5E7f9b3D9ee1F7658cE2172058d99A69",
			stakeToken: {
				address: "0x55d398326f99059fF775485246999027B3197955",
				decimals: 18,
				symbol: "USDT"
			},
			yieldToken: {
				address: "0x3BEE8422f2e6F99C43351ebe53B0b7A6c3079255",
				decimals: 18,
				symbol: "EARTH"
			}
		},
		{
			id: 3,
			name: "BHC DEGEN/BNB LP Pool",
			image: "https://tokens.bscswap.com/images/0xA6381C6Fd8f40A44721eF4f61eDc1a8CCCa7BF3d.png",
			desc: "Halving every week, Withdrawal open October 8, 2020 6:00:00 AM UTC +0",
			initialized: true,
			address: "0xe5e2D9e9742f6622FFf44001517eB6b27a794e6A",
			bscswap: "0x74ED229d5CC16678876310a7F67Ca13B541BE11d",
			stakeToken: {
				address: "0x74ED229d5CC16678876310a7F67Ca13B541BE11d",
				decimals: 18,
				symbol: "DEGEN/BNB LP Token"
			},
			yieldToken: {
				address: "0xA6381C6Fd8f40A44721eF4f61eDc1a8CCCa7BF3d",
				decimals: 18,
				symbol: "BHC"
			}
		},
		{
			id: 4,
			name: "BHC BHC/BNB LP Pool",
			image: "https://tokens.bscswap.com/images/0xA6381C6Fd8f40A44721eF4f61eDc1a8CCCa7BF3d.png",
			desc: "Halving every week, Withdrawal open October 8, 2020 6:00:00 AM UTC +0",
			initialized: true,
			address: "0x1D98cbDf1eAd407a58290a0208C06F6e1D4Cd7fA",
			bscswap: "0xe99cE38eEbdc4b3d5F8FeD6DBf19240c969FcbD1",
			stakeToken: {
				address: "0xe99cE38eEbdc4b3d5F8FeD6DBf19240c969FcbD1",
				decimals: 18,
				symbol: "BHC/BNB LP Token"
			},
			yieldToken: {
				address: "0xA6381C6Fd8f40A44721eF4f61eDc1a8CCCa7BF3d",
				decimals: 18,
				symbol: "BHC"
			}
		},
		{
			id: 5,
			name: "BHC EARTH/BNB LP Pool",
			image: "https://tokens.bscswap.com/images/0xA6381C6Fd8f40A44721eF4f61eDc1a8CCCa7BF3d.png",
			desc: "Halving every week, Withdrawal open October 8, 2020 6:00:00 AM UTC +0",
			initialized: true,
			address: "0xE394b087889d6d2E8eBa110bFe376079E3C2682A",
			bscswap: "0x38C2b18e5E7f9b3D9ee1F7658cE2172058d99A69",
			stakeToken: {
				address: "0x38C2b18e5E7f9b3D9ee1F7658cE2172058d99A69",
				decimals: 18,
				symbol: "EARTH/BNB LP Token"
			},
			yieldToken: {
				address: "0xA6381C6Fd8f40A44721eF4f61eDc1a8CCCa7BF3d",
				decimals: 18,
				symbol: "BHC"
			}
		},
		{
			id: 6,
			name: "BHC BNB/BUSD LP Pool",
			image: "https://tokens.bscswap.com/images/0xA6381C6Fd8f40A44721eF4f61eDc1a8CCCa7BF3d.png",
			desc: "Halving every week, Withdrawal open October 8, 2020 6:00:00 AM UTC +0",
			initialized: true,
			address: "0x62d6eeAf4e1895ce72bf10f8b0Dbdb0E1DD4CB08",
			bscswap: "0x1EbF0eE99971c6269062C3b480e8e23B7A74756B",
			stakeToken: {
				address: "0x1EbF0eE99971c6269062C3b480e8e23B7A74756B",
				decimals: 18,
				symbol: "BNB/BUSD LP Token"
			},
			yieldToken: {
				address: "0xA6381C6Fd8f40A44721eF4f61eDc1a8CCCa7BF3d",
				decimals: 18,
				symbol: "BHC"
			}
		},
		{
			id: 7,
			name: "Degenerates Liquidity Staking Pool",
			image: "https://tokens.bscswap.com/images/0xb37B51C5C4C934468B49b55FeC15e76c9b538fF3.png",
			desc: "Halving every year, 1 DEGEN required on your account to participate, Withdrawal open October 6, 2020 5:00:00 PM UTC +0",
			initialized: true,
			address: "0x4eC29949C9288792420f2605fe2bc47530397968",
			bscswap: "0x74ED229d5CC16678876310a7F67Ca13B541BE11d",
			stakeToken: {
				address: "0x74ED229d5CC16678876310a7F67Ca13B541BE11d",
				decimals: 18,
				symbol: "DEGEN/BNB LP Token"
			},
			yieldToken: {
				address: "0xb37B51C5C4C934468B49b55FeC15e76c9b538fF3",
				decimals: 18,
				symbol: "DEGEN"
			}
		}
	],
	tokens: [
		{
			symbol: "bnb",
			address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
			decimal: 18
		},
		{
			symbol: "BUSD",
			address: "0x55d398326f99059ff775485246999027b3197955",
			decimals: 18,
		},
		{
			symbol: "WBNB",
			address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
			decimals: 18,
		}
	],
	pair_BUSD_BNB: "0x1EbF0eE99971c6269062C3b480e8e23B7A74756B",
	web3Provider: "https://bsc-dataseed1.defibit.io"
}
