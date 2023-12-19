import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SamochodSwing
{
    JButton button1;

    JTextField textField1;
    JTextField textField2;
    JTextField textField3;
    JTextField textField4;

    JLabel label1;
    JLabel label2;
    JLabel label3;
    JLabel label4;

    JTextArea textArea1;

    Samochod samochod;
    String obj_nazwa;

    public SamochodSwing(Samochod samochod, String obj_nazwa)
    {
        this.samochod = samochod;
        this.obj_nazwa = obj_nazwa;

        JFrame frame = new JFrame("Obiekt typu samochod, o nazwie: " + obj_nazwa);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 400);
        textField1 = new JTextField();
        textField2 = new JTextField();
        textField3 = new JTextField();
        textField4 = new JTextField();
        button1 = new JButton("Zapisz");
        label1 = new JLabel("Marka:");
        label2 = new JLabel("Ilosc miejsc:");
        label3 = new JLabel("Rok produkcji:");
        label4 = new JLabel("Moc:");
        textArea1 = new JTextArea();

        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(6, 2));
        panel.add(label1);
        panel.add(textField1);
        panel.add(label2);
        panel.add(textField2);
        panel.add(label3);
        panel.add(textField3);
        panel.add(label4);
        panel.add(textField4);
        button1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                samochod.marka = textField1.getText();
                samochod.ile_osob = Integer.parseInt(textField2.getText());
                samochod.rocznik = Integer.parseInt(textField3.getText());
                samochod.moc = Integer.parseInt(textField4.getText());
                textArea1.append(samochod.tostring() + "\n");
                samochod.zapiszDoPliku("samochody");
            }
        });
        panel.add(button1);
        frame.getContentPane().add(panel, BorderLayout.NORTH);
        frame.getContentPane().add(new JScrollPane(textArea1), BorderLayout.CENTER);
        frame.setVisible(true);
    }
}
