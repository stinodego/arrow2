initSidebarItems({"mod":[["alloc","Defines memory-related functions, such as allocate/deallocate/reallocate memory regions, cache and allocation alignments."],["array","fixed-length and immutable containers with optional values that are layed in memory according to the Arrow specification. Each array type has its own `struct`. The following are the main array types:"],["bitmap","Contains efficient containers of booleans: [`Bitmap`] and [`MutableBitmap`]. The memory backing these containers is cache-aligned and optimized for both vertical and horizontal operations over booleans."],["buffer","Contains containers for all Arrow sized types (e.g. `i32`), [`Buffer`] and [`MutableBuffer`]."],["datatypes","Metadata declarations such as [`DataType`], [`Field`] and [`Schema`]."],["error","Defines [`ArrowError`], representing all errors returned by this crate."],["ffi","Contains interfaces to use the C Data Interface."],["io","Interact with different formats such as Arrow, CSV, parquet, etc."],["record_batch","A two-dimensional batch of column-oriented data with a defined schema."],["scalar","Declares the [`Scalar`] API, an optional, trait object representing the zero-dimension of an [`crate::array::Array`]."],["temporal_conversions","Conversion methods for dates and times."],["trusted_len","Declares [`TrustedLen`]."],["types","traits to handle all physical types used in this crate. Most physical types used in this crate are native Rust types, like `i32`. The most important trait is [`NativeType`], implemented for all Arrow types with a Rust correspondence (such as `i32` or `f64`)."],["util","Misc utilities used in different places in the crate."]]});