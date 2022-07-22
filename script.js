const btnOne = document.querySelector(".chapter-button-one");
const btnTwo = document.querySelector(".chapter-button-two");

btnTwo.addEventListener("click", function () {
  document.querySelector(".chapter-button-two").style.backgroundColor =
    "#1a6a9f";
  document.querySelector(".chapter-button-one").style.backgroundColor =
    "#4d4d4d";

  document.getElementsByClassName("logo-img")[0].src =
    "computer-society-logo.png";
  document.getElementsByClassName("chapter-heading")[0].textContent =
    "Computer Society";
  document.getElementsByClassName("chapter-subheading")[0].textContent =
    " 'Programming is not about what you know; it's about what you can figure out.' - Chris Pine";
  document.getElementsByClassName("chapter-text")[0].textContent =
    "IEEE Computer Society is programming community’s primary source for relevant and dependable data. Membership provides access to 33 magazines and transactions, 9,000+ conference publications, 225 international conferences, 3,500 self-paced courses and more. The Computer Society empowers people by delivering tools for individuals at all stages of their professional careers. ";
});

btnOne.addEventListener("click", function () {
  document.querySelector(".chapter-button-one").style.backgroundColor =
    "#1a6a9f";
  document.querySelector(".chapter-button-two").style.backgroundColor =
    "#4d4d4d";
  document.getElementsByClassName("logo-img")[0].src = "wie-logo.png";
  document.getElementsByClassName("chapter-heading")[0].textContent =
    "Women In Engineering";
  document.getElementsByClassName("chapter-subheading")[0].textContent =
    " 'Women should understand that it's not difficult to have a work-life balance, they can enjoy success in both places; at work as well as at home.' - Windhya Rankothge";
  document.getElementsByClassName("chapter-text")[0].textContent =
    "IEEE WIE is one of the world's leaders in changing the face of engineering. Our global network connects over 30,000 members in over 100 countries to advance women in technology at all points in their lives and careers. IEEE WIE members make lifelong friendships, acquire influential mentors, and make a difference for the benefit of humanity.";
});
