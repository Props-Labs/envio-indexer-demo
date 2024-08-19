contract;

mod events;

use libraries::{Constructor};
use standards::{src5::{SRC5, State},};
use events::{TestEvent};

use std::{storage::storage_string::*, string::String};

use sway_libs::{
    ownership::{
        _owner,
        initialize_ownership,
        only_owner,
    }
};

storage {
    /// A mapping of contract IDs to their respective owners
    name: StorageString = StorageString {},
}

impl SRC5 for Contract {
    /// Returns the owner.
    ///
    /// # Return Values
    ///
    /// * [State] - Represents the state of ownership for this contract.
    ///
    /// # Number of Storage Accesses
    ///
    /// * Reads: `1`
    ///
    /// # Examples
    ///
    /// ```sway
    /// use standards::src5::SRC5;
    ///
    /// fn foo(contract_id: ContractId) {
    ///     let ownership_abi = abi(contract_id, SRC_5);
    ///
    ///     match ownership_abi.owner() {
    ///         State::Uninitalized => log("The ownership is uninitalized"),
    ///         State::Initialized(owner) => log("The ownership is initalized"),
    ///         State::Revoked => log("The ownership is revoked"),
    ///     }
    /// }
    /// ```
    #[storage(read)]
    fn owner() -> State {
        _owner()
    }
}

impl Constructor for Contract {
    #[storage(read, write)]
    fn constructor(owner: Identity, name: String) {
        initialize_ownership(owner);
        storage.name.write_slice(name);
    }

    #[storage(read, write)]
    fn test_function() -> u64 {
        log(TestEvent {
            amount: 100
        });
        100
    }
}