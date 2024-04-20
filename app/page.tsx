"use client";

import Image from "next/image";
import Link from "next/link";
import "./page.css";

export default function Home(): React.ReactElement {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="text-center font-sans m-auto container items-center flow-root">
      <div className="float-left fixed">
        <div>
          <div className="font-bold text-3xl mx-auto mt-10 mb-4 fit-content border-b-2 p-2 border-color">
            Sections
          </div>
          <div className="text-2xl font-bold">
            <div
              onClick={() => scrolltoHash("start")}
              className="cursor-pointer hover:scale-105 transition-all"
            >
              Start
            </div>
            <div
              onClick={() => scrolltoHash("trailer")}
              className="cursor-pointer hover:scale-105 transition-all"
            >
              Trailer
            </div>
            <div
              onClick={() => scrolltoHash("images")}
              className="cursor-pointer hover:scale-105 transition-all"
            >
              Images
            </div>
            <div
              onClick={() => scrolltoHash("documentation")}
              className="cursor-pointer hover:scale-105 transition-all"
            >
              Documentation
            </div>
            <div
              onClick={() => scrolltoHash("architecture")}
              className="cursor-pointer hover:scale-105 transition-all"
            >
              Engine Architecture
            </div>
            <div
              onClick={() => scrolltoHash("installation")}
              className="cursor-pointer hover:scale-105 transition-all"
            >
              Installation
            </div>
            <div
              onClick={() => scrolltoHash("reflection")}
              className="cursor-pointer hover:scale-105 transition-all"
            >
              Post-Mortem
            </div>
          </div>
        </div>
      </div>
      <div className="float-right">
        <div
          className="font-bold text-9xl mx-auto mb-8 fit-content p-10 border-b-2 border-color"
          id="start"
        >
          KevEngine
        </div>
        <div className="text-2xl mb-4">Kevin Liu</div>
        <div className="mb-4">
          A game engine for platformers, made using SDL3, C++, and Dear ImGui
        </div>
        <div className="text-5xl mb-4 font-bold" id="trailer">
          Trailer
        </div>
        <iframe
          width="720"
          height="406"
          src="https://youtube.com/embed/0gSlU9fl7Ug"
          className="mx-auto mb-4"
        ></iframe>
        <div className="text-5xl mb-8 font-bold" id="images">
          Images
        </div>
        <div className="mb-4">
          <Image
            className="hover:scale-105 transition-all mb-4"
            src="/engine-portfolio/screenshot_1.png"
            height="800"
            width="800"
            alt="Screenshot 1"
            style={{
              borderRadius: "0.5rem",
              borderWidth: "0.25rem",
              borderColor: "rgb(200, 200, 200)",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            priority
          />
          <div className="mb-4">An example scene in edit mode</div>
          <Image
            className="hover:scale-105 transition-all mb-4"
            src="/engine-portfolio/screenshot_2.png"
            height="800"
            width="800"
            alt="Screenshot 2"
            style={{
              borderRadius: "0.5rem",
              borderWidth: "0.25rem",
              borderColor: "rgb(200, 200, 200)",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            priority
          />
          <div className="mb-4">A new scene</div>
          <Image
            className="hover:scale-105 transition-all mb-4"
            src="/engine-portfolio/screenshot_3.png"
            height="800"
            width="800"
            alt="Screenshot 3"
            style={{
              borderRadius: "0.5rem",
              borderWidth: "0.25rem",
              borderColor: "rgb(200, 200, 200)",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            priority
          />
          <div className="mb-4">Play mode</div>
        </div>
        <div className="mb-4">
          <div className="text-5xl mb-4 font-bold" id="documentation">
            Documentation
          </div>
          <div className="mb-4">
            You can find the documentation down below:{" "}
          </div>
          <div
            className="border p-3 rounded-md w-[10rem] mx-auto cursor-pointer hover:scale-110 button-hover"
            onClick={() =>
              window.open(
                "https://faosldkjfhf.github.io/engine-documentation/html",
                "_blank"
              )
            }
          >
            Documentation
          </div>
        </div>
        <div className="mb-4">
          <div className="text-5xl mb-8 font-bold" id="architecture">
            Engine Architecture
          </div>
          <Image
            className="hover:scale-105 transition-all mb-4"
            src="/engine-portfolio/architecture.png"
            height="800"
            width="800"
            alt="Engine Architecture"
            style={{
              borderRadius: "0.5rem",
              borderWidth: "0.25rem",
              borderColor: "rgb(200, 200, 200)",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            priority
          />
        </div>
        <div className="mb-4">
          <div className="text-5xl mb-4 font-bold" id="installation">
            Installation
          </div>
          <div className="text-pretty mx-auto w-2/5 mb-4">
            The game is ran through a python file that imports kevengine.so. In
            order to run it, use the command
            <pre>
              <code>python3.10 game.py -m bin/kevengine.so</code>
            </pre>
            The .so file is compiled for python 3.10 so you need python 3.10
          </div>
          <div
            className="border p-3 rounded-md w-[5rem] mx-auto cursor-pointer hover:scale-110 button-hover"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/112X8ibhNWEph6bIn3DCQBj-K4Lbjv-O8/view?usp=drive_link",
                "_blank"
              )
            }
          >
            Files
          </div>
        </div>
        <div className="text-5xl mb-4 font-bold" id="reflection">
          Post-Mortem
        </div>
        <div className="text-pretty items-center w-2/5 mx-auto mb-4">
          If I had more time, I would add quality of life improvements to the
          engine that would make it easier to add new Components, GameObjects,
          and remove Components. I would also implement a way for GameObjects to
          be created in Python and then added into the Scene through Python. I
          would also revamp collision to be handled in an OnCollision method
          which can be overwritten by different GameObjects. I would also fix my
          KeyboardController movement and collision because sometimes it has
          some weird bugs.
        </div>
        <div className="text-pretty items-center w-2/5 mx-auto mb-4">
          If I were to take the project further, I would focus on adding more
          extendability for the user through scripting. I wasn{`'`}t able to get
          pybind11 working completely in time, so if I could fix that I would
          and then add scripting in Python.
        </div>
        <div className="text-pretty items-center w-2/5 mx-auto mb-8">
          Overall, the project went pretty well especially implementing the Dear
          ImGui library into it. There were lots of questions on both GitHub and
          StackOverflow as well as a demo that implemented every GUI component
          so I was able to refer to those to create my GUI.
        </div>
      </div>
    </div>
  );
}
