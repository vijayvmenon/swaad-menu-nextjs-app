import React, { useState } from "react";
import Head from "next/head";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import "./index.css";

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

export async function getStaticProps() {
  // const res = await fetch(`http:localhost:3000/api/menuItem`);
  const res = await fetch(
    `https://swaad-taste-of-kerala.vercel.app/api/menuItem`
  );
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}

function App({ data }) {
  const { data: menuItemsFromApi = null } = data;
  const [menuItems, setMenuItems] = useState(menuItemsFromApi);
  const allCategories = [
    "all",
    ...new Set(menuItems.map((item) => item.category).flat()),
  ];

  const [categories] = useState(allCategories);
  // const { data, error, isLoading } = useSWR(
  //   'http://swaad-taste-of-kerala.vercel.app/api/menuItem',
  //   fetch
  // )
  console.log("click", menuItems, allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menuItemsFromApi);
      return;
    }
    const newItems = menuItemsFromApi.filter((item) =>
      item.category.includes(category)
    );
    setMenuItems(newItems);
  };

  return (
    <>
      <Head>
        <title>SWAAD - The Real Taste Of Kerala LLC</title>
      </Head>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>SWAAD - The Real Taste Of Kerala LLC</h2>
          </div>
          <div className="title">
            <h3>Our Menu</h3>
            <div className="underline" />
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </>
  );
}

export default App;
