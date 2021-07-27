import React from "react";

function Faq() {
  return (
    <div className="p-4 max-w-6xl mx-auto font-bodyText">
      <div className="my-4">
        <h3 className="text-xl">What is this Blogpost?</h3>
        <p>
          My homebrewed project to learn React.js, Tailwind CSS and hopefully
          more.
        </p>
      </div>
      <div className="my-4">
        <h3 className="text-xl">What can it do?</h3>
        <p>
          Look good for now! I'm working on implementing normal blog
          functionality with user registration and normal blog posting stuff!
        </p>
      </div>
      <div className="my-4">
        <h3 className="text-xl">It's not finished and I can't add a post?</h3>
        <p>
          Have You tried turning it on and off? Probably haven't added that
          functionality :)
        </p>
      </div>
    </div>
  );
}

export default Faq;
