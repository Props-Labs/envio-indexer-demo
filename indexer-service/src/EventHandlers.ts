/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Registry,
  InitContractEvent,
  Contract,
  TestEvent
} from "generated";

Registry.InitContractEvent.loader(async ({ event, context }) => {
  console.log(
    "LOADING CONTRACT REGISTRATION: ",
    event.data
  );
  context.contractRegistration.addContract(event.data.contract_id.bits);
});

Registry.InitContractEvent.handler(async ({ event, context }) => {
  const entity: InitContractEvent = {
    id: `${event.chainId}_${event.transactionId}_${event.receiptIndex}`,
    transaction_id: event.transactionId,
    time: event.time,
    chain_id: event.chainId,
    block_number: event.blockHeight,
    contract_id: event.contractId.toString(),
    owner: event.data.owner.payload.bits,
    name: event.data.name.toString()
  };

  context.InitContractEvent.set(entity);
});

Contract.TestEvent.handler(async ({ event, context }) => {
  const entity: TestEvent = {
    id: `${event.chainId}_${event.transactionId}_${event.receiptIndex}`,
    amount: event.data.amount
  };
  context.TestEvent.set(entity);
});