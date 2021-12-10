// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PoolCreation extends ethereum.Event {
  get params(): PoolCreation__Params {
    return new PoolCreation__Params(this);
  }
}

export class PoolCreation__Params {
  _event: PoolCreation;

  constructor(event: PoolCreation) {
    this._event = event;
  }

  get timestamp(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get poolAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get projectOwner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get poolMaxCap(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get saleStartTime(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get saleEndTime(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get noOfTiers(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get totalParticipants(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class PoolCreation extends ethereum.SmartContract {
  static bind(address: Address): PoolCreation {
    return new PoolCreation("PoolCreation", address);
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class LaunchPoolCall extends ethereum.Call {
  get inputs(): LaunchPoolCall__Inputs {
    return new LaunchPoolCall__Inputs(this);
  }

  get outputs(): LaunchPoolCall__Outputs {
    return new LaunchPoolCall__Outputs(this);
  }
}

export class LaunchPoolCall__Inputs {
  _call: LaunchPoolCall;

  constructor(call: LaunchPoolCall) {
    this._call = call;
  }

  get poolMaxCap(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get saleStartTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get saleEndTime(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get noOfTiers(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get totalParticipants(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get projectOwner(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[6].value.toAddress();
  }
}

export class LaunchPoolCall__Outputs {
  _call: LaunchPoolCall;

  constructor(call: LaunchPoolCall) {
    this._call = call;
  }
}