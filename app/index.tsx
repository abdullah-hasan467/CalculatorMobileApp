import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
    ["C"],
  ];

  const handlePress = (value: string) => {
    if (value === "=") {
      try {
        // Evaluate the math expression
        const evalResult = eval(input);
        setResult(`= ${evalResult}`);
      } catch (e) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        {buttons.map((button, Index) => (
          <View key={Index} style={styles.buttonRow}>
            {button.map((btn) => (
              <TouchableOpacity
                key={btn}
                style={styles.button}
                onPress={() => handlePress(btn)}
              >
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  display: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 24,
    backgroundColor: "#fff",
  },
  inputText: {
    fontSize: 36,
    textAlign: "right",
    color: "#333",
  },
  resultText: {
    fontSize: 24,
    textAlign: "right",
    color: "#666",
    marginTop: 10,
  },
  buttonsContainer: {
    paddingBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#e0e0e0",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "#333",
  },
});
