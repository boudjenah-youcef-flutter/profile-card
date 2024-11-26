const Page = () => {
  const imageUrl =
    "https://th.bing.com/th/id/OIP.TJO-CjFrXCs8_G_m2KEk5wHaE8?rs=1&pid=ImgDetMain";

  return (
    <div className="p-5 text-center bg-neutral-900 flex-col display: inline-block rounded-lg ">
      <img
        src={imageUrl}
        alt="Profile of Boudjenah Youcef Essedik"
        className="mx-auto rounded-full w-32 h-32 border border-gray-300 center"
      />
      <h1 className="text-2xl font-bold mt-4 text-white p-1">
        Boudjenah Youcef Essedik
      </h1>
      <h3 className="text-lg text-yellow-500 p-1">Sidi Bel Abbas, Algeria</h3>
      <p className=" text-stone-300"> Full Stack Developer </p>

      <div className="flex flex-col p-4 ">
        <a
          href="https://github.com/boudjenah-youcef-flutter"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-600 rounded-md text-stone-300 p-1 hover:bg-yellow-500 active:text-black transition duration-300 ease-in-out m-2"
          aria-label="Open GitHub"
        >
          GitHub
        </a>

        <a
          href="https://www.instagram.com/studio.divin/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-600 rounded-md text-stone-300 p-1 hover:bg-yellow-500 active:text-black transition duration-300 ease-in-out m-2"
          aria-label="Open GitHub"
        >
          Instagram
        </a>

        <a
          href="https://x.com/dmouu22"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-600 rounded-md text-stone-300 p-1 hover:bg-yellow-500 active:text-black transition duration-300 ease-in-out m-2"
          aria-label="Open GitHub"
        >
          Twitter 
        </a>

        <a
          href="https://www.linkedin.com/in/youcef-boudjenah-84b17b204/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-600 rounded-md text-stone-300 p-1 hover:bg-yellow-500 active:text-black transition duration-300 ease-in-out m-2"
          aria-label="Open GitHub"
        >
          LinkedIn 
        </a>
      </div>
    </div>
  );
};

export default Page;
