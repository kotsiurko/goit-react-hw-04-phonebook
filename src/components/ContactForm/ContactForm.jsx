// import { Component } from 'react';
import { useState } from 'react';
import {
  Form,
  Title,
  LabelGroup,
  LabelTitle,
  Input,
} from './ContactForm.styled';
import { Button } from '../App.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Title>Add contact</Title>

      <Form onSubmit={onFormSubmit}>
        <LabelGroup>
          <label htmlFor="">
            <LabelTitle>Name:</LabelTitle>
            <Input
              onChange={handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="">
            <LabelTitle>Number:</LabelTitle>
            <Input
              onChange={handleChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </LabelGroup>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
};

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   onFormSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <div>
//         <Title>Add contact</Title>

//         <Form onSubmit={this.onFormSubmit}>
//           <LabelGroup>
//             <label htmlFor="">
//               <LabelTitle>Name:</LabelTitle>
//               <Input
//                 onChange={this.handleChange}
//                 value={this.state.name}
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//               />
//             </label>
//             <label htmlFor="">
//               <LabelTitle>Number:</LabelTitle>
//               <Input
//                 onChange={this.handleChange}
//                 value={this.state.number}
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//               />
//             </label>
//           </LabelGroup>
//           <Button type="submit">Add</Button>
//         </Form>
//       </div>
//     );
//   }
// }
