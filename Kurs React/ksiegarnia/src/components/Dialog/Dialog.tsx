import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { getBook } from "../../utils";
import Form from "../Form/Form";

export interface Book {
  id: number;
  tytul: string;
  autor: string;
  rokWydania: number;
  liczbaKopii: number;
  cena: number;
  gatunek: string;
}

interface BdialogProps {
  id?: number;
  isOpened: boolean;
  onSave: (updatedBook: Book) => void;
  onClose: () => void
}

export default function Bdialog({ id, isOpened, onSave, onClose }: BdialogProps) {
  const [open, setOpen] = useState(isOpened);

  function handleClose() {
    setOpen(false);
    onClose()
  }

  function handleSave(book: Book) {
    onSave(book);
    setOpen(false);
    onClose()
  }

  const bookQuery = useQuery({
    queryKey: ["books", id],
    queryFn: () => getBook(id as number),
    enabled: id !== undefined,
  });
  const { isLoading, data: bookData } = bookQuery;

  const emptyBook: Book = {
    id: 0,
    tytul: "",
    autor: "",
    rokWydania: 0,
    liczbaKopii: 0,
    cena: 0,
    gatunek: "",
  };

  return (
    <div className="Form">
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{bookData ? "Zedytuj ksiązkę" : "Dodaj ksiązkę"}</DialogTitle>
        {isLoading ? (
          "Loading..."
        ) : (
          <Form book={bookData ? bookData : emptyBook} onSave={handleSave} />
        )}
      </Dialog>
    </div>
  );
}
