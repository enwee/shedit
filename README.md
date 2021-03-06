# Richtext Content Editor

Demo: https://shedit.netlify.com

## Description

This is a simple content editor app where articles can be created, saved, retrieved, edited, published and deleted.

Each article will have a Topic Title and can have zero or more Subtopics. The Topic Title will also serve as the Article Title.

Every topic/subtopic will have a title and at least 1 content block.

A content block may contain a combination of richtext, tables, images and videos.

Topic/subtopics and blocks can be added, removed or reordered.

## Getting Started

This project Requires Node.js v12.16.1

Run the following commands on the console

`git clone https://github.com/enwee/shedit.git`

`npm install`

Edit the contents of .env.example and rename to .env

`npm start`

The app now runs in development mode at http://localhost:3000

The repository for the REST API server is at https://github.com/enwee/shedit-server

## Work in Progress / Todo / Notes

- save images to AWS S3 bucket
- last updated info
- delete article
- publish function / reader page
- merge articles page with editor as sliding menu

1. Images presently stored as BASE64 string in DB, uncached first load with images is very slow
1. Free-tier sandbox server goes to sleep and takes ~30secs for wakeup
