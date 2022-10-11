//front of Card variables
const frontCardNum = document.querySelector(".cardNumber");
const frontName = document.querySelector(".names");
const frontLeft1 = document.querySelector(".left1");
const frontRight1 = document.querySelector(".righ1");

//back of card for thr cvc

const backCvc = document.querySelector(".backCvc");

//form of Card varibles

const formCardName = document.querySelector(".cardMini");
const formCardNum = document.querySelector(".cardNum");
const formMonth = document.querySelector(".month");
const formYear = document.querySelector(".year");
const formCvc = document.querySelector(".cvcs");

//confirm button

const confirm = document.querySelector(".confirm1");
const continueMain = document.querySelector(".continue");

//form2

const form2 = document.querySelector(".form2");
const form = document.querySelector(".form");

//Functionality Section

formCardNum.addEventListener("input", function () {
  if (formCardNum.keycode !== 0) {
    if (
      formCardNum.value.length === 4 ||
      formCardNum.value.length === 9 ||
      formCardNum.value.length === 14
    ) {
      formCardNum.value = formCardNum.value += " ";
    }
    frontCardNum.innerHTML = formCardNum.value;
  }
});

formCardName.addEventListener("input", function () {
  frontName.innerHTML = formCardName.value;
});

formMonth.addEventListener("input", function () {
  if (Number(formMonth.value) < 13) {
    frontLeft1.innerHTML = formMonth.value;
  } else {
    frontLeft1.innerHTML = `00`;
  }
});

formYear.addEventListener("input", function () {
  frontRight1.innerHTML = formYear.value;
});

formCvc.addEventListener("input", function () {
  // if (formCvc.value.length < 4) {
  backCvc.innerHTML = formCvc.value;
  // } else {
  //   !formCvc.value;
  // }
});

confirm.addEventListener("click", function () {
  if (formCardNum.value.length > 0 && formCardName.value.length > 0) {
    form.classList.add("hidden");
    form2.classList.add("show");
    frontCardNum.innerHTML = `0000 0000 0000 0000`;
    frontName.innerHTML = `Daniel Nwachukwu`;
    frontLeft1.innerHTML = `00`;
    frontRight1.innerHTML = `00`;
    backCvc.innerHTML = `000`;
  }
});

continueMain.addEventListener("click", function () {
  form.classList.remove("hidden");
  form2.classList.remove("show");
  formCardName.value = "";
  formCardNum.value = "";
  formCvc.value = "";
  formMonth.value = "";
  formYear.value = "";
});
