import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, Send,InputToolbar } from 'react-native-gifted-chat'
import Ionicons from 'react-native-vector-icons/Ionicons';
const MessagesScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: require('../../assets/6.jpg'),
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const renderSend=(props)=>{
    return(
     <Send {...props}>
        <View>
        <Ionicons  name="ios-send" size={25} color='#EF4444' style={{marginBottom:10,marginRight:10}}/>
        </View>
     </Send>
    )
  }
  const renderInputToolbar=(props)=>{
    return(
      <InputToolbar {...props} containerStyle={{borderTopWidth: 1, borderTopColor: '#E2E8F0',height:50,}}/>
    )
  }
  return (
    

    <GiftedChat
    messages={messages}
    onSend={messages => onSend(messages)}
    user={{
      _id: 1,
    }}
    alwaysShowSend
    renderSend={renderSend}
    multiline={true}
    renderInputToolbar={renderInputToolbar}
    />
 
  )
}

export default MessagesScreen

const styles = StyleSheet.create({})