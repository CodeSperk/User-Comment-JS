//get random users name
function generateRandomName() {
  const usersArray = [
    "Sarah Johnson",
    "Michael Smith",
    "Jennifer Brown",
    "Christopher Lee",
    "Amanda Davis",
    "Matthew Wilson",
    "Emily Martinez",
    "Daniel Taylor",
    "Jessica Anderson",
    "David Thompson",
    "Melissa Garcia",
    "James Harris",
    "Samantha Rodriguez",
    "John Clark",
    "Ashley White",
    "Robert Thomas",
    "Brittany Miller",
    "Joshua Moore",
    "Nicole Taylor",
    "Andrew Jackson",
  ];

  //to create random number between 1 to 20
  const randomNumber = Math.random() * 19;
  const index = Math.floor(randomNumber) + 1;

  const randomName = usersArray[index];
  return randomName;
}

//to get users comment and to create dynamic element and append
function dynamicComment() {
  const userInput = document.getElementById("text-area").value;

  if (userInput == "") {
    alert("Please Write something");
  }

  //users profile picture, name & comment
  const newDiv = document.createElement("div");
  newDiv.classList.add("flex", "gap-3", "max-w-96", "text-justify");

  const newImg = document.createElement("img");
  newImg.src = "./user-pp.png";
  newImg.classList.add("h-10");
  newDiv.appendChild(newImg);

  const newChildDiv = document.createElement("div");
  newChildDiv.classList.add(
    "bg-slate-200",
    "px-4",
    "py-1",
    "pb-4",
    "rounded-md",
    "w-full"
  );

  const userName = document.createElement("h4");
  const randomName = generateRandomName();
  userName.innerText = randomName;
  userName.classList.add("font-bold");
  newChildDiv.appendChild(userName);

  const userCmnt = document.createElement("p");
  userCmnt.innerText = userInput;
  newChildDiv.appendChild(userCmnt);

  newDiv.appendChild(newChildDiv);

  return newDiv;
}

function handleComment(event) {
  event.preventDefault();

  //display new comment
  const commentsContainer = document.getElementById("comments-container");
  const newDiv = dynamicComment();
  commentsContainer.appendChild(newDiv);

  //to clear after submit
  const userInputEl = document.getElementById("text-area");
  userInputEl.value = "";
}
document.getElementById("submit-btn").addEventListener("click", handleComment);
