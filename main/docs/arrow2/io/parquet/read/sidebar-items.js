window.SIDEBAR_ITEMS = {"enum":[["DataPageHeader",""],["GroupLogicalType",""],["Page","A [`Page`] is an uncompressed, encoded representation of a Parquet page. It may hold actual data and thus cloning it may be expensive."],["ParquetError","Errors generated by this crate"],["ParquetTimeUnit",""],["ParquetType","Representation of a Parquet type describing primitive and nested fields, including the top-level schema of the parquet file."],["PhysicalType","The set of all physical types representable in Parquet"],["PrimitiveConvertedType",""],["PrimitiveLogicalType",""],["State","State of [`MutStreamingIterator`]."]],"fn":[["_read_columns_indexes","Reads the column indexes of all [`ColumnChunkMetaData`] and deserializes them into [`Index`]. Returns an empty vector if indexes are not available"],["_read_metadata","Reads a [`FileMetaData`] from the reader, located at the end of the file."],["_read_metadata_async","Asynchronously reads the files’ metadata"],["column_iter_to_arrays","An iterator adapter that maps multiple iterators of [`Pages`] into an iterator of [`Array`]s."],["decompress","Decompresses the page, using `buffer` for decompression. If `page.buffer.len() == 0`, there was no decompression and the buffer was moved. Else, decompression took place."],["get_column_iterator","Returns a [`ColumnIterator`] of column chunks corresponding to `field`."],["get_field_columns","Returns all [`ColumnChunkMetaData`] associated to `field_name`. For non-nested parquet types, this returns a single column"],["get_field_pages","Returns all [`ColumnChunkMetaData`] associated to `field_name`. For non-nested parquet types, this returns a single column"],["get_page_iterator","Creates a new iterator of compressed pages."],["get_page_stream","Returns a stream of compressed data pages"],["int96_to_i64_ns",""],["read_columns","Reads all columns that are part of the parquet field `field_name`"],["read_columns_async","Reads all columns that are part of the parquet field `field_name`"],["read_columns_many","Returns a vector of iterators of [`Array`] ([`ArrayIter`]) corresponding to the top level parquet fields whose name matches `fields`’s names."],["read_columns_many_async","Returns a vector of iterators of [`Array`] corresponding to the top level parquet fields whose name matches `fields`’s names."],["read_metadata","Reads parquets’ metadata syncronously."],["read_metadata_async","Reads parquets’ metadata asynchronously."],["read_pages_locations","Read [`PageLocation`]s from the [`ColumnChunkMetaData`]s. Returns an empty vector if indexes are not available"],["to_deserializer","Converts a vector of columns associated with the parquet field whose name is [`Field`] to an iterator of [`Array`], [`ArrayIter`] of chunk size `chunk_size`."]],"mod":[["indexes","API to perform page-level filtering (also known as indexes)"],["schema","APIs to handle Parquet <-> Arrow schemas."],["statistics","APIs exposing `parquet2`’s statistics as arrow’s statistics."]],"struct":[["BasicDecompressor","A [`FallibleStreamingIterator`] that decompresses [`CompressedPage`] into [`DataPage`]."],["ColumnChunkMetaData","Metadata for a column chunk."],["ColumnDescriptor","A descriptor for leaf-level primitive columns. This encapsulates information such as definition and repetition levels and is used to re-assemble nested data."],["CompressedDataPage","A [`CompressedDataPage`] is compressed, encoded representation of a Parquet data page. It holds actual data and thus cloning it is expensive."],["Decompressor","Decompressor that allows re-using the page buffer of [`PageIterator`]."],["FileMetaData","Metadata for a Parquet file."],["FileReader","An iterator of [`Chunk`]s coming from row groups of a parquet file."],["PageReader","A fallible [`Iterator`] of [`CompressedDataPage`]. This iterator reads pages back to back until all pages have been consumed. The pages from this iterator always have [`None`] [`crate::page::CompressedDataPage::selected_rows()`] since filter pushdown is not supported without a pre-computed page index."],["ReadColumnIterator","A [`MutStreamingIterator`] of pre-read column chunks"],["RowGroupDeserializer","An [`Iterator`] of [`Chunk`] that (dynamically) adapts a vector of iterators of [`Array`] into an iterator of [`Chunk`]."],["RowGroupMetaData","Metadata for a row group."],["RowGroupReader","An [`Iterator<Item=RowGroupDeserializer>`] from row groups of a parquet file."]],"trait":[["FallibleStreamingIterator","A fallible, streaming iterator."],["MutStreamingIterator","A special kind of fallible streaming iterator where `advance` consumes the iterator."],["Pages","Trait describing a [`FallibleStreamingIterator`] of [`Page`]"]],"type":[["ArrayIter","Type def for a sharable, boxed dyn [`Iterator`] of arrays"],["PageFilter","Type declaration for a page filter"]]};