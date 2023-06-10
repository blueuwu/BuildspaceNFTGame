/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ItemMarketInterface extends ethers.utils.Interface {
  functions: {
    "buyItem(address,address,uint256,uint256)": FunctionFragment;
    "getAllItems()": FunctionFragment;
    "getTotalItems()": FunctionFragment;
    "inventory(uint16)": FunctionFragment;
    "listItem(address,uint256,uint256,uint256)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "removeItem(address,uint256,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "buyItem",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllItems",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalItems",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "inventory",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listItem",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeItem",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "buyItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllItems",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalItems",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "inventory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "removeItem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "BuyItem(address,address,address,uint256,uint256,uint256)": EventFragment;
    "ListItem(address,address,uint256,uint256,uint256)": EventFragment;
    "RemoveItem(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BuyItem"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListItem"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveItem"): EventFragment;
}

export type BuyItemEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber] & {
    buyer: string;
    seller: string;
    tokenAddress: string;
    id: BigNumber;
    amount: BigNumber;
    price: BigNumber;
  }
>;

export type ListItemEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber] & {
    seller: string;
    tokenAddress: string;
    id: BigNumber;
    amount: BigNumber;
    price: BigNumber;
  }
>;

export type RemoveItemEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    seller: string;
    tokenAddress: string;
    id: BigNumber;
    amount: BigNumber;
  }
>;

export class ItemMarket extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ItemMarketInterface;

  functions: {
    buyItem(
      _metallicAddress: string,
      _tokenAddress: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAllItems(
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, BigNumber, BigNumber, BigNumber] & {
          seller: string;
          id: BigNumber;
          amount: BigNumber;
          price: BigNumber;
        })[]
      ]
    >;

    getTotalItems(overrides?: CallOverrides): Promise<[BigNumber]>;

    inventory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        seller: string;
        id: BigNumber;
        amount: BigNumber;
        price: BigNumber;
      }
    >;

    listItem(
      _tokenAddress: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeItem(
      _tokenAddress: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  buyItem(
    _metallicAddress: string,
    _tokenAddress: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAllItems(
    overrides?: CallOverrides
  ): Promise<
    ([string, BigNumber, BigNumber, BigNumber] & {
      seller: string;
      id: BigNumber;
      amount: BigNumber;
      price: BigNumber;
    })[]
  >;

  getTotalItems(overrides?: CallOverrides): Promise<BigNumber>;

  inventory(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      seller: string;
      id: BigNumber;
      amount: BigNumber;
      price: BigNumber;
    }
  >;

  listItem(
    _tokenAddress: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155BatchReceived(
    arg0: string,
    arg1: string,
    arg2: BigNumberish[],
    arg3: BigNumberish[],
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BigNumberish,
    arg4: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeItem(
    _tokenAddress: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    buyItem(
      _metallicAddress: string,
      _tokenAddress: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllItems(
      overrides?: CallOverrides
    ): Promise<
      ([string, BigNumber, BigNumber, BigNumber] & {
        seller: string;
        id: BigNumber;
        amount: BigNumber;
        price: BigNumber;
      })[]
    >;

    getTotalItems(overrides?: CallOverrides): Promise<BigNumber>;

    inventory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        seller: string;
        id: BigNumber;
        amount: BigNumber;
        price: BigNumber;
      }
    >;

    listItem(
      _tokenAddress: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    removeItem(
      _tokenAddress: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "BuyItem(address,address,address,uint256,uint256,uint256)"(
      buyer?: string | null,
      seller?: string | null,
      tokenAddress?: string | null,
      id?: null,
      amount?: null,
      price?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        buyer: string;
        seller: string;
        tokenAddress: string;
        id: BigNumber;
        amount: BigNumber;
        price: BigNumber;
      }
    >;

    BuyItem(
      buyer?: string | null,
      seller?: string | null,
      tokenAddress?: string | null,
      id?: null,
      amount?: null,
      price?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        buyer: string;
        seller: string;
        tokenAddress: string;
        id: BigNumber;
        amount: BigNumber;
        price: BigNumber;
      }
    >;

    "ListItem(address,address,uint256,uint256,uint256)"(
      seller?: string | null,
      tokenAddress?: string | null,
      id?: null,
      amount?: null,
      price?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        seller: string;
        tokenAddress: string;
        id: BigNumber;
        amount: BigNumber;
        price: BigNumber;
      }
    >;

    ListItem(
      seller?: string | null,
      tokenAddress?: string | null,
      id?: null,
      amount?: null,
      price?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        seller: string;
        tokenAddress: string;
        id: BigNumber;
        amount: BigNumber;
        price: BigNumber;
      }
    >;

    "RemoveItem(address,address,uint256,uint256)"(
      seller?: string | null,
      tokenAddress?: string | null,
      id?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { seller: string; tokenAddress: string; id: BigNumber; amount: BigNumber }
    >;

    RemoveItem(
      seller?: string | null,
      tokenAddress?: string | null,
      id?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      { seller: string; tokenAddress: string; id: BigNumber; amount: BigNumber }
    >;
  };

  estimateGas: {
    buyItem(
      _metallicAddress: string,
      _tokenAddress: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAllItems(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalItems(overrides?: CallOverrides): Promise<BigNumber>;

    inventory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listItem(
      _tokenAddress: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeItem(
      _tokenAddress: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyItem(
      _metallicAddress: string,
      _tokenAddress: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAllItems(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalItems(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    inventory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listItem(
      _tokenAddress: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _price: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeItem(
      _tokenAddress: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
