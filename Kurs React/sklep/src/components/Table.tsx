import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { visuallyHidden } from '@mui/utils';
import { useState } from "react";
import AddProduct from './AddProduct';
import Alert from './Alert';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';

interface Data {
  id: number;
  name: string;
  type: string;
  price: number;
  availability: boolean;
  density: number;
}

function createData(
  id: number,
  name: string,
  type: string,
  price: number,
  availability: boolean,
  density: number,
): Data {
  return {
    id,
    name,
    type,
    price,
    availability,
    density,
  };
}

const rows: Data[] = [
  createData(1, 'Product 1', 'Type 1', 20.5, true, 1),
  createData(2, 'Product 2', 'Type 2', 15.75, false, 0),
  createData(3, 'Product 3', 'Type 1', 30, true, 75),
  createData(4, 'Product 4', 'Type 1', 18, true, 46),
  createData(5, 'Product 5', 'Type 6', 19.30, true, 50),
  createData(6, 'Product 6', 'Type 8', 9.99, false, 0),
  createData(7, 'Product 7', 'Type 8', 9.99, false, 0),
  createData(8, 'Product 8', 'Type 8', 9.99, false, 0),
  createData(9, 'Product 9', 'Type 8', 9.99, false, 0),
  createData(0, 'Product 0', 'Type 8', 9.99, false, 0),
  createData(10, 'Product 10', 'Type 8', 9.99, false, 0),
  createData(11, 'Product 11', 'Type 8', 9.99, false, 0),
  createData(12, 'Product 12', 'Type 8', 9.99, false, 0),
  createData(13, 'Product 13', 'Type 8', 9.99, false, 0),
  createData(14, 'Product 14', 'Type 8', 9.99, false, 0),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string | boolean},
  b: { [key in Key]: number | string | boolean},
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  toRight: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    toRight: false,
    disablePadding: true,
    label: 'Nazwa',
  },
  {
    id: 'type',
    toRight: true,
    disablePadding: false,
    label: 'Typ',
  },
  {
    id: 'price',
    toRight: true,
    disablePadding: false,
    label: 'Cena(PLN)',
  },
  {
    id: 'availability',
    toRight: true,
    disablePadding: false,
    label: 'Dostępność',
  },
  {
    id: 'density',
    toRight: true,
    disablePadding: false,
    label: 'Liczba dostępnych sztuk',
  },
];

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.toRight ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell>
          Akcje
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('density');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = useState(rows);
  const [deletedProductName, setDeletedProductName] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const firstRowIndex = page * rowsPerPage;
  const lastRowIndex = Math.min((page + 1) * rowsPerPage, data.length);
  let numberOfRowsOnCurrentPage = lastRowIndex - firstRowIndex;

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(data, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [data, order, orderBy, page, rowsPerPage],
  );

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Paper>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table 
              stickyHeader aria-label="sticky table" sx={{ minWidth: 750 }}
            >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {visibleRows.map((row, index) => {
                  return (
                    <TableRow>
                      <TableCell
                        component="th"
                        scope="row"
                        padding="none"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.type}</TableCell>
                      <TableCell align="right">{row.price + ' PLN'}</TableCell>
                      <TableCell align="right">{row.availability ? 'tak' : 'nie'}</TableCell>
                      <TableCell align="right">{row.density}</TableCell>
                      <TableCell>
                        <Tooltip title="Delete">
                          <IconButton
                            onClick={() => {
                              const newData = data.filter(item => item.id !== row.id);
                              setData(newData);
                              setDeletedProductName(row.name);
                              const newEmptyRows = rowsPerPage - (newData.length % rowsPerPage);
                              if (newEmptyRows === rowsPerPage && page > 0) {
                                setPage(page - 1);
                              }
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
      </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
    <Button variant="contained" endIcon={<Icon>add_circle</Icon>} onClick={() => setOpen(true)} >
      Add Product
    </Button>
    {deletedProductName !== '' && <Alert name={deletedProductName} onClose={() => setDeletedProductName('')} />}
    {open && <AddProduct data={data} onClose={() => 
      setOpen(false)} updateData={(newData: Data[]) => {
        setData(newData);
      }} />}
    </>
  );
}