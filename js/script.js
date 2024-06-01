// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: June 2024
// This file contains the JS functions for index.html

"use strict"

async function myButtonClicked() {
  try {
    const resultJSON = await fetch("https://api.nasa.gov/planetary/apod?api_key=A5F9DYnidDu2IzQoEJbdLi07DiNHlMYKYLPV5VIu")
    const jsonData = await resultJSON.json()
    //console.log(jsonData)
    const picOfTheDay = jsonData.url
    console.log(picOfTheDay)
    // then show
    document.getElementById("final-answer").innerHTML = picOfTheDay
  } catch (error) {
    console.error(error)
  }
}