package com.example.jfx_test;

import javafx.fxml.FXML;
import javafx.scene.control.Label;

public class DroneApplicationController {
    @FXML
    private Label welcomeText;

    @FXML
    protected void onHelloButtonClick() {
        welcomeText.setText("Welcome to JavaFX Application!");
    }
}