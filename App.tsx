import React, {useState} from 'react';
import {BarChart} from 'react-native-chart-kit';
import {StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';

const data = {
  labels: ["1st", "2nd", "3rd"],
  datasets: [{data: [25,30,45]}]
};

function App(): JSX.Element {
  const [chartData, setChartData] = useState(data);
  const [marks, setMarks] = useState('');
  const [termName, setTermName] = useState('');

  const handleAddItemUpdate =()=>{
    setChartData({
      labels: [...chartData.labels,termName],
      datasets: [{data: [...chartData.datasets[0].data,Number(marks)]}]
    })
  }

  return (
    <View style={styles.sectionContainer}>
      <View>
        <BarChart
          data={chartData}
          width={350}
          height={350}
          segments={5}
          fromZero={true}
          yAxisLabel={''}
          yAxisSuffix={''}
          flatColor={true}
          xLabelsOffset={5}
          yLabelsOffset={8}
          withInnerLines={true}
          style={{borderRadius:16,margin:16}}
          showValuesOnTopOfBars={true}
          chartConfig={{
            backgroundColor: "#830080",
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            barRadius:6,
            propsForBackgroundLines:{ },
            linejoinType:'round',
            color: () => `#FF1493`, // Change this to the desired color FF1493
            labelColor: () => `black`,
          }}
        />
      </View>

      <View style={styles.btnContainer}>
        <TextInput
            keyboardType={'number-pad'}
            onChangeText={setMarks}
            placeholder={'Enter Marks'}
            style={styles.inputField}
        />
        <TextInput
            onChangeText={setTermName}
            placeholder={'Enter Name'}
            style={styles.inputField}/>
        <TouchableOpacity
            onPress={handleAddItemUpdate}
            style={styles.addItem}>
          <Text>Add item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingHorizontal:18,
    alignItems: 'center',
    backgroundColor:'#89CFF0'
  },
  inputField: {marginTop:12,margin:8,padding:5,borderWidth:.5,borderRadius:12,backgroundColor:'white'},
  btnContainer: {flexDirection:'row',justifyContent:'space-evenly'},
  addItem: {
    marginTop:12,
    flex: 1,
    margin:8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'yellow',
    borderRadius:12
  },
  gridContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  verticalGridLine: {
    width: 1,
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  horizontalGridLine: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
});

export default App;
