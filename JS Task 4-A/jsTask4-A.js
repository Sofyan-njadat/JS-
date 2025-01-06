function handleSubmit(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let date = document.getElementById("date").value;
    let image = document.getElementById("img").value;
    let description = document.getElementById("des").value;
    let university = document.getElementById("university").value;
    let languages = [];
    if (document.getElementById("html").checked) {
      languages.push("HTML");
    }
    if (document.getElementById("css").checked) {
      languages.push("CSS");
    }
    if (document.getElementById("js").checked) {
      languages.push("JavaScript");
    }
    let siblingsNumber = document.getElementById("sNumbers").value;
    let descriptionSiblings = document.getElementById("des.Siblings").value;

    let output = document.getElementById("output");
    output.innerHTML =
      "Name: " +
      name +
      "<br>Age: " +
      age +
      "<br>Gender : " +
      gender +
      "<br>Birth Of Date " +
      date +
      "<br>Image: " +
      image +
      "<br>Desciption: " +
      description +
      "<br>University: " +
      university +
      "Programming Languages: " + languages.join(", ") +
      "<br>" +
      "Sibling Numbers: " +
      siblingsNumber +
      "<br>Description Of Siblings: " +
      descriptionSiblings;
  }


  

  function saveToLocal() {
    localStorage.setItem("Name: ", document.getElementById("name").value);
    localStorage.setItem("Age: ", document.getElementById("age").value);
    localStorage.setItem(
      "Gender: ",
      document.getElementById("gender").value
    );
    localStorage.setItem("Birth Of Date: ",document.getElementById("date").value
    );
    localStorage.setItem("Image: ", document.getElementById("img").value);
    localStorage.setItem(
      "Desciption: ",
      document.getElementById("des").value
    );
    localStorage.setItem(
      "University: ",
      document.getElementById("university").value
    );
    localStorage.setItem(
      "Programming Language: ",
      document.getElementById("html").value
    );
    localStorage.setItem(
      "Programming Language: ",
      document.getElementById("css").value
    );
    localStorage.setItem(
      "Programming Language: ",
      document.getElementById("js").value
    );
    localStorage.setItem(
      "Sibling Numbers: ",
      document.getElementById("sNumbers").value
    );
    localStorage.setItem(
      "Description Of Siblings: ",
      document.getElementById("des.Siblings").value
    );
  }