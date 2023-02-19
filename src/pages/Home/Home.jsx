const Home = () => {
  return (
    <>
      <h2>Take good care of your small pets</h2>
      <picture>
        <source
          srcSet="
            ../../images/bgs/home-waves-desk-1x.png 1x,
            ../../images/bgs/home-waves-desk-2x.png 2x"
          media="(min-width:1280px)"
        />
        <source
          srcSet="
            ../../images/bgs/home-waves-tab-1x.png 1x,
            ../../images/bgs/home-waves-tab-2x.png 2x"
          media="(min-width:768px)"
        />
        <source
          srcSet="
            ../../images/bgs/home-waves-mob-1x.png 1x,
            ../../images/bgs/home-waves-mob-2x.png 2x"
          media="(min-width:320px)"
        />
        <img src="../../images/bgs/home-waves-desk-1x.png" alt="background" />
      </picture>
      <img
        src="https://pixlr.com/images/index/remove-bg.webp"
        alt="background"
      />
    </>
  );
};

export default Home;
