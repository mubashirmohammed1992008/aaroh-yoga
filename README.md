# Aaroh Yoga

A responsive, single-page yoga business website for the CIA–2 Yoga Website Development Activity. Built with plain HTML, CSS and JavaScript so it can be hosted as a static site on Netlify or GitHub Pages.

## Preview locally

Open `index.html` in a browser, or run this in the project folder:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with Netlify (recommended)

Netlify is the easiest fit for this project because it can host the static files and process the enquiry form with Netlify Forms.

1. Create a free account at [netlify.com](https://www.netlify.com/).
2. In the dashboard choose **Add new site → Deploy manually** (may be labelled **Netlify Drop**).
3. Drag the entire `aaroh-yoga` folder onto the upload area. Do not upload only `index.html`.
4. Netlify publishes the site and gives you a `*.netlify.app` URL. Open it and check the site at desktop and phone widths.
5. To deploy via GitHub, push this folder to a repository. Choose **Add new site → Import an existing project** in Netlify and authorize the repository. Leave the build command empty and set the publish directory to `.` (or the repository subfolder containing `index.html`). Future Git pushes deploy automatically.
6. In your site dashboard, open **Forms** and enable form detection, then trigger a new deploy. Netlify scans the static HTML during deploy.
7. Submit a test enquiry. Open the site's **Forms** area to confirm the submission. Redeploy after changing the form markup.
8. Optionally edit the site name in **Site configuration** to get a more memorable Netlify URL.

## GitHub Pages alternative

GitHub Pages can host the HTML/CSS/JS for free. Push the files to a GitHub repository, then enable **Settings → Pages** and choose the branch and folder containing `index.html`. This form is configured for Netlify Forms, so it will not collect submissions on GitHub Pages by itself; connect an external form service such as Formspree if you choose Pages.

## Customize before submitting

- Confirm the phone and email in `index.html`.
- Update course details and prices if your instructor expects other offerings.
- Test navigation, mobile layout and a live form submission after deployment.
- Keep the live URL ready for the CIA–2 demonstration and submission.

## Files

- `index.html` — content and enquiry form
- `styles.css` — responsive design
- `script.js` — mobile navigation and program selection
- `success.html` — post-submission page




