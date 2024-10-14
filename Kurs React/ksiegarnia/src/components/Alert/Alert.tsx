import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

interface AlertDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export default function AlertDialog({ open, onClose, onConfirm: onAddBook }: AlertDialogProps) {

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Na pewno chcesz usunąć tę ksiażkę?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Nie</Button>
          <Button onClick={onAddBook} autoFocus>
            Tak
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
