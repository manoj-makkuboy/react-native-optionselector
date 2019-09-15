import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import { Audio } from "expo-av";

export default class OptionSelector extends React.Component {
  static propTypes = {
    selectionColor: PropTypes.string,
    onPress: PropTypes.func,
    options: PropTypes.array
  };

  state = {
    selectedOption: ""
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={async () => {
          this.setState({ selectedOption: item }, () => {
            this.props.onPress(this.state.selectedOption);
          });
          // const soundObject = new Audio.Sound();
          // try {
          //   await soundObject.loadAsync(
          //     require("./assets/Sounds/popSound.mp3")
          //   );
          //   await soundObject.playAsync();
          // } catch (error) {
          //   console.log(error);
          // }
        }}
      >
        <View
          style={[
            Style.option,
            {
              elevation: this.state.selectedOption === item ? 3 : 0,
              backgroundColor:
                this.state.selectedOption === item
                  ? this.props.selectionColor
                  : "#fff"
            }
          ]}
        >
          <Text>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={Style.container}>
        <FlatList
          data={this.props.options}
          keyExtractor={item => item}
          renderItem={this.renderItem}
          extraData={this.state.selectedOption}
        ></FlatList>
      </View>
    );
  }
}

Style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 3
  },
  option: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    height: 40,
    flex: 0.8,
    borderRadius: 10,
    margin: 10,
    borderColor: "#aaa",
    padding: 10
  }
});
