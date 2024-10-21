import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import Layout from '../components/Layout'; // Import your reusable layout
import productsData from '../data/productsData'; // Sample data file
import SearchBar from '../components/SearchBar'; // Import the reusable search bar

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Sample categories for filtering
  const categories = ['All', 'Category 1', 'Category 2', 'Category 3'];

  // Filter products based on search term and selected category
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setPage(0); // Reset to first page on category change
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page on rows per page change
  };

  return (
    <Layout>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          Products
        </Typography>

        {/* Reusable Search Bar */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Category Filter */}
        {/* <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Category</InputLabel>
          <Select value={category} onChange={handleCategoryChange}>
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}

        {/* Products Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>
                  <TableSortLabel>
                    Price
                  </TableSortLabel>
                </TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary">
                        Add to Cart
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination Controls */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredProducts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>
    </Layout>
  );
};

export default ProductsPage;
