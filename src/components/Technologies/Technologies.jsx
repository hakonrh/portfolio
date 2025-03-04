import React from "react";
import './Technologies.css';
import css from "../../images/logos/css.png";
import express from "../../images/logos/expressjs.png";
import figma from "../../images/logos/figma.png";
import github from "../../images/logos/github.png";
import html from "../../images/logos/html.png";
import js from "../../images/logos/js.png";
import mongodb from "../../images/logos/mongodb.png";
import node from "../../images/logos/nodejs.png";
import php from "../../images/logos/php.png";
import postman from "../../images/logos/postman.png";
import reactimg from "../../images/logos/react.png";
import ruby from "../../images/logos/ruby.png";
import sql from "../../images/logos/sql.png";
import ts from "../../images/logos/ts.png";
import vscode from "../../images/logos/vscode.png";

const Technologies = () => {
    return (
        <div className="technologies">
            <h2>Teknologi</h2>
            <div className="tech-image-container">
                <div className="tech-image">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={html} alt="html" /></a>
                    <span>
                        HTML
                    </span>
                </div>
                <div className="tech-image">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={css} alt="css" /></a>
                    <span>
                        CSS
                    </span>
                </div>
                <div className="tech-image">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={js} alt="javascript" /></a>
                    <span>
                        Javascript
                    </span>
                </div>
                <div className="tech-image">
                    <a href="https://react.dev/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={reactimg} alt="react" /></a>
                    <span>
                        React
                    </span>
                </div>
                <div className="tech-image">
                    <a href="https://nodejs.org/en" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={node} alt="node js" /></a>
                    <span>
                        Node.js
                    </span>
                </div>
                <div className="tech-image">
                    <a href="https://expressjs.com/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={express} alt="express js" /></a>
                    <span>
                        Express.js
                    </span>
                </div>
                <div className="tech-image">
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={ts} alt="typescript" /></a>
                    <span>
                        Typescript
                    </span>
                </div>
                <div className="tech-image">
                    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={mongodb} alt="mongodb" /></a>
                    <span>
                        MongoDB
                    </span>
                </div>
                <div className="tech-image">
                    <a href="https://www.php.net/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={php} alt="php" /></a>
                    <span>
                        PHP
                    </span>
                </div>
                <div className="tech-image">
                    <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={ruby} alt="ruby" /></a>
                    <span>
                        Ruby
                    </span>
                </div>
                <div className="tech-image">
                    <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={sql} alt="sql" /></a>
                    <span>
                        SQL
                    </span>
                </div>
                <div className="tech-image">
                    <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={vscode} alt="visual studio code" /></a>
                    <span>
                        VS Code
                    </span>
                </div>
                <div className="tech-image">
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={github} alt="github" /></a>
                    <span>
                        Github
                    </span>
                </div>
                <div className="tech-image">
                    <a href="https://www.figma.com/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={figma} alt="figma" /></a>
                    <span>
                        Figma
                    </span>
                </div>
                <div className="tech-image">
                    <a href="https://www.figma.com/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={postman} alt="postman" /></a>
                    <span>
                        Postman
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Technologies;