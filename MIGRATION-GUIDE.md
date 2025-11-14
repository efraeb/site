# Image Migration Guide

## Quick Start

Your images are in: `C:\Users\efra\Documents\Sample Work 2021-2024`
Your project is in: `C:\Users\efra\Documents\efra_repos\site`

---

## Method 1: PowerShell Script (Recommended - Fast)

**Step 1:** Open PowerShell in your project folder
```powershell
cd C:\Users\efra\Documents\efra_repos\site
```

**Step 2:** Run the migration script
```powershell
# You may need to enable script execution first (one time):
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Run the script:
.\migrate-images.ps1
```

This will:
- Copy ALL images to `design/misc/` folder
- List all copied files
- Preserve original files (doesn't delete them)

**Step 3:** Organize into categories
Now manually move images from `design/misc/` into proper categories:
- `design/artwork/` - Illustrations, digital art
- `design/posters/` - Event posters, promo materials
- `design/brand-identity/` - Logos, brand systems, rebrands
- `design/ui-design/` - Dashboard designs, interfaces

**Step 4:** Update `js/design-data.js`
See template in `js/design-data-template.js` for examples.
For each image, add an entry like:
```javascript
{
    id: 1,
    title: "Project Name",
    category: "brand-identity", // or: posters, artwork, ui-design, misc
    image: "design/brand-identity/image-name.jpg",
    year: "2024",
    description: "Brief description"
}
```

---

## Method 2: Manual (If script doesn't work)

**Step 1:** Copy images manually
1. Open File Explorer
2. Navigate to `C:\Users\efra\Documents\Sample Work 2021-2024`
3. Select all images you want to include
4. Copy them (Ctrl+C)
5. Navigate to `C:\Users\efra\Documents\efra_repos\site\design\misc`
6. Paste (Ctrl+V)

**Step 2:** Organize into categories
Move images from `misc/` into appropriate category folders.

**Step 3:** Update `js/design-data.js`
Same as Method 1, Step 4 above.

---

## Pro Tips

### Naming Convention
Rename images to be descriptive:
- ❌ `IMG_1234.jpg`
- ✅ `vista-rebrand-logo-2024.jpg`
- ✅ `eth-dom-poster-devcon.jpg`

### Optimize Images
Before committing, compress images to reduce file size:
1. Use [TinyPNG.com](https://tinypng.com/) (free online tool)
2. Or use ImageMagick: `magick mogrify -resize 1920x1920> -quality 85 *.jpg`
3. Keep images under 500KB when possible

### Categorization Guide
- **brand-identity**: Logos, brand guidelines, color systems, typography
- **posters**: Event posters, promotional materials, flyers
- **artwork**: Illustrations, digital art, creative visuals
- **ui-design**: Dashboard mockups, app interfaces, web designs
- **misc**: Everything else that doesn't fit above

---

## Quick Test

After adding images, test locally:
```powershell
python -m http.server 8000
```

Open http://localhost:8000 and click "Design Work" in the sidebar.

---

## Example design-data.js Entry

Based on your work at Vista, Llama, etc:

```javascript
const designWork = [
    {
        id: 1,
        title: "Vista Rebrand 2024",
        category: "brand-identity",
        image: "design/brand-identity/vista-rebrand.jpg",
        year: "2024",
        description: "Complete rebrand: logo, color system, and landing page design"
    },
    {
        id: 2,
        title: "Llama Financial Report Visual",
        category: "brand-identity",
        image: "design/brand-identity/llama-report-cover.png",
        year: "2023",
        description: "Visual direction for treasury management report"
    },
    {
        id: 3,
        title: "Ethereum Dominicana x Devcon",
        category: "posters",
        image: "design/posters/eth-dom-devcon.jpg",
        year: "2024",
        description: "Event poster for Ethereum Dominicana meetup with Devcon"
    },
    {
        id: 4,
        title: "Operator Dashboard UI",
        category: "ui-design",
        image: "design/ui-design/operator-dashboard-mockup.png",
        year: "2024",
        description: "Next.js dashboard connecting blockchain operators with validation opportunities"
    },
    {
        id: 5,
        title: "TEC Audit Visualization",
        category: "ui-design",
        image: "design/ui-design/tec-audit-viz.png",
        year: "2024",
        description: "Internal audit report visualizations for Token Engineering Commons"
    }
    // Add more...
];
```

---

## Need Help?

- See `js/design-data-template.js` for more examples
- All images go in `design/` subfolders
- Supported formats: JPG, PNG, GIF, WEBP
- Test locally before committing!
