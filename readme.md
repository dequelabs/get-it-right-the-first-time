# Axe-Con 2022: Get It Right the 1st Time: Stop 80%+ of A11Y Bugs During Development

- [axe-con session](https://www.deque.com/axe-con/sessions/get-it-right-the-1st-time-stop-80-of-a11y-bugs-during-development/)
- [accessible slides](https://www.deque.com/axe-con/wp-content/uploads/2021/12/Axe-Con-Talk-Get-it-Right-the-1st-Timea.pdf)

> This is an example project with some baseline a11y issues to help demonstrate how to effectively use axe DevTools automated testing and Intelligent Guided Testing to prevent 80% of a11y bugs during development.

## Prerequisites

- [`node`](https://nodejs.org/en/) - Node 16 or greater
- [axe DevTools Extension](https://www.deque.com/axe/browser-extensions/) - [Chrome](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) · [Edge](https://microsoftedge.microsoft.com/addons/detail/axe-devtools-web-access/kcenlimkmjjkdfcaleembgmldmnnlfkn) · [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/) (only automatic testing supported)

## Setup

### Installation

With [`npm`](https://www.npmjs.com/)

```shell
npm install
```

With [`yarn`](https://yarnpkg.com/)

```shell
yarn install
```

## Running

The following commands are available:

- `npm run build` - builds the website to the `dist` folder
- `npm run watch` - watches live code changes and spins up a server

Running `npm run watch` will build and spin up a live server at [`http://localhost:10001`](http://localhost:10001). Changes made in any of the project files will automatically be live reloaded in the running web app.

## Walk-through

> The code example contained in this app is built in [preact](https://preactjs.com/), a smaller alternative to React but with the same set of APIs.

### Structure

- `src/index.tsx` - Application entry point
- `src/assets/css` - All the styles used by the different sections of the app
- `src/assets/images` - All the images used by the different sections of the app
- `src/components` - All the various components used by the different sections of the app

## Accessibility Issues

This is a fictional site with some accessibility issues for demonstration purposes only. Below are some examples of intentional accessibility issues along with the remediation steps hidden behind a expand/collapse element:

### Automated Testing

The following accessibility issues should be raised from the axe DevTools extension:

* 2 - Elements should have sufficient color contrast: [`color-contrast`](https://dequeuniversity.com/rules/axe/4.4/color-contrast)
* 3 - Elements should not have tabindex greater than zero: [`tabindex`](https://dequeuniversity.com/rules/axe/4.4/tabindex)

<details>
  <summary>How to remediate the above issues</summary>

  To resolve the color contrast issue, change the value of `--accent-alt-color` in [`src/assets/css/variables.css`](./src/assets/css/variables.css) to a passing accessible color on a `#ffffff` background. Example: from `#1998fa` to `#055a9e`.

  To resolve the tab index issue, remove the `tabIndex="1"` attribute on the `button` element from [`src/components/Order.tsx`](./src/components/Order.tsx)

</details>

### Intelligent Guided Testing

The following accessibility issues should be raised from each tool:

#### Interactive Elements

* 1 - The element's roll is missing or incorrect
* 2 - States/Properties: The element has missing or incorrect states or properties

<details>
  <summary>How to remediate the above issues</summary>

  To resolve the missing/incorrect role, change the `div` element with an `onClick` attribute in the `AccordianPanel` component from `div` to `button` in [`src/components/Faq.tsx`](./src/components/Faq.tsx).

  To resolve the missing/incorrect state, add `aria-expanded={showDescription}` to the same element from before in [`src/components/Faq.tsx`](./src/components/Faq.tsx).

</details>

#### Structure

* 1 - Visual heading text is not marked as heading

<details>
  <summary>How to remediate the above issue</summary>

  To resolve the missing heading, change the "What's Popular" `div` element from `div` to `h2` in [`src/components/Faq.tsx`](./src/components/Faq.tsx).

</details>

#### Keyboard

There should be no accessibility issues raised as any potential issues should be resolved by prior remediation fixes.