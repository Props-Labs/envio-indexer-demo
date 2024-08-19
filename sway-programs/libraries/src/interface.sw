library;

use std::string::String;
use std::bytes::Bytes;
use standards::{src5::{State}, src7::{Metadata}};

abi Constructor {
    #[storage(read, write)]
    fn constructor(owner: Identity, name: String);

    #[storage(read, write)]
    fn test_function() -> u64;
}

abi Registry {
    #[storage(read, write)]
    fn init_contract(contract_id: ContractId, owner: Identity, name: String);
}