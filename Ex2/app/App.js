import React from 'react';
import { StyleSheet, Text, View,Button ,TextInput} from 'react-native';
class Result extends React.Component{
  render(){
    return(
      <Text>{this.props.kq}</Text>
    )
  }
}
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      convert:0,
      convertString:"Usd to Vnd",    
      input:0,  
      result:0,
      text:""
    }
  }

  _usdvnd=()=>{
    if (this.state.convert ==0 ) return
    this.setState({convert:0,convertString:"Usd to Vnd",
    text:"Usd = "+this.state.input*22800.0+" Vnd"
  })
  
}
_vndusd=()=>{

  this.setState({convert:1,convertString:"Vnd to Usd",  
    text:"Vnd = "+ this.state.input/22800.0+ " Usd"
  })
}
_usdeur=()=>{
  this.setState({convert:2,convertString:"Usd to Eur",    
    text:"Usd = "+this.state.input*0.81+ " Eur"
  })
}  
_handleTextChange=(value)=>{  
  this.setState({
    input:value,
    text:this.state.convert==0?
            "Usd = "+value*22800.0 + " Vnd"
            :this.state.convert==1?
                    "Vnd = "+ value/22800.0 + " Usd"
                    :"Usd = "+value*0.81+ " Eur"
  })
}
  render() {      
    return (
      <View style={{justifyContent: 'center',flex:1}}>
                  <View style={{justifyContent: 'center',flex:1}}/>
                    
                  <View style={{ flexDirection: 'row', marginTop:1}}>
                    <Button 
                        title="USDtoVND"
                        onPress={this._usdvnd}
                    />
                      <Button 
                        title="VNDtoUSD"
                        onPress={this._vndusd}
                    />
                      <Button 
                        title="USDtoEUR"
                        onPress={this._usdeur}
                    />
                  </View>

                  <View style={{justifyContent: 'center'}}>
                    <Text>Chế độ convert hiện tại là: {this.state.convertString} </Text>

                  </View>

                  <View style={{flexDirection: 'row' }}>
                  <TextInput
                      value={this.state.inputValue}
                      onChangeText={this._handleTextChange}
                      style={{ width: 100 }}
                    />

                    <Text>{this.state.text}</Text>

                    </View>
                    <View style={{flex:1,flexDirection: 'row' }}>
                    

                    </View>

      </View>
    );
  }
}
