//! APIs to read Arrow's IPC format.
//!
//! The two important structs here are the [`FileReader`](reader::FileReader),
//! which provides arbitrary access to any of its messages, and the
//! [`StreamReader`](stream::StreamReader), which only supports reading
//! data in the order it was written in.
use std::collections::HashMap;
use std::sync::Arc;

use crate::array::Array;

mod array;
mod common;
mod deserialize;
mod read_basic;
mod reader;
mod schema;
mod stream;

pub use common::{read_dictionary, read_record_batch};
pub use reader::{read_file_metadata, FileMetadata, FileReader};
pub use schema::fb_to_schema;
pub use stream::{read_stream_metadata, StreamMetadata, StreamReader, StreamState};

// how dictionaries are tracked in this crate
pub type Dictionaries = HashMap<i64, Arc<dyn Array>>;
