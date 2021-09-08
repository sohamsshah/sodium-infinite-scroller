<p align="center">
  <a href="https://github.com/sohamsshah/sodium-infinite-scroller" rel="noopener" target="_blank"><img width="150" src="./src/assets/sodiumInfiniteScrollerLogo.png" alt="sodium infinite scroller Logo"></a></p>
</p>

<h1 align="center"><b>Sodium Infinite Scroller ♾ </b></h1>

<p align="center">
<a href="https://github.com/sohamsshah/sodium-infinite-scroller/blob/master/LICENSE" target="blank">
<img src="https://img.shields.io/github/license/sohamsshah/sodium-infinite-scroller?style=flat-square" alt="pixelsHash licence" />
</a>
<a href="https://github.com/sohamsshah/sodium-infinite-scroller/fork" target="blank">
<img src="https://img.shields.io/github/forks/sohamsshah/sodium-infinite-scroller?style=flat-square" alt="sodium-infinite-scroller forks"/>
</a>
<a href="https://github.com/sohamsshah/sodium-infinite-scroller/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/sohamsshah/sodium-infinite-scroller?style=flat-square" alt="sodium-infinite-scroller stars"/>
</a>
<a href="https://github.com/sohamsshah/sodium-infinite-scroller/issues" target="blank">
<img src="https://img.shields.io/github/issues/sohamsshah/sodium-infinite-scroller?style=flat-square" alt="sodium-infinite-scroller issues"/>
</a>
<a href="https://github.com/sohamsshah/sodium-infinite-scroller/pulls" target="blank">
<img src="https://img.shields.io/github/issues-pr/sohamsshah/sodium-infinite-scroller?style=flat-square" alt="sodium-infinite-scroller pull-requests"/>
</a>

</p>

<p align="center">
    <a href="https://pixels-hash.vercel.app/" target="blank">sodium-infinite-scroller</a>
    ·
    <a href="https://github.com/sohamsshah/sodium-infinite-scroller/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/sohamsshah/sodium-infinite-scroller/issues/new/choose">Request Feature</a>
</p>

---

A simple, zero-dependency and awesome React Infinite ♾ Scrolling Component based on Intersection Observer API. Works perfectly fine with almost null-hassle and lets you implement infinite scrolling in your web app on the fly! Powered by Vite.js ⚡

<!-- ## **🚀 Demo**

![image](https://user-images.githubusercontent.com/47717492/129268568-b11171ca-1132-4b39-b194-27004fd975c8.png) -->

## **⬇ Installation**

```bash
// using npm
npm i sodium-infinite-scroller

//or you prefer yarn
yarn add sodium-infinite-scroller

```

## **🏄‍♂️ Usage**

### Importing the package

```jsx
// in ES6
import InfiniteScroll from "sodium-infinite-scroller";
// or commonjs
var InfiniteScroll = require("sodium-infinite-scroller");
```

### Using the Infinite Scroll Component

```jsx
<InfiniteScroll
  dataLength={images.length}
  hasMore={hasMore}
  loadMore={getMoreImages}
  loader={<Loader />}
  threshold={VISIBILITY_THRESHOLD}
>
  {contentToBeInfinitelyScrolled}
</InfiniteScroll>
```

### Prop Definition

| prop       | type        | description                                                                                                                                                                                               |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataLength | number      | Denotes the length of the data which is loaded on every call loadMore() function call.                                                                                                                    |
| hasMore    | bool        | Denotes if there is more data to be loaded.                                                                                                                                                               |
| loadMore   | function    | Takes the function that is to be called to fetch more data for infinite scrolling.                                                                                                                        |
| threshold  | number      | Denotes the visibility threshold value of the element that is being observed by the Intersection Observer API. <br>The Value is between 0 and 1; and it represents the percentage of the element visible. |
| loader     | node        | Takes a Node Element(can be a simple HTML element node or even a React Component) to represent the loading state.                                                                                         |
| endContent | node        | Takes a Node Element(can be a simple HTML element node or even a React Component) to show the end content when <br>data is loaded.                                                                        |
| children   | node (list) | The Data Items on while you want to enable infinite scrolling functionality.                                                                                                                              |

## **🛠️ Spinning Up Development Environment**

1. Clone the repository

```bash
git clone https://github.com/sohamsshah/sodium-infinite-scroller.git
```

2. Change the working directory

```bash
cd sodium-infinite-scroller
```

3. Install dependencies

```bash
yarn
```

5. Test working of the package

```bash
yarn run dev
```

You are all set! Open [localhost:3000](http://localhost:3000/) to see the app.

6. Make changes and build the package

```bash
yarn build
```

Check if the build is successful and raise a PR with the proposed changes.

## **💖 We love Contributions**

- **Sodium Infinite Scroller** is truly Open Source. Any sort of contribution to this project are highly appreciated. Create a branch, add commits, and [open a pull request](https://github.com/sohamsshah/sodium-infinite-scroller/compare).

- Please read [`CONTRIBUTING`](CONTRIBUTING.md) for details on our [`CODE OF CONDUCT`](CODE_OF_CONDUCT.md), and the process for submitting pull requests to **Sodium Infinite Scroller**.

## **🛡️ License**

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.

---

## **👨‍💻 Author**

### 👤 Soham Shah

- Twitter: [@sohamsshah\_](https://twitter.com/sohamsshah_)
- Github: [@sohamsshah](https://github.com/sohamsshah)
- Hashnode: [@sohamsshah](https://hashnode.com/@sohamsshah)
- LinkedIN: [@sohamshah456](https://www.linkedin.com/in/sohamshah456/)

---

<h3 align="center">
<b>Liked this npm package?

O Stargazer✨! Can you ⭐️ this too? </b>

</h3>
