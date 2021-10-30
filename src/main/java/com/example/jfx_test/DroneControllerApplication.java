package com.example.jfx_test;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

import com.fazecast.jSerialComm.*;

import static com.fazecast.jSerialComm.SerialPort.LISTENING_EVENT_DATA_RECEIVED;

public class DroneControllerApplication extends Application {
    @Override
    public void start(Stage stage) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(DroneControllerApplication.class.getResource("DroneController-View.fxml"));
        Scene scene = new Scene(fxmlLoader.load(), 320, 240);
        stage.setTitle("Hello!");
        stage.setScene(scene);
        stage.show();
    }

    private static void mainSystem(SerialPort nano) {
        String data = "test\n";
        byte[] bData = data.getBytes(StandardCharsets.UTF_8);
        nano.writeBytes(bData, bData.length);
        System.out.println("Sending: "+data);
    }

    private static void readData(SerialPort port, SerialPortEvent e){
        byte[] newData = e.getReceivedData();
        String data = new String(newData);
        data = data.replace("\n", "");
        if(data.contains("System Ready")) {
            System.out.println("System initialised.....");
            launch();
            mainSystem(port);
        }
        else{
            System.out.println(data);

            //Update interfaces with new data
        }


    }

    public static void main(String[] args) throws InterruptedException, IOException {
        //launch();
        SerialPort[] ports = SerialPort.getCommPorts();
        System.out.println(Arrays.toString(ports));
        SerialPort nano = SerialPort.getCommPort("COM14");
        nano.setBaudRate(115200);
        System.out.println(nano.getBaudRate());
        nano.addDataListener(new SerialPortDataListener() {
            @Override
            public int getListeningEvents() {
                return LISTENING_EVENT_DATA_RECEIVED;
            }

            public void serialEvent(SerialPortEvent event) {
                readData(nano,event);
            }
        });
        nano.openPort();
    }
}