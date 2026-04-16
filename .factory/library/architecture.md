# Architecture

## System Overview

The ACS-2909 Study Platform is a static HTML/CSS/JavaScript application hosted on GitHub Pages.

## Components

1. **mega-question-bank.js** - Contains 231 quiz questions organized by category (internet, html, css-fundamentals, css-layout, js-basics, js-control-flow, js-functions, js-objects)

2. **lecture-content.html** - Full-page lectures with interactive demos covering all course topics

3. **index.html** - Main study platform with quiz system, lecture navigation, and progress tracking

4. **final-study-platform.html** - Comprehensive study platform combining all features

## Content Sources

- Course Timeline (slides/New/Course Timeline - Internet Programming.html) - Source of truth for course structure
- Slide files (slides/ and slides/New/) - Source material for topics
- javascript.info tutorials - JavaScript reference
- HTML & CSS Is Hard tutorials - CSS/HTML reference

## GitHub Deployment

GitHub Actions handles deployment to GitHub Pages on push to main branch.
