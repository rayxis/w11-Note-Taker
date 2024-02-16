# Note Taker

## Description

This is an application to take notes, and is designed for those who need a space to organize their thoughts and keep
track of tasks. Opening the application reveals a landing page with a link to a notes page, providing a structured
layout for easy retrieval and organization of notes.

## Installation

Installation is very simple. Prior to installation, you'll want to make sure that you have Node.js installed and
properly configured. Additionally, you'll want to make sure that if you are using SELinux that you have the correct
settings enabled. These are things beyond the scope of this README, but there are plenty of resources that you'll be
able to find by googling it on Bing or Yahoo.

To install this application, export project to the directory of choice.

## Usage

### Execution

To run the app, type the following command from within the root folder for the app, on the command line

```shell
npm start
```

From a visitor's perspective, type your notes and title into the provided spaces along the right-hand side. Once
you're done entering the details of your note, click on the save button (or clear button) at the top of the screen.
The list on the left-hand side will populate as you continue to enter your notes.

If you find it necessary, you're also able to delete notes by clicking on the red trashcan icon in the note list.

### Demonstration

A live version of this application can be accessed here: https://w11-notetaker-6a8b9d74f74a.herokuapp.com/

### Screenshots

![Welcome screen](./screenshots/Screenshot%202024-02-15%20at%209.53.16%E2%80%AFPM.png)
![No notes](./screenshots/Screenshot%202024-02-15%20at%209.53.54%E2%80%AFPM.png)
![Notes](./screenshots/Screenshot%202024-02-15%20at%209.55.09%E2%80%AFPM.png)
![Deleted note](./screenshots/Screenshot%202024-02-15%20at%209.55.58%E2%80%AFPM.png)

## User Story

```text
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```text
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears
```