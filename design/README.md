# Design Work Migration Guide

## Migrating from Imgur

Your imgur album: https://imgur.com/a/cguulXy

### Steps to Migrate:

1. **Download images from imgur**
   - Go to your imgur album
   - Download all images (or use imgur API)
   - Save them locally

2. **Organize by category**
   ```
   design/
   ├── artwork/          # Illustrations, digital art
   ├── posters/          # Event posters, promotional materials
   ├── brand-identity/   # Logos, brand systems, rebrands
   ├── ui-design/        # Dashboard designs, interfaces
   ├── social-media/     # Social media content, posts, graphics
   └── misc/             # Everything else
   ```

3. **Upload to your project**
   - Copy images to the appropriate category folder
   - Recommended format: `project-name.jpg` or `project-name.png`
   - Keep file sizes reasonable (optimize with TinyPNG if needed)

4. **Update design-data.js**
   - Add each image with metadata
   - See `js/design-data.js` for examples

### Image Naming Convention

Use descriptive names:
- `vista-rebrand-logo.png`
- `ethereum-dom-poster-2024.jpg`
- `llama-brand-guidelines.png`

### Optimization Tips

- Use JPG for photos/complex images (smaller file size)
- Use PNG for logos/graphics with transparency
- Compress with [TinyPNG](https://tinypng.com/) before uploading
- Keep images under 500KB when possible

### Alternative: Keep on Imgur

If you prefer, you can also link directly to imgur URLs instead of self-hosting.
Just update the image paths in `design-data.js` with full imgur URLs.
