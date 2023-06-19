const About = () => {
  return (
    <div className="justify-center items-center text-center w-full pt-80 sm:pt-64 dark:bg-dark bg-white flex h-full">
      <div className="flex items-center justify-center text-center flex-col">
        <h1 className="dark:text-light text-dark text-xl mb-24">About</h1>
        <div className="sm:flex sm:space-x-10 mx-4 mb-24">
          <div className="sm:w-[480px] bg-light dark:bg-dark h-[480px] items-center justify-center text-center rounded-xl">
            <img
              src="https://i.imgur.com/91pNXxL.png"
              alt="test"
              className="rounded-xl dark:hidden block"
            />
            <img
              src="https://i.imgur.com/uO7YnJJ.png"
              alt="test"
              className="rounded-xl dark:block hidden"
            />
          </div>
          <div className="sm:w-[480px] bg-light dark:bg-accent h-[480px] items-center justify-center text-center rounded-xl">
            <h1 className="mt-6 text-lg dark:text-light text-dark font-serif">
              Lorem
            </h1>
            <p className="m-6 text-sm dark:text-white font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br />
              <br />
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. <br />
              <br />
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
              <br /> <br />
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
