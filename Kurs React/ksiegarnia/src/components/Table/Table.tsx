import { useState } from "react";
import Bdialog, { Book } from "../Dialog/Dialog";
import { addBook, deleteBook, editBook, getBooks } from "../../utils";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AlertDialog from "../Alert/Alert";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "tytul", headerName: "Tytuł", width: 150 },
  { field: "autor", headerName: "Autor", width: 150 },
  {
    field: "rokWydania",
    headerName: "Rok wydania",
    type: "number",
    width: 100,
  },
  { field: "liczbaKopii", headerName: "Liczba kopii", type: "number", width: 150 },
  {
    field: "cena",
    headerName: "Cena",
    type: "number",
    width: 100,
    valueGetter: (value) => `${value} PLN`,
  },
  {
    field: "gatunek",
    headerName: "Gatunek",
    width: 160,
  },
];

export default function Table() {

  const queryCLient = useQueryClient();
  const books = useQuery({ queryKey: ["books"], queryFn: getBooks });

  const addBookMutation = useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      queryCLient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  const deleteBookMutation = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryCLient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  const editBookMutation = useMutation({
    mutationFn: editBook,
    onSuccess: () => {
      queryCLient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  const [editOpened, setEditOpened] = useState<boolean>(false);
  const [addOpened, setAddOpened] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<number>();
  const [alertOpen, setAlertOpen] = useState<boolean>(false);


  if (books.isLoading) return "Loading...";

  const dataColumns = [
    ...columns,
    {
      field: "edytuj",
      headerName: "Edytuj",
      width: 40,
      renderCell: (params: GridRenderCellParams) => (
        <ModeEditIcon onClick={() => {
          setSelectedBook(params.id as number);
          setEditOpened(true);
        }}/>
      ),
    },
    {
      field: "usun",
      headerName: "Usuń",
      width: 40,
      renderCell: (params: GridRenderCellParams) => (
        <DeleteIcon onClick={() => {
          setAlertOpen(true);
          setSelectedBook(params.id as number);
        }}/>
      ),
    },
  ];

  function handleAdd(book: Book) {
    addBookMutation.mutate(book);
  }

  return (
    <div className="Table">
      <div className="List">
        <DataGrid
          rows={books.data}
          columns={dataColumns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 15, 20]}
          checkboxSelection={false}
          rowSelectionModel={[]}
        />
      </div>
      <Bdialog
        id={selectedBook}
        isOpened={editOpened}
        key={selectedBook}
        onSave={(book) => editBookMutation.mutate(book)}
        onClose={() => setEditOpened(false)}
      />
      <Bdialog
        isOpened={addOpened}
        key={`add-${addOpened}`}
        onSave={(book) => handleAdd(book)}
        onClose={() => setAddOpened(false)}
      />
      <IconButton
        onClick={() => setAddOpened(true)}
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          backgroundColor: '#1976d2',
          color: 'white',
          width: '56px',
          height: '56px',
          borderRadius: '28px',
          boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)'
        }}
      >
        <AddIcon />
      </IconButton>
      {/* <AddIcon onClick={() => setAddOpened(true)}/> */}
      <AlertDialog
        onAddBook={() => {
          deleteBookMutation.mutate(selectedBook as number);
          setAlertOpen(false);
        }}
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
      />
    </div>
  );
}
