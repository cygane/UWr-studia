import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class PojazdSwing extends JFrame {
    JButton button1;


    JTextField textField1;
    JTextField textField2;
    JTextField textField3;

    JLabel label1;
    JLabel label2;
    JLabel label3;

    JTextArea textArea1;

    Pojazd pojazd;
    String obj_nazwa;

    public PojazdSwing(Pojazd pojazd, String obj_nazwa)
    {
        this.pojazd = pojazd;
        this.obj_nazwa = obj_nazwa;

        JFrame frame = new JFrame("Obiekt typu pojazd, o nazwie: " + obj_nazwa);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 400);
        textField1 = new JTextField();
        textField2 = new JTextField();
        textField3 = new JTextField();
        button1 = new JButton("Zapisz");
        label1 = new JLabel("Marka:");
        label2 = new JLabel("Ilosc miejsc:");
        label3 = new JLabel("Rok produkcji:");
        textArea1 = new JTextArea();

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(4, 2));
        panel.add(label1);
        panel.add(textField1);
        panel.add(label2);
        panel.add(textField2);
        panel.add(label3);
        panel.add(textField3);
        button1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                pojazd.marka = textField1.getText();
                pojazd.ile_osob = Integer.parseInt(textField2.getText());
                pojazd.rocznik = Integer.parseInt(textField3.getText());
                textArea1.append(pojazd.tostring() + "\n");
                pojazd.zapiszDoPliku("pojazdy");
            }
        });
        panel.add(button1);
        frame.getContentPane().add(panel, BorderLayout.NORTH);
        frame.getContentPane().add(new JScrollPane(textArea1), BorderLayout.CENTER);
        frame.setVisible(true);
    }
}
