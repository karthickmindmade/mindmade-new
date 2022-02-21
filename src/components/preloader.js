function Preloader() {
  return (
    <div className="preloader">
    <div className="preloader-bar">
        <div className="preloader-progress"></div>
    </div>
    <h1 className="title v-middle">
        <span className="percent">0</span>
        <span className="text-strok"><img className="light-logo" src="assets/img/logo.png" alt="" /></span>
        <span className="text-fill"><img className="light-logo" src="assets/img/logo.png" alt="" /></span>
    </h1>
</div>
  );
}

export default Preloader;
