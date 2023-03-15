import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/actions/postActions';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
  
    const dispatch = useDispatch();
  
    const handleSubmit = () => {
      const post = { title, body };
      dispatch(createPost(post));
    };
  
    return (
      <View>
        <Text>Create Post</Text>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          placeholder="Body"
          value={body}
          onChangeText={text => setBody(text)}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    );
  };
  
  export default CreatePost;

  