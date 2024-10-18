// Contact Form
const formButton = document.querySelector(".form-button");

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  sendContactForm();
});

const sendContactForm = () => {
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const text = document.getElementById("message").value;

  if ((name === "" || subject === "", text === "")) {
    showNotifAlert();
    return;
  }

  const data = {
    to: "rikiridwan949@gmail.com",
    name,
    subject,
    text,
  };

  sendData(data);
};

const sendData = async (data) => {
  const url = "https://lumoshive-academy-email-api.vercel.app/send-email";

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "RJS1-202416",
      },
    });
    const result = await response.json();
    if (result.status === "success") {
      showSuccessAlert();
      document.querySelector(".form").reset();
    }
  } catch (e) {
    console.log(e);
    showErrorAlert();
  }
};

const showSuccessAlert = () => {
  Swal.fire({
    title: "Success",
    text: "Your message has been sent!",
    icon: "success",
    customClass: {
      confirmButton: "swal2-confirm",
    },
  });
};

const showErrorAlert = () => {
  Swal.fire({
    title: "Failed",
    text: "Your message is failed to sent!",
    icon: "error",
    customClass: {
      confirmButton: "swal2-confirm",
    },
  });
};

const showNotifAlert = () => {
  Swal.fire({
    title: "Oopps...",
    text: "Input cannot be empty!",
    icon: "info",
    customClass: {
      confirmButton: "swal2-confirm",
    },
  });
};

// Text Manipulation

const aboutMe = document.querySelector(".hero-content h2");
const displayNames = ["Riki Ridwan", "Front End Developer"];
const cursorElement = document.createElement("span");
cursorElement.classList.add("cursor");

const textManipulation = () => {
  displayNames.forEach((name, index) => {
    const totalTimeForEach = name.length * 200 + 1000;

    setTimeout(() => {
      aboutMe.textContent = "";
      name.split("").forEach((character, charIndex) => {
        setTimeout(() => {
          aboutMe.textContent += character;
          aboutMe.appendChild(cursorElement);
        }, 100 * charIndex);
      });

      setTimeout(() => {
        for (let i = name.length - 1; i >= 0; i--) {
          setTimeout(() => {
            aboutMe.textContent = aboutMe.textContent.substring(0, i);
            aboutMe.appendChild(cursorElement);
          }, 100 * (name.length - i));
        }
      }, 200 * name.length + 1000);
    }, index * totalTimeForEach);
  });
};

textManipulation();

setInterval(() => {
  aboutMe.textContent = "";
  textManipulation();
}, (displayNames[0].length * 200 + 1000 + displayNames[1].length * 200) * displayNames.length + 2000);

// Hamburger menu toggle

const hamburgerMenu = document.querySelectorAll(".menu i");
const navigationBar = document.querySelector(".navbar");
const menuList = document.querySelectorAll(".navbar ul li");

hamburgerMenu.forEach((menu) => {
  menu.addEventListener("click", () => {
    navigationBar.classList.toggle("navbar-toggle");
  });
});

menuList.forEach((menu) => {
  menu.addEventListener("click", () => {
    navigationBar.classList.remove("navbar-toggle");
  });
});
