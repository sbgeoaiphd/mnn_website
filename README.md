# marenonnostrum.com

Static site for *Mare Non Nostrum* by S.J. Barrett.

Hosted on GitHub Pages. Push to `main` to deploy.

## Setup

1. Create a new GitHub repo (e.g. `marenonnostrum-site`)
2. Push this folder's contents to `main`
3. In repo Settings > Pages, set source to "Deploy from a branch" > `main` > `/ (root)`
4. In your domain registrar, add these DNS records:
   - `A` record pointing to `185.199.108.153`
   - `A` record pointing to `185.199.109.153`
   - `A` record pointing to `185.199.110.153`
   - `A` record pointing to `185.199.111.153`
   - `CNAME` record for `www` pointing to `<your-username>.github.io`
5. Wait for DNS propagation and GitHub's SSL certificate (can take up to 24h)

## Contact form

Uses a Google Form. To activate:
1. Create a Google Form with Name and Message fields
2. In the form's Responses tab, click the three-dot menu → "Get email notifications for new responses"
3. Replace `YOUR_GOOGLE_FORM_URL` in `index.html` with the form's public sharing URL

## Updating buy links

When KDP review clears, edit `index.html` and replace the `<span class="coming-soon">` elements with `<a>` tags pointing to the KDP URLs.
