import React, {Component} from 'react';  

/* Import Components */
import Input from '../components/Input';
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '../components/Button'
import SightingList from '../containers/SightingList';


class FormContainer extends Component {  
  constructor(props) {
    super(props);



    this.state = {
      newUser: {
        name: '',
          img:'',
        rarity: '',
        notes: ''

      },

      rarityOptions: ['common', 'rare', 'extremely rare'],


    }
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);



  }

  /* This lifecycle hook gets executed when the component mounts */
  
  handleName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, name: value
        }
      }), () => console.log(this.state.newUser))
  }



  handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, [name]: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, notes: value
      }
      }), ()=>console.log(this.state.newUser))
  }



   handleFileInput(e) {
      const name = e.target.name
       console.log(name);
       const file = e.target.files[0];
      console.log(file)
       getBase64(file).then(base64 => {
           let  data = {base64};

           this.setState(prevState => ({
               newUser: {
                   ...prevState.newUser, img: data
               }
           }), ()=>console.log(this.state.newUser))

       });
   };



  handleFormSubmit = (e) => {
    e.preventDefault();
    let userData = this.state.newUser;
      const timestamp = new Date();

      const item={
          time: timestamp,
          value: userData,

  }

        console.log(localStorage.getItem(localStorage.key("0")));

      localStorage.setItem( '"' + localStorage.length + '"' , JSON.stringify(item));
      const myStorage = window.localStorage;
      console.log( myStorage);
      console.log(localStorage.length);
      window.location.reload();


  }



  handleClearForm(e) {
  
      e.preventDefault();
      this.setState({ 
        newUser: {
          name: '',
            img: '',
          rarity: '',
          notes: ''
        },
      })
  }






    render() {


    return (
<div>
    <div id={"submitFormContainer"} >
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
       
            <Input inputType={'text'}
                   title= {'Name of teh species'}
                   name= {'name'}
                   value={this.state.newUser.name}
                   placeholder = {'Enter species name'}
                   handleChange = {this.handleInput}
                   
                   />


          <Select title={'Rarity'}
                  name={'rarity'}
                  options = {this.state.rarityOptions}
                  value = {this.state.newUser.rarity}
                  placeholder = {'Select rarity'}
                  handleChange = {this.handleInput}
                  />

          <TextArea
            title={'Notes.'}
            rows={10}
            value={this.state.newUser.notes}
            name={'currentPetInfo'}
            handleChange={this.handleTextArea}
            placeholder={''} />

            <Input inputType={'file'}
                   handleChange = {this.handleFileInput}

            />

          <Button 
              action = {this.handleFormSubmit}
              type = {'primary'} 
              title = {'Submit'} 
            style={buttonStyle}
          /> { /*Submit */ }
          
          <Button 
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> {/* Clear the form */}
          
        </form>

    </div>
    <SightingList/>
</div>
    );
  }

}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
    });
}



export default FormContainer;