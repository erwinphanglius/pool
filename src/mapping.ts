import { BigInt } from "@graphprotocol/graph-ts"
import {
  PoolFactory,
  PoolCreation
} from "../generated/PoolFactory/PoolFactory"
import { FundPool } from "../generated/templates/MetaversepadTemplate/Metaversepad"
import { PoolCreationEntity, MetaversepadPool } from "../generated/schema"

export function handlePoolCreation(event: PoolCreation): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = PoolCreationEntity.load(event.transaction.hash.toHex())
  // let poolEntity = MetaversepadPool.load(event.params.poolAddress.toHexString())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new PoolCreationEntity(event.transaction.hash.toHex())

    // Entity fields can be set using simple assignments
    // entity.count = BigInt.fromI32(0)
  }

  // if (!poolEntity) {
  //   poolEntity = new MetaversepadPool(event.params.poolAddress.toHexString())

    // Entity fields can be set using simple assignments
    // entity.count = BigInt.fromI32(0)
  // }
  // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  // entity.previousOwner = event.params.previousOwner
  // entity.newOwner = event.params.newOwner
  entity.timestamp = event.params.timestamp
  entity.poolAddress = event.params.poolAddress

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.name(...)
  // - contract.owner(...)
}

export function handleFundPool(eventPoolCreation: PoolCreation, eventPoolInfo: FundPool): void {
  // let poolCreationEntity = PoolCreationEntity.load(eventPoolCreation.transaction.hash.toHex())
  let poolEntity = MetaversepadPool.load(eventPoolCreation.params.poolAddress.toHexString())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!poolEntity) {
    poolEntity = new MetaversepadPool(eventPoolCreation.params.poolAddress.toHexString())

    // Entity fields can be set using simple assignments
    // entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  // entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  // entity.previousOwner = event.params.previousOwner
  // entity.newOwner = event.params.newOwner
  poolEntity.address = eventPoolInfo.params.initiator
  poolEntity.balance = eventPoolInfo.params.value

  // Entities can be written to the store with `.save()`
  poolEntity.save()
}
