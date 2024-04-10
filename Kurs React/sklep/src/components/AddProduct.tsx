import * as React from 'react';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

interface Data {
  id: number;
  name: string;
  type: string;
  price: number;
  availability: boolean;
  density: number;
}

interface AddProductIProps {
  data: Data[];
  onClose: () => void;
  updateData: (newData: Data[]) => void;
}

export default function AddProduct({data, onClose, updateData}: AddProductIProps) {
  const [nameError, setNameError] = React.useState(false);
  const [typeError, setTypeError] = React.useState(false);
  const [priceError, setPriceError] = React.useState(false);
  const [densityError, setDensityError] = React.useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value.trim();
    setNameError(name === '');
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const type = event.target.value.trim();
    setTypeError(type === '');
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = event.target.value.trim();
    setPriceError(price === '' || isNaN(parseFloat(price)));
  };

  const handleDensityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const density = event.target.value.trim();
    setDensityError(density === '' || isNaN(parseInt(density)));
  };
 
    return (
      <>
        <Dialog
          open={true}
          onClose={onClose}
          PaperProps={{
            component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              if(!nameError && !typeError && !priceError && !densityError){
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries((formData as any).entries());
                const newData = {
                  id: data.length + 1, 
                  name: formJson.name,
                  type: formJson.type,
                  price: parseFloat(formJson.price), 
                  density: parseInt(formJson.density),
                  availability: parseInt(formJson.density) > 0 ? true : false,
                };
                updateData([...data, newData]); 
                onClose();
              }
            },
          }}
        >
          <DialogTitle>Dodaj nowy produkt</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="name"
              fullWidth
              variant="standard"
              error={nameError}
              helperText={nameError ? "Wrong input" : ""}
              onChange={handleNameChange}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="type"
              name="type"
              label="Type"
              type="type"
              fullWidth
              variant="standard"
              error={typeError}
              helperText={typeError ? "Wrong input" : ""}
              onChange={handleTypeChange}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="price"
              name="price"
              label="Price"
              type="price"
              fullWidth
              variant="standard"
              error={priceError}
              helperText={priceError ? "Wrong input" : ""}
              onChange={handlePriceChange}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="density"
              name="density"
              label="Density"
              type="density"
              fullWidth
              variant="standard"
              error={densityError}
              helperText={densityError ? "Wrong input" : ""}
              onChange={handleDensityChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Zamknij</Button>
            <Button type="submit">Dodaj</Button>
          </DialogActions>
        </Dialog>
      </>
    );
}
