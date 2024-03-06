import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import IsMeBubble from './IsMeBubble';
import OtherBubble from './OtherBubble';

const ChatItem = ({isMeBubble}) => {
  if (isMeBubble) {
    return <IsMeBubble />;
  }
  return <OtherBubble />;
};

export default ChatItem;
