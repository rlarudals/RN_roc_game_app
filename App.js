import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CURRENT_WIDTH = Dimensions.get(`window`).width;

const App = () => {
  const [tab, setTab] = useState(0);

  const _startButtonClickHandler = (value) => {
    setTab(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.ingameArea}>
        {tab === 0 && (
          <TouchableOpacity
            style={styles.startBtn}
            onPressOut={() => _startButtonClickHandler(1)}
          >
            <Text style={styles.startBtnTxt}>START GAME!</Text>
          </TouchableOpacity>
        )}

        {tab === 1 && (
          <View>
            <View style={styles.inGameTop}>
              <Text>TOP</Text>
            </View>
            <View style={styles.inGameMiddle}>
              <LinearGradient
                colors={["#82ccdd", "#60a3bc"]}
                style={styles.vsView}
              >
                <Text style={styles.vsText}>VS</Text>
              </LinearGradient>
            </View>
            <View style={styles.inGameBottom}>
              <Text>BOTTOM</Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.resultArea}>
        <View style={styles.resultAreaTop}></View>
        <View style={styles.resultAreaBottom}>
          {tab === 1 && (
            <TouchableOpacity
              style={styles.startBtn}
              onPressOut={() => _startButtonClickHandler(0)}
            >
              <Text style={styles.startBtnTxt}>START GAME!</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ingameArea: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  resultArea: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  resultAreaTop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  resultAreaBottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  startBtn: {
    width: CURRENT_WIDTH / 2,
    height: 45,
    backgroundColor: `#c7ecee`,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  startBtnTxt: {
    color: `#fff`,
    fontWeight: `700`,
    fontSize: 18,
  },
  inGameTop: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  inGameMiddle: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  inGameBottom: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  vsView: {
    width: CURRENT_WIDTH,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  vsText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default App;
