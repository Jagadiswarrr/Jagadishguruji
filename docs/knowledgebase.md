# Jagadishguruji Project — Knowledge Base

## Project

Name:

    Jagadishguruji

Local project folder:

    E:\FireProject1

GitHub repository:

    Jagadiswarrr/Jagadishguruji

Main branch:

    main

Firebase Project ID:

    jagadishguruji-e3740

---

# Architecture

Current architecture:

    Local HTML/JavaScript
            ↓
       Firebase
            ↓
    Firestore / Hosting

Deployment:

    Local project
         ↓
       Git
         ↓
      GitHub
         ↓
   GitHub Actions
         ↓
 Firebase Hosting

---

# Important Folders

    E:\FireProject1
    │
    ├── .git
    │
    ├── public
    │    ├── index.html
    │    ├── login.html
    │    └── teachers.html
    │
    └── .github
         └── workflows
              ├── firebase-hosting-merge.yml
              └── firebase-hosting-pull-request.yml

---

# Git Commands

Check repository status:

    git status

See changes:

    git diff

Stage files:

    git add .

Commit:

    git commit -m "Description"

Push:

    git push

Check remote:

    git remote -v

---

# Git Safe Directory

After Windows reinstallation Git reported:

    detected dubious ownership

Solution:

    git config --global --add safe.directory E:/FireProject1

This happened because the project was created under the previous Windows user identity.

---

# Git Identity

Configured identity:

    user.name  = Jagadishguruji
    user.email = jagadeswarrr@gmail.com

---

# Firebase

Firebase Project:

    jagadishguruji-e3740

Firebase configuration is included in the webpage JavaScript.

Firebase is currently being used for:

- Hosting
- Firestore

---

# Firestore Structure

## Collection: config

Teacher login records are stored as documents.

Example:

    config
       └── KK

Fields:

    name
    Designation
    password

Example data:

    name:
    Chinta Jagadeswara Rao

    Designation:
    Assistant teacher

---

# Leave Requests

Collection:

    leave_requests

Each leave request contains:

    name
    designation
    startDate
    endDate
    reason
    totalDays
    timestamp

---

# Firebase JavaScript Style

Use the modern modular Firebase API.

Example:

    import { initializeApp }
      from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

    import {
      getFirestore,
      collection,
      addDoc
    }
      from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

Use:

    <script type="module">

Do NOT mix this with the old style:

    firebase.initializeApp()
    firebase.firestore()

---

# Login Data Flow

    login.html
        ↓
    Username entered
        ↓
    Firestore:
    config/{username}
        ↓
    Read:
      password
      name
      Designation
        ↓
    Verify password
        ↓
    localStorage
        ↓
    teachers.html

localStorage keys:

    teacherName
    designation

---

# Local Development

A simple PowerShell HTTP server can be used to test the website without deploying.

Serve:

    E:\FireProject1\public

Example local address:

    http://localhost:8000/

The local server is temporary.

Stopping the PowerShell process stops the server.

---

# Development Tools

Currently available:

- Visual Studio
- Git
- Python
- PowerShell

Previously available but lost during Windows reinstall:

- Node.js
- npm
- Firebase CLI

These can be reinstalled when needed.

---

# Important Principle

Always test locally before pushing.

Preferred workflow:

    Edit
      ↓
    Local test
      ↓
    Confirm working
      ↓
    git add
      ↓
    git commit
      ↓
    git push
      ↓
    GitHub Actions
      ↓
    Firebase Hosting

---

# Future Architecture Possibility

For a larger application, another possible architecture is:

    Android / MAUI
          ↓
    ASP.NET Core Web API
          ↓
      SQL Server

Firebase is not the only possible backend.

The developer already has experience with:

- C#
- ASP.NET
- SQL Server
- .NET MAUI

Therefore Firebase and Microsoft-stack development can coexist.

---

# Security Note

The current teacher login is a prototype.

Passwords are currently stored directly in Firestore and compared in client-side JavaScript.

For a production system, this should be replaced with a proper authentication mechanism such as:

    Firebase Authentication

or:

    ASP.NET Core Identity

depending on the final architecture.

Do not treat the current password system as production-grade security.
