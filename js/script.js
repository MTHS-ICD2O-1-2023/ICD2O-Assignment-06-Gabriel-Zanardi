// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: June 2024
// This file contains the JS functions for index.html

"use strict"

async function myButtonClicked(event) {
  event.preventDefault() // Prevent the form from submitting
  try {
    const resultJSON = await fetch("https://api.nasa.gov/planetary/apod?api_key=A5F9DYnidDu2IzQoEJbdLi07DiNHlMYKYLPV5VIu")
    const jsonData = await resultJSON.json()
    const picOfTheDay = jsonData.url
    console.log(picOfTheDay)
    document.getElementById("nasa-image").src = picOfTheDay
    document.getElementById("nasa-image").style.display = 'block'
  } catch (error) {
    console.error(error)
  }
}