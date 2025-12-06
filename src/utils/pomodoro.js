"use strict";

const pomodoroTimer = () => {
  const pomodoroTime = document.querySelector(".pomodoro-time");
  const pomodoroButtons = document.querySelector(".pomodoro-clock-actions");
  const shortBreakBtn = document.querySelector(".short-break-display");
  const longBreakBtn = document.querySelector(".long-break-display");
  const pomodoroBtn = document.querySelector(".pomodoro-display");
  const resetBtn = document.querySelector(".reset-btn");
  const hidePomodoroBtn = document.querySelector(".hide-pomodoro");
  const mainElement = document.querySelector(".main");
  const pomodoroContainer = document.querySelector(".pomodoro-container");
  const showPomodoroBtns = document.querySelectorAll(".show-pomodoro-btn");

  // Timer Durations
  const pomodoro = 50 * 60;
  const shortBreak = 5 * 60;
  const longBreak = 10 * 60;

  // Timer State
  let time = pomodoro;
  let currentMode = "pomodoro";
  let intervalID = null;
  let isRunning = false;

  // Update UI
  const updateUI = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    pomodoroTime.textContent = `${min}:${sec}`;
  };

  // Switch Mode
  const switchMode = function (mode) {
    clearInterval(intervalID);
    intervalID = null;
    isRunning = false;

    currentMode = mode;

    if (mode === "pomodoro") time = pomodoro;
    if (mode === "short") time = shortBreak;
    if (mode === "long") time = longBreak;

    updateUI();
  };

  // Reset timer
  const resetTimer = function () {
    switchMode(currentMode);
  };

  // Start Timer
  const startTimer = function () {
    if (isRunning) return;
    isRunning = true;

    intervalID = setInterval(() => {
      time--;
      updateUI();

      if (time === 0) {
        clearInterval(intervalID);
        intervalID = null;
        isRunning = false;
      }
    }, 1000);
  };

  // Event Listeners
  pomodoroButtons.addEventListener("click", (e) => {
    const startBtn = e.target.closest(".pomodoro-btn--start");
    if (!startBtn) return;
    startTimer();
  });

  // hide pomodoro button
  hidePomodoroBtn.addEventListener("click", () => {
    mainElement.style.display = "block";
    pomodoroContainer.classList.remove("pomodoro--active");
  });

  // show pomodoro buttons
  showPomodoroBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      mainElement.style.display = "none";
      pomodoroContainer.classList.add("pomodoro--active");
    });
  });

  pomodoroBtn.addEventListener("click", () => switchMode("pomodoro"));
  shortBreakBtn.addEventListener("click", () => switchMode("short"));
  longBreakBtn.addEventListener("click", () => switchMode("long"));
  resetBtn.addEventListener("click", () => resetTimer());

  updateUI();
};

export default pomodoroTimer;
