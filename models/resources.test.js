import superTest from "supertest";
import app from "../app.js";
import {test, expect} from "@jest/globals";

//test for get - having data displayed
//test for addResources - if data is added to mock db
// test addNote

import {
    getResourcesAndNotes,
    addResource,
    addNotes
  } from "./resources.js";


test(`Test if get request is successful`, () => {
    const actual = getResourcesAndNotes();
    const expected = "Greetings, Chris";
  
    expect(actual).toBe(expected);
  });



test(`Test if data is stored in database`, () => {
    const actual = greetPerson("Chris");
    const expected = "Greetings, Chris";
  
    expect(actual).toBe(expected);
  });
  

  test(`Test if data is stored in database`, () => {
    const actual = greetPerson("Chris");
    const expected = "Greetings, Chris";
  
    expect(actual).toBe(expected);
  });