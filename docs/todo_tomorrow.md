# Jagadishguruji — Tomorrow's TODO

Date:

    15 August 2026

---

## Priority 1 — Deploy the Working Local Version

Before changing functionality:

[ ] Review the working local version.

[ ] Check Git status.

[ ] Commit the corrected login.html and teachers.html.

[ ] Push to GitHub.

[ ] Verify GitHub Actions.

[ ] Verify Firebase Hosting deployment.

[ ] Test the LIVE website.

---

## Priority 2 — Test the Complete Live Workflow

[ ] Open live index.html

[ ] Click LOGIN

[ ] Login as KK

[ ] Verify Teacher Name

[ ] Verify Designation

[ ] Select Start Date

[ ] Select End Date

[ ] Verify Total Days

[ ] Generate PDF

[ ] Save Leave Request

[ ] Check Firestore leave_requests collection

---

## Priority 3 — Inspect Firestore

Review:

[ ] config collection

[ ] Teacher records

[ ] leave_requests collection

[ ] Firestore Security Rules

Important:

Do NOT unnecessarily change Security Rules until the current system is understood.

---

## Priority 4 — Security Discussion

Discuss whether the current login system should be upgraded.

Current:

    Firestore password
        ↓
    Client-side password comparison

Possible future:

    Firebase Authentication
        OR
    ASP.NET Core Identity

Decide only after understanding the advantages and disadvantages.

---

## Priority 5 — Improve Teacher Page

Possible improvements:

[ ] Better leave letter formatting

[ ] School name

[ ] School address

[ ] Headmaster designation

[ ] Proper application format

[ ] Date formatting

[ ] Odia/English option

[ ] Leave type

[ ] Signature area

[ ] Print/PDF improvements

---

## Priority 6 — Firebase CLI Restoration

Later, not urgent.

Install:

    Node.js
    npm
    Firebase CLI

Then verify:

    node --version

    npm --version

    firebase --version

Then:

    firebase login

Then identify the existing Firebase project.

---

# Do Not Do Yet

Do not:

[ ] Change Firestore structure unnecessarily

[ ] Change Firebase project

[ ] Delete existing collections

[ ] Change GitHub repository

[ ] Change GitHub Actions

[ ] Push untested code

[ ] Move to SQL Server yet

---

# Main Goal

Keep the existing system stable.

First:

    Working Local Version

Then:

    Working Live Version

Then:

    Improvements

Then:

    Security

Then:

    Larger application architecture
