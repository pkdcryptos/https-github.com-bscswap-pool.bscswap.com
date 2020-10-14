import Cow from './cow';
import Erc20 from './erc20';
import Wbnb from './wbnb';
import Pair from './pair';
import Erc20Reader from './erc20_reader';
import CowReader from './cow_reader';
import BNB from './bnb';
import Wallet from './wallet';

import config from  '~/config'
import Web3 from 'web3'

const web3Reader = new Web3(new Web3.providers.HttpProvider(config.web3Provider));

const ZERO_ADDR = "0x0000000000000000000000000000000000000000";
export {
	Cow,
	Erc20,
	Wbnb,
	Pair,
	Erc20Reader,
	CowReader,
	web3Reader
}
