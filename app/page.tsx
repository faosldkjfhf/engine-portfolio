"use client";

import Image from "next/image";
import Link from "next/link";
import "./page.css";

export default function Home(): React.ReactElement {
  return (
    <div className="text-center font-sans m-auto container items-center">
      <div className="font-bold text-9xl mx-auto mb-8 fit-content p-10 border-b-2">
        KevEngine
      </div>
      <div className="text-2xl mb-4">Kevin Liu</div>
      <div className="mb-4">
        A game engine for platformers, made using SDL3, C++, and Dear ImGui
      </div>
      <div className="text-5xl mb-4 font-bold">Trailer</div>
      <div className="text-5xl mb-4 font-bold">Images</div>
      <div className="mb-4">
        <Image
          src="https://faosldkjfhf.github.io/engine-portfolio/screenshot_1.png"
          height="800"
          width="800"
          alt="Screenshot 1"
          style={{
            borderRadius: "0.5rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <Image
          src="https://faosldkjfhf.github.io/engine-portfolio/screenshot_2.png"
          height="800"
          width="800"
          alt="Screenshot 2"
          style={{
            borderRadius: "0.5rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <Image
          src="https://faosldkjfhf.github.io/engine-portfolio/screenshot_3.png"
          height="800"
          width="800"
          alt="Screenshot 3"
          style={{
            borderRadius: "0.5rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
      <div className="mb-4">
        <div className="text-5xl mb-4 font-bold">Documentation</div>
        <div className="mb-4">You can find the documentation down below: </div>
        <div
          className="border p-3 rounded-md w-[10rem] mx-auto cursor-pointer hover:scale-110 button-hover"
          onClick={() => window.open("", "_blank")}
        >
          Documentation
        </div>
      </div>
      <div className="mb-4">
        <div className="text-5xl mb-4 font-bold">Engine Architecture</div>
        <Image
          src="https://faosldkjfhf.github.io/engine-portfolio/architecture.png"
          height="1000"
          width="1000"
          alt="Engine Architecture"
          style={{
            borderRadius: "0.5rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
      <div className="mb-4">
        <div className="text-5xl mb-4 font-bold">Installation</div>
        <div className="text-pretty mx-auto w-2/5 mb-4">
          The game is ran through a python file that imports kevengine.so. In
          order to run it, use the command
          <pre>
            <code>python3.x game.py -m bin/kevengine.so</code>
          </pre>
          where x is your python version
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
      <div className="text-5xl mb-4 font-bold">Post-Mortem</div>
      <div className="text-pretty items-center w-2/5 mx-auto mb-8">
        If I had more time, I would add quality of life improvements to the
        engine that would make it easier to add new Components, GameObjects, and
        remove Components. I would also implement a way for GameObjects to be
        created in Python and then added into the Scene through Python. I would
        also revamp collision to be handled in an OnCollision method which can
        be overwritten by different GameObjects.
      </div>
    </div>
  );
}
