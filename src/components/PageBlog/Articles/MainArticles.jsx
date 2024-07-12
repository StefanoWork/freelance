"use client";

import style from "./MainArticles.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { request, gql } from "graphql-request";

import freccia from "../../../Images/Freccina1.png";

export default function Articles() {
  const [articoli, setArticoli] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const endpoint =
      "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clufjd0ci1nn407we3c9m8hko/master";

    const query = gql`
      {
        articles {
          slug
          cover {
            url
          }
          titolo
          riassunto
          articolo {
            html
          }
        }
      }
    `;
    request(endpoint, query).then((data) => {
      console.log(data.articles);
      setArticoli(data.articles);
      setIsLoading(false);
      console.log(data);
    });
  }, []);

  let leftArticle = [];
  let rightArticles = [];
  let normalArticles = [];

  articoli.forEach((articolo, index) => {
    if (index === 0) {
      leftArticle.push(articolo);
    } else if (index === 1 || index === 2) {
      rightArticles.push(articolo);
    } else {
      normalArticles.push(articolo);
    }
  });

  return (
    <div className={style.container}>
      <h2 className={style.title}>Blog</h2>
      {isLoading ? (
        <div>Caricamento...</div>
      ) : (
        articoli && (
          <>
            <div className={style.left}>
              {leftArticle.map((articolo) => (
                <div key={articolo.articles.id} className={style.article}>
                  <Image
                    className={style.imgBlog}
                    src={articolo.articles.cover.url}
                    alt={articolo.attributes.alt}
                  />
                  <h3 className={style.titleArticle}>
                    {articolo.articles.titolo}
                  </h3>
                  <div className={style.textArticle}>
                    {articolo.articles.articolo}
                  </div>
                  <Link
                    href={`/blog/${articolo.articles.slug}`}
                    className={style.link}
                  >
                    Leggi tutto{" "}
                    <Image
                      className={style.freccia}
                      src={freccia}
                      alt="Freccia"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className={style.right}>
              {rightArticles.map((articolo) => (
                <div key={articolo.articles.id} className={style.article}>
                  <Image
                    className={style.imgBlog}
                    src={articolo.articles.cover.url}
                    alt={articolo.attributes.alt}
                  />
                  <h3 className={style.titleArticle}>
                    {articolo.articles.titolo}
                  </h3>
                  <div className={style.textArticle}>
                    {articolo.articles.articolo}
                  </div>
                  <Link
                    href={`/blog/${articolo.articles.slug}`}
                    className={style.link}
                  >
                    Leggi tutto{" "}
                    <Image
                      className={style.freccia}
                      src={freccia}
                      alt="Freccia"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className={style.normal}>
              {normalArticles.map((articolo) => (
                <div key={articolo.id} className={style.article}>
                  <Image
                    className={style.imgBlog}
                    src={articolo.articles.id}
                    alt={articolo.articles.alt}
                  />
                  <h3 className={style.titleArticle}>
                    {articolo.articles.titolo}
                  </h3>
                  <div className={style.textArticle}>
                    {articolo.articles.articolo}
                  </div>
                  <Link
                    href={`/blog/${articolo.articles.slug}`}
                    className={style.link}
                  >
                    Leggi tutto{" "}
                    <Image
                      className={style.freccia}
                      src={freccia}
                      alt="Freccia"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
}
