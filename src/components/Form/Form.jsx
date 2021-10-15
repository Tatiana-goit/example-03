import { Component } from "react";
import { v4 as uuid } from "uuid";

class Form extends Component {
  prodIdTitle = uuid();
  prodIdDesc = uuid();
  prodIdAgree = uuid();
  prodIdSize = uuid();
  prodIdLicence = uuid();

  state = {
    title: "",
    desc: "",
    size: "",
    agreed: false,

    product: null,
    experience: "junior",
    licence: false,
  };

  handleCheck = e => {
    const { name, checked } = e.target;
    const { agreed } = this.state;
    console.log("name", name);
    console.log("checked", checked);
    this.setState({
      agreed: !agreed,
    });
  };

  handleLicence = e => {
      const {licence} = this.state;
      this.setState({
        licence:!licence
      })
  }

  handleChange = e => {
    const { value, name } = e.target;
    console.log(e.target.value);
    console.log(value);
    console.log(name);
    this.setState({
      [name]: value,
    });
  };

  handleChangeAllInputs = e => {
    const { name, type, checked, value } = e.target;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, desc, size, experience } = this.state;
    const product = {
      title,
      description: desc,
      size,
      experience,
    };

    this.setState({ product });
    this.props.addNewProduct(product);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      title: "",
      desc: "",
      size: "",
    });
  };

  render() {
    const { title, desc, size, agreed} = this.state;
    const {
      handleChangeAllInputs,
      handleSubmit,
    //   handleChange, , experience, licence 
    //   handleLicence,
      prodIdTitle,
      prodIdDesc,
      prodIdSize,
      prodIdAgree,
    //   prodIdLicence
    } = this;

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="prodIdTitle">Title</label>
        <input
          id={prodIdTitle}
          name="title"
          type="text"
          value={title}
          onChange={handleChangeAllInputs}
        ></input>
        <br />

        <label htmlFor={prodIdDesc}>Describtion</label>
        <input
          id={prodIdDesc}
          name="desc"
          type="text"
          value={desc}
          onChange={handleChangeAllInputs}
        ></input>
        <br />

        <label htmlFor={prodIdSize}>Your size</label>
        <select
          id={prodIdSize}
          name="size"
          value={size}
          onChange={handleChangeAllInputs}
        >
          <option value="" disabled>
            ...
          </option>
          <option value="s">s</option>
          <option value="s">m</option>
          <option value="s">l</option>
        </select>
        <br />

        <label htmlFor={prodIdAgree}>Agree?</label>
        <input
          type="checkbox"
          name="agreed"
          id={prodIdAgree}
          checked={agreed}
          onChange={handleChangeAllInputs}
        ></input>



        <br />
        <button type="submit" disabled={!agreed}>
          Add
        </button>
      </form>
    );
  }
}

export default Form;