import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: 'Amos',
    lastName: 'John',
    admin: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

  }
  if (event.target.type === "Checkbox"){
    value = event.target.checked;
  }
  setFormData({...formData, [name]: value});

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstName" 
        onChange={handleChange} 
        value={formData.firstName} />
        
      <input 
        type="text" 
        name="lastName" 
        onChange={handleChange} 
        value={formData.lastName} />
      
      <input 
        type="checkbox" 
        name="admin" 
        onChange={handleChange} 
        value={formData.admin}/>

      <button>Submit</button>
    </form>
  )

}

export default  Form;






















// import React, { useState } from "react";

// function Form() {
//   const [firstName, setFirstName] = useState("  ");
//   const [lastName, setLastName] = useState("  ");
//   const [submittedData, setSubmittedData] = useState([]);
//   const [errors, setErrors] = useState([]);

//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value);
//   }

//   function handleLastNameChange(event) {
//     setLastName(event.target.value);
//   }

//   function handleSubmit(event){
//       event.preventDefault();
//     if (firstName.length > 0) {
//       const formData = {firstName: firstName, lastName: lastName};
//       const dataArray = [...submittedData, formData];
//       setSubmittedData(dataArray);
//       setFirstName("");
//       setLastName("");
//       setErrors([]);
//     } 
//     else {
//       setErrors(["First name is required!"])
//     }
//   }
  
//   const listOfSubmissions = submittedData.map((data, index) => {
//     return (
//       <div key={index}>
//         {data.firstName} {data.lastName}
//       </div>
//     )
//   })

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="whats yo name, kiddo?" onChange={handleFirstNameChange} value={firstName} />
//         <input type="text" placeholder="2 names please" onChange={handleLastNameChange} value={lastName} />
//         <button type="submit">Submit</button>
//       </form>
//       {errors.length > 0 
//         ? errors.map((error, index) => (
//           <p key={index} style={{color: "red"}}>{error}</p>
//         )) : null}
//       <h3>Submissions</h3>
//       {listOfSubmissions}
//     </div>

//   );
// }

// export default Form;
