import React from 'react';
import { TextInput} from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    placeholder: string;
    value: string; 
    onChangeText: (text: string) => void;
}

export const InputComponent = ({ value, onChangeText, placeholder }:Props) => (
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType="numeric"
    />
);
