# How to Add New Videos to Digiplix Portfolio

Follow these simple steps to add a new video (Instagram Reel, YouTube, or Local Video) to the website's Work section.

## Step 1: Prepare the Thumbnail Image
1. Ensure your thumbnail image (e.g., `newreel12.png` or `newreel.jpg`) is ready.
2. Move the image file into the `public/thumbnail/` directory.

## Step 2: Open the Data File
Open the data file located at `src/data/projects.json`. This file controls all the projects displayed on the site.

## Step 3: Add the Video Entry
Scroll through the JSON list and paste the appropriate block of code for your video type. Make sure to place it *before* the placeholder "Coming Soon" objects so it shows up correctly.

### Template: Instagram Reel
```json
{
  "id": 99,
  "title": "Instagram Reel",
  "description": "Social media video edit.",
  "category": ["Social Media Videos", "Short-form Video Editing"],
  "thumbnail": "/thumbnail/your-image-name.png",
  "mediaType": "instagram",
  "media": "INSTAGRAM_REEL_CODE",
  "year": "2025"
}
```
> **Important**: Replace `INSTAGRAM_REEL_CODE` with the actual ID from the Instagram URL. For example, if the URL is `https://www.instagram.com/reels/DVyWTG0E_Tu/`, the code is **`DVyWTG0E_Tu`**.

### Template: Local Video
```json
{
  "id": 100,
  "title": "Short-form Video",
  "description": "Short-form video edit.",
  "category": ["Short-form Video Editing"],
  "thumbnail": "/thumbnail/your-image-name.png",
  "mediaType": "video",
  "media": "/your-video-file.mp4",
  "year": "2025"
}
```
> **Important**: Place your actual `.mp4` video file inside the `public/` directory, and reference it exactly as `"/your-video-file.mp4"`.

## Step 4: Verify the Details
Double-check the following fields for your new entry:
- **`id`**: Must be a unique, sequential number.
- **`category`**: Must exactly match the filter names used on the site (e.g., `"Social Media Management"`, `"Short-form Video Editing"`, `"Product Shoots"`).
- **`thumbnail`**: The path must perfectly match your image name in the `public/thumbnail/` folder.

## Step 5: Save and View
Save the `projects.json` file. If your local development server is running (`npm run dev`), the website will automatically refresh and your new video will appear in the grid!
