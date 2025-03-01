import React, { Component } from "react";

document.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        const btn = document.querySelector("#send")
        btn.click()
    }
})