contract;

mod events;

use libraries::{Constructor, Registry};
use events::InitContractEvent;

use std::string::String;

impl Registry for Contract {
    #[storage(read, write)]
    fn init_contract(contract_id: ContractId, owner: Identity, name: String) {

        let contr = abi(Constructor, contract_id.into());
        contr.constructor(owner, name);

        // Log the InitCollectionEvent
        log(InitContractEvent {
            contract_id: contract_id,
            owner: owner,
            name: name
        });
    }
}