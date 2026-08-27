'use client'
import { FC , ReactNode } from "react"
import Link from "next/link"
import Markdown from 'react-markdown'
import { Helmet } from 'react-helmet-async';
import "./style.css"

export const ArticleCard: FC<{ title: string , component:string , children:string }> = ({ title , component , children }) => {
  let url = "/" + component
  return (
    <>
      <Link href={url} className="articalBox">
        <h3>
          {title}
        </h3>
        <p>
          {children}
        </p>
      </Link>
    </>
  );
}
export const ReadBtn: FC<{ url: string , msg?:string }> = ({ url , msg="" }) => {
  if (url.startsWith("http")) {
    return(
      <a href={url} className="btnArticleLinkInText">{msg}↗</a>
    )
  }
  return(
    <Link href={url} className="btnArticleLinkInText">{msg}↗</Link>
  )
}

export const SubTitle: FC<{ subTitle: string }> = ({ subTitle }) => {
  return(   
    <h2 className="sectionTitleLine">{subTitle}</h2>
  )
}

export const References_link: FC<{author?:string , lastUpdate?:string , url:string , articleTitle:string}> = ({author , lastUpdate , url , articleTitle}) => {
  return(
    <>
      {author && author} {author && " , "} {lastUpdate && lastUpdate}  {lastUpdate && " , "} <a href={url}>{articleTitle}</a><br />
    </>
  );
}

export const References_book: FC<{author:string , lastUpdate?:string , bookTitle:string , chapter?:string}> = ({author , lastUpdate , chapter , bookTitle}) => {
  return(
    <>
      {author} , {bookTitle}{ chapter && "．"}{chapter && `${chapter}`} , {lastUpdate && `${lastUpdate}`}  <br />
    </>   
  );
}

export const LastUpdate: FC<{}> =() => {
  
  /* 更新日の取得 */
  const last = new Date(document.lastModified);
  const year = last.getFullYear();
  const month = last.getMonth() + 1;
  const date = last.getDate();

  const dateString :string =  year + '/' + month + '/' + date;
  return(
    <div className="right">
      🕓本記事の最終更新日は
      <time>{dateString}</time>
      です。
    </div>
  )
}

export const SourceCode:FC<{children:string ,language?: string}> =({children, language='python'}) => {
  const  markdown = `\`\`\`${language}
${children}
\`\`\``;
  return(
    <>
    <div className="codeBlock">
      <Markdown >
{markdown}
      </Markdown>

    </div>
    </>
  );
}

export const CustomTable:FC<{children:ReactNode , cap?:string}> = ({children , cap}) => {
  return(
    <>      
      <table>
        {cap&&<caption>{cap}</caption>}
        <tbody>
          {children}
        </tbody>
      </table>
    </>
  )
}

import ReactGA from 'react-ga4'
export const ArticalPage:FC<{title:string , children:ReactNode}> = ({title , children}) => {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: title,
    })
  }, [title])
  return(
    <>
      <Helmet>
        <title>{title}</title>
        {/* <!-- Google AdSense --> */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2761899560206236" crossOrigin="anonymous"></script>
      </Helmet> 
      <h1 id="articleTitle">{title}</h1>
      <LastUpdate/>
      {children}
    </>
  )
}
export const FlexBox:FC<{children:ReactNode}> = ({children}) => {

  return(
    <div className="flexBox">
      {children}
    </div>
  )
}
export const Img_10:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_10" alt={alt} />
    </>
  )
}
export const Img_20:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_20" alt={alt} />
    </>
  )
}
export const Img_30:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_30" alt={alt} />
    </>
  )
}
export const Img_40:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_40" alt={alt} />
    </>
  )
}
export const Img_50:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_50" alt={alt} />
    </>
  )
}
export const Img_60:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_60" alt={alt} />
    </>
  )
}
export const Img_70:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_70" alt={alt} />
    </>
  )
}
export const Img_80:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_80" alt={alt} />
    </>
  )
}
export const Img_90:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_90" alt={alt} />
    </>
  )
}
export const Img_100:FC<{path:string , alt?:string}> = ({path , alt}) => {

  return(
    <>
      <img src={path} className="imgSize_100" alt={alt} />
    </>
  )
}
import React, { useState , useEffect } from "react";
export const Header_sm: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
    <div className="header-box"></div>
    <header className="header">
      <div className="header-inner">
        <HomeLink />
        <Link href="/" className="site-title">かわいいてっくももか</Link>
        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="menu">
          <Link href="/" className="header-a">HOME</Link>
          <Link href="/list-tech" className="header-a">ARTICLE</Link>
          <Link href="/privacy-policy" className="header-a">PRIVACY</Link>
        </nav>
      )}
    </header>
    </>
  );
};

export const Header_pc: FC = () => {
  return(
    <>
      <div className="header-box"></div>
      <header className="header">
        <div className="header-inner">
          <HomeLink />
          <Link href="/" className="site-title">かわいいてっくももか</Link>
          <nav className="pc-menu">
            <ul className="header-ul">
              <li className="header-li"><Link href="/" className="header-a">HOME</Link></li>
              <li className="header-li"><Link href="/list-tech" className="header-a">ARTICLE</Link></li>
              <li className="header-li"><Link href="/privacy-policy" className="header-a">PRIVACY</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export const HomeLink: React.FC = () => {
  return (
    <Link href="/">
      <img
        src="favicon.ico"
      />
    </Link>
  );
};

export const Header: React.FC = () => {
  const [isSmartPhone, setIsSmartPhone] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    setIsSmartPhone(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => {
      setIsSmartPhone(event.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <>
      {isSmartPhone ? <Header_sm /> : <Header_pc />}
    </>
  );
};