window.SIDEBAR_ITEMS = {"enum":[["CompressedPage","A [`CompressedPage`] is a compressed, encoded representation of a Parquet page. It holds actual data and thus cloning it is expensive."],["CompressionOptions","Defines the compression settings for writing a parquet file."],["EncodedPage","A [`EncodedPage`] is an uncompressed, encoded representation of a Parquet page. It may hold actual data and thus cloning it may be expensive."],["Encoding",""],["Nested","Descriptor of nested information of a field"],["ParquetPhysicalType","The set of all physical types representable in Parquet"],["ParquetType","Representation of a Parquet type describing primitive and nested fields, including the top-level schema of the parquet file."],["Version","The parquet version to use"]],"fn":[["array_to_columns","Returns a vector of iterators of [`EncodedPage`], one per leaf column in the array"],["array_to_page","Converts an [`Array`] to a [`CompressedPage`] based on options, descriptor and `encoding`."],["array_to_page_simple","Converts an [`Array`] to a [`CompressedPage`] based on options, descriptor and `encoding`."],["array_to_pages","Returns an iterator of [`EncodedPage`]."],["can_encode","Checks whether the `data_type` can be encoded as `encoding`. Note that this is whether this implementation supports it, which is a subset of what the parquet spec allows."],["compress","Compresses an [`EncodedPage`] into a [`CompressedPage`] using `compressed_buffer` as the intermediary buffer."],["row_group_iter","Maps a [`Chunk`] and parquet-specific options to an [`RowGroupIter`] used to write to parquet"],["to_parquet_schema","Creates a parquet [`SchemaDescriptor`] from a [`Schema`]."],["to_parquet_type","Creates a [`ParquetType`] from a [`Field`]."],["transverse","Transverses the `data_type` up to its (parquet) columns and returns a vector of items based on `map`. This is used to assign an [`Encoding`] to every parquet column based on the columns’ type (see example)"],["write_metadata_sidecar","Writes a parquet file containing only the header and footer"]],"struct":[["BrotliLevel","Represents a valid brotli compression level."],["CompressedDataPage","A [`CompressedDataPage`] is compressed, encoded representation of a Parquet data page. It holds actual data and thus cloning it is expensive."],["Compressor","A [`FallibleStreamingIterator`] that consumes [`EncodedPage`] and yields [`CompressedPage`] holding a reusable buffer ([`Vec<u8>`]) for compression."],["Descriptor","A descriptor of a parquet column. It contains the necessary information to deserialize a parquet column."],["DynIter","[`DynIter`] is an implementation of a single-threaded, dynamically-typed iterator."],["DynStreamingIterator","Dynamically-typed [`FallibleStreamingIterator`]."],["FieldInfo","Common type information."],["FileMetaData","Metadata for a Parquet file."],["FileSink","Sink that writes array `chunks` as a Parquet file."],["FileWriter","An interface to write a parquet to a [`Write`]"],["GzipLevel","Represents a valid gzip compression level."],["KeyValue","Wrapper struct to store key values"],["RowGroupIterator","An iterator adapter that converts an iterator over [`Chunk`] into an iterator of row groups. Use it to create an iterator consumable by the parquet’s API."],["SchemaDescriptor","A schema descriptor. This encapsulates the top-level schemas for all the columns, as well as all descriptors for all the primitive columns."],["ThriftFileMetaData","Description for file metadata"],["WriteOptions","Currently supported options to write to parquet"],["ZstdLevel","Represents a valid zstd compression level."]],"trait":[["FallibleStreamingIterator","A fallible, streaming iterator."]],"type":[["RowGroupIter",""]]};