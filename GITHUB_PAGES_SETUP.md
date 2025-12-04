# GitHub Pages Setup Guide - Troubleshooting

## Issue: Save Button Not Clickable

If the Save button is grayed out when selecting "GitHub Actions", try these solutions:

### Solution 1: Make Repository Public
1. Go to: https://github.com/TolesaTesfaye/lastport/settings
2. Scroll down to "Danger Zone"
3. Click "Change repository visibility"
4. Select "Make public"
5. Confirm the change
6. Go back to Settings > Pages
7. Try selecting "GitHub Actions" again

**Note**: GitHub Pages with Actions requires a public repository (unless you have GitHub Pro/Team)

### Solution 2: Enable GitHub Actions
1. Go to: https://github.com/TolesaTesfaye/lastport/settings/actions
2. Under "Actions permissions", select:
   - "Allow all actions and reusable workflows"
3. Click "Save"
4. Go back to Settings > Pages
5. Try again

### Solution 3: Alternative - Use Branch Deployment (Temporary)
If GitHub Actions still doesn't work:
1. Go to Settings > Pages
2. Select "Deploy from a branch"
3. Branch: `main`
4. Folder: `/ (root)`
5. Click Save

Then we'll need to create a `gh-pages` branch with the built files.

### Solution 4: Check Browser
- Try a different browser
- Clear browser cache
- Try incognito/private mode
- Disable browser extensions temporarily

### Solution 5: Wait and Refresh
- Sometimes GitHub needs a moment to recognize the workflow file
- Wait 30 seconds after pushing the workflow file
- Refresh the Settings > Pages page

## After Enabling GitHub Pages

Once enabled, check:
1. Go to **Actions** tab
2. You should see "Deploy to GitHub Pages" workflow
3. Wait for it to complete (green checkmark)
4. Your site will be at: **https://tolesatesfaye.github.io/lastport/**

