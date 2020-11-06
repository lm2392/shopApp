import React, {  useEffect, useCallback, useReducer } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Alert
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../components/UI/Input';

import HeaderButton from '../../components/UI/HeaderButton';
import * as productsActions from '../../store/actions/products';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

const formReducer = (state, action) => { 
    if(action.type === FORM_INPUT_UPDATE){

      const updatedValues = { 
        ...state.inputValues,
        [action.input]: action.value
      };
      const updatedValidities = { 
        ...state.inputValidities,
        [action.input]: action.isValid
      };

      let updatedformIsValid = true;

      for (const key in updatedValidities) {
        updatedformIsValid = updatedformIsValid && updatedValidities[key];
      }
      return {
      formIsValid: updatedformIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
      };
      }
      return state;
};

const EditProductScreen = props => {
  const prodId = props.navigation.getParam('productId');
  const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id === prodId));
  const dispatch = useDispatch(); 

  const [formState, dispatchFormState] = useReducer(formReducer,
     {
      inputValues: {
        title : editedProduct ? editedProduct.title : '',
        imageUrl : editedProduct ? editedProduct.imageUrl : '',
        description : editedProduct ? editedProduct.description : '',
        price: editedProduct ? parseFloat(editedProduct.price): ''
     },
      inputValidities:{
        title : editedProduct ? true: false,
        imageUrl : editedProduct ? true: false,
        description : editedProduct ? true: false,
        price: editedProduct ? true: false
     },
      formIsValid: editedProduct ? true: false
    }
  );

  const submitHandler = useCallback(() => {
    
    if(!formState.formIsValid){
      Alert.alert('Wrong input','Please check the errors in the form',[{text: 'OK'}])
      return;
    }

    if (editedProduct) {
      dispatch(
        productsActions.updateProduct(prodId, formState.inputValues.title, formState.inputValues.description, formState.inputValues.imageUrl, formState.inputValues.price)
      );
    } else {
      dispatch(
        productsActions.createProduct(formState.inputValues.title, formState.inputValues.description, formState.inputValues.imageUrl, +formState.inputValues.price)
      );
    }
    props.navigation.goBack();
  }, [dispatch, prodId, formState]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
  
    dispatchFormState ({type:FORM_INPUT_UPDATE, value: inputValue, isValid:inputValidity, input:inputIdentifier});
  },[dispatchFormState]);


  return (
    <ScrollView>
    <View style={styles.form}>
     <Input 
       id= 'title'
       label = 'Title'
       errorText = 'Please enter a valid title!'
       keyboardType= "default"
       autoCapitalize = "sentence"
       autoCorrect
       returnKeyType="next"
       onInputChange={inputChangeHandler}
       initialValue = {editedProduct ? editedProduct.title : ''}
       initiallyValid = {!!editedProduct}
       required
       />

      <Input 
       id= 'imageURL'
       label = 'ImageURL'
       errorText = 'Please enter a valid link!'
       keyboardType= "default"
       returnKeyType="next"
       onInputChange={inputChangeHandler}
       initialValue = {editedProduct ? editedProduct.imageUrl : ''}
       initiallyValid = {!!editedProduct}
       required
       />

      <Input 
      id= 'price'
      label = 'Price'
      errorText = 'Please enter a valid Price!'
      keyboardType= "decimal-pad"
      returnKeyType="next"
      floatNum
      initialValue = {editedProduct.price}
      onInputChange={inputChangeHandler}
      initiallyValid = {!!editedProduct}
      min={0.1}
      />
        

      <Input 
          id='descriptions'
          label = 'Description'
          errorText = 'Please enter a valid Description!'
          keyboardType= "default"
          autoCapitalize = "sentence"
          autoCorrect
          multiline 
          numberOfLines={3}
          onInputChange={inputChangeHandler}
          initialValue = {editedProduct ? editedProduct.description : ''}
          initiallyValid = {!!editedProduct}
          required
          minLength={5}
          />

      </View>
    </ScrollView>
  );
};

EditProductScreen.navigationOptions = navData => {
  const submitFn = navData.navigation.getParam('submit');
  return {
    headerTitle: (navData.navigation.getParam('productId') ? 'Edit Product': 'Add Product'),
    headerRight: () =>  (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
          }
          onPress={submitFn}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  formControl: {
    width: '100%'
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});

export default EditProductScreen;
