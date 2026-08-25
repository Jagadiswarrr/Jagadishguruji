# Developer Diary — Jagadishguruji Project

## 14 August 2026

### Today's Main Objective

Restore the development workflow after reinstalling Windows and continue development of the Jagadishguruji website using:

- Git
- GitHub
- Firebase Hosting
- Firebase Firestore
- HTML / JavaScript

---

## 1. Restored Git

After reinstalling Windows, Git was no longer available from Command Prompt.

Installed Git again.

Verified:

    git --version

Result:

    git version 2.55.0.windows.4

The existing Git repository was still present inside:

    E:\FireProject1

Initially Git reported:

    fatal: detected dubious ownership in repository

because the repository had been created under the previous Windows installation.

Fixed with:

    git config --global --add safe.directory E:/FireProject1

After that:

    git status

showed the repository correctly.

---

## 2. Restored Git Identity

Git identity was already configured:

    user.name  = Jagadishguruji
    user.email = jagadeswarrr@gmail.com

A commit was successfully created:

    git commit -m "Added login and teachers pages"

Commit:

    c172dd3

---

## 3. Successfully Pushed to GitHub

Executed:

    git push

Repository:

    Jagadiswarrr/Jagadishguruji

Branch:

    main

GitHub Actions automatically triggered the Firebase Hosting deployment.

Deployment status:

    Success

This confirmed that the existing:

    GitHub → GitHub Actions → Firebase Hosting

pipeline is still working after the Windows reinstallation.

---

## 4. Inspected Existing Firebase Login System

The project already contains:

    public/index.html
    public/login.html
    public/teachers.html

The login page uses Firebase Firestore.

Firestore structure discovered:

    config
       └── KK
            ├── name
            ├── Designation
            └── password

Teacher account:

    Username: KK

Teacher name:

    Chinta Jagadeswara Rao

Designation:

    Assistant teacher

---

## 5. Fixed Login Page

The original login page was mixing old Firebase script loading with modern Firebase ES modules.

This caused errors such as:

    Unexpected token 'export'

and:

    Cannot use import statement outside a module

The login page was rewritten to use the modern modular Firebase API:

    initializeApp()
    getFirestore()
    doc()
    getDoc()

The login process now:

    Username
        ↓
    Firestore config/{username}
        ↓
    Check password
        ↓
    Save teacher information to localStorage
        ↓
    Open teachers.html

Teacher information is stored using:

    localStorage.setItem("teacherName", teacherName);
    localStorage.setItem("designation", designation);

---

## 6. Fixed teachers.html

The original teachers page also used the old Firebase syntax:

    firebase.initializeApp()
    firebase.firestore()

This caused:

    firebase is not defined

The page was converted to modern Firebase modules.

It now uses:

    initializeApp()
    getFirestore()
    collection()
    addDoc()

The leave request is saved to:

    leave_requests

Firestore document contains:

    name
    designation
    startDate
    endDate
    reason
    totalDays
    timestamp

---

## 7. Local Testing

Since Node.js and Firebase CLI were not currently installed after the Windows reinstallation, a temporary PowerShell HTTP server was created.

Used PowerShell to serve:

    E:\FireProject1\public

at:

    http://localhost:8000/

This allowed the website to be tested locally without pushing every change to GitHub.

Important learning:

A browser should receive HTML with the correct:

    Content-Type: text/html

Otherwise it may display the HTML source instead of rendering the webpage.

---

## 8. Complete Local Test — SUCCESS

The entire workflow was tested locally.

### Login

    KK + password

Result:

    Login successful

### Teacher information

Automatically displayed:

    Chinta Jagadeswara Rao
    Assistant teacher

### Leave dates

Start Date and End Date worked.

### Total Days

Automatically calculated.

Example:

    15 Aug → 17 Aug

Result:

    3 days

### PDF

Leave application PDF was generated successfully.

### Firestore

Leave request was successfully saved to:

    leave_requests

---

# Major Achievement of the Day

The complete local application workflow is now working:

    index.html
         ↓
       login
         ↓
      Firestore
         ↓
    teacher data
         ↓
    teachers.html
         ↓
    leave application
       ↙       ↘
     PDF     Firestore

The GitHub → Firebase Hosting deployment pipeline is also working.

---

# Important Learning

### Git repository survives OS reinstall

The .git folder inside the project remained available even after Windows was reinstalled.

However, Git itself had to be installed again.

### Installed software does not survive OS reinstall

The following had to be restored or will need restoration:

- Git
- Node.js
- Firebase CLI

### Cloud services survived

The following remained safely in the cloud:

- GitHub repository
- Firebase project
- Firebase Hosting
- Firestore database
- GitHub Actions configuration

---

# Tools Currently Available

## Working

- Git
- GitHub
- Firebase Hosting
- Firebase Firestore
- PowerShell
- Visual Studio
- Python

## To Restore Later

- Node.js
- npm
- Firebase CLI

---

# Development Philosophy

Test locally first.

Only after local testing succeeds:

    Local
      ↓
    Git commit
      ↓
    Git push
      ↓
    GitHub Actions
      ↓
    Firebase Hosting

This prevents unnecessary broken deployments.
