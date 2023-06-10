import { expect } from 'chai'
import { ethers } from 'hardhat'
import { deployPokemonGameContract } from '../../tasks/deploy/pokemonGame'
import { deployMetallicContract } from '../../tasks/deploy/metallic'
import { deployGameRewardsContract } from '../../tasks/deploy/gameRewards'

describe('PokemonGame - Deploy', function () {
  it("Should deploy contract", async function () {
    const { metallicContract } = await deployMetallicContract(ethers)
    const { gameRewardsContract } = await deployGameRewardsContract(ethers, metallicContract.address)

    await deployPokemonGameContract(ethers, gameRewardsContract.address)
  }).timeout(6000000)
})
