# NaFECC Website

**N'naFereh Engineering & Construction Company SL** — Official Website

## 🚀 Deployment (GitHub Pages)

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Site will be live at `https://<your-username>.github.io/<repo-name>/`

## 📁 Project Structure

```
nafecc-website/
├── index.html              # Main HTML page
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles
│   ├── js/
│   │   └── main.js         # Interactivity & scroll effects
│   └── images/
│       └── logo.jpeg       # Company logo
└── README.md
```

## 🛠 Local Development

No build tools needed — open `index.html` directly in your browser, or use Live Server (VS Code extension) for hot reload.

```bash
# Optional: serve locally with Python
python3 -m http.server 8000
# Then open http://localhost:8000
```

## 📝 Notes

- All images are embedded as base64 in `index.html` for portability
- No external dependencies except Google Fonts
- Fully responsive (mobile, tablet, desktop)
